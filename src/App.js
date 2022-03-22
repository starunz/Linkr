import { BrowserRouter, Routes, Route } from "react-router-dom";

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
                    <Route path='/' element={< example/>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;