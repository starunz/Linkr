import { BrowserRouter, Routes, Route } from "react-router-dom";

import ResetStyle from "./components/styles/resetStyle";
import GlobalStyle from "./components/styles/globalStyle";

import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";

import Home from "./pages/home";

import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <ResetStyle />
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/timeline" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider >

    );
}

export default App;