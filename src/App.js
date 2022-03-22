import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";


export default function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/timeline" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
}