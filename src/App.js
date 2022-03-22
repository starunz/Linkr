import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";



export default function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
}
