// LoginContext.js

import React, { createContext, useState } from 'react';

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (email, password) => {
    const userList = [
      { email: "admin@email.com", password: "Admin" },
      { email: "user@email.com", password: "12345678" },
    ];

    const user = userList.find(u => u.email === email && u.password === password);
 
    console.log('Tentando fazer login com:', email, password);

    if (user) {
      setEmail(email);
      setShowProfile(true);

      if (email === "admin@email.com") {
        setIsAdmin(true);
      }

      setIsLoggedIn(true);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail(""); 
    setShowProfile(false); 
    setIsAdmin(false);
  };

  return (
    <LoginContext.Provider value={{ 
      isLoggedIn, 
      handleLogin, 
      handleLogout, 
      email, 
      setEmail,  
      showProfile, 
      setShowProfile, 
      isAdmin 
    }}>
      {children}
    </LoginContext.Provider>
  );
};
