import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";


export default function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
}