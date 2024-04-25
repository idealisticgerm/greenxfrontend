import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
// Create the AuthContext
const AuthContext = createContext();

// Create the AuthProvider component
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });


  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = auth.token;
  }, [auth.token]);
  
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
  }, []);
  // You can have functions to update the auth state here

  // Provide the auth state and update function to the children
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth state and functions
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };