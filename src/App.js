import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/loginPage";
import SignUp from "./pages/signUpPage";
import UserPage from "./pages/userPage.js";

import ResetStyle from "./components/styles/resetStyle";
import GlobalStyle from "./components/styles/globalStyle";

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
                    <Route path="/timeline" element={<Home/>} />
                    <Route path="/hashtag/:hashtag" element={<Home/>} />
                    <Route path="/user/:id" element={<UserPage/>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider >

    );
}

export default App;