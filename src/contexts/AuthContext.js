import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem('auth'));
  const [auth, setAuth] = useState(persistedAuth);

  const login = (authData) => {
    setAuth(authData);
    localStorage.setItem('auth', JSON.stringify(authData));
  }

  const logoff = () => {
    setAuth('');
    localStorage.removeItem('auth');
  }

  return (
    <AuthContext.Provider value={{ auth, login, logoff }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;