import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";

import ResetStyle from "./components/styles/resetStyle";
import GlobalStyle from "./components/styles/globalStyle";
import { AuthProvider } from "./contexts/AuthContext";

import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";


const App = () => {
    return (
        <AuthProvider>
            <ResetStyle />
            <GlobalStyle />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/timeline" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider >

    );
}

export default App;