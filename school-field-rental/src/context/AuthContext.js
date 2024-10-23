import { createContext, useState, useContext } from 'react';

//AuthContext
const AuthContext = createContext();

//Ccustom hook for consuming AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user object role info

  // Simulate login function (replace this later with real API)
  const login = (role) => {
    setUser({ role });  // e.g., role could be 'school', 'renter', etc.
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
