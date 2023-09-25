import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contact from "../pages/Contacts.js";
import Services from "../pages/Services.js";
import Exercise1 from "../pages/Exercise1.js";
import Exercise2 from "../pages/Exercise2.js";
import Exercise3 from "../pages/Exercise3.js";
import Exercise8 from "../pages/Exercise8.js";
import Exercise5 from "../pages/Exercise5.js";
import Exercise7 from "../pages/Exercise7.js";
import Exercise6 from "../pages/Exercise6.js";
import Exercise4 from "../pages/Exercise4.js";
import Login from "../components/Login.js";
import Profile from "../components/Profile.js";


import { LoginContext } from "../context/LoginContext.js";

import React, { useState } from "react";
import { AppProvider } from "../AppContext";

import ToDoList from "../pages/ToDoList.js";

function MyRouter() {
  const [username, setUsername] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Ex1" element={<Exercise1 />} />
        <Route path="/Ex2" element={<Exercise2 />} />
        <Route path="/Ex3" element={<Exercise3 />} />
        <Route path="/Ex4" element={<Exercise4 />} />
        <Route path="/Ex5" element={<Exercise5 />} />
        <Route path="/Ex6" element={<Exercise6 />} />
        <Route path="/Ex7" element={<Exercise7 />} />
        <Route path="/Ex8" element={<Exercise8 />} />
        <Route path="/Ex7b" element={<ToDoList />} />
        <Route
          path="/Extra"
          element={
            <LoginContext.Provider
              value={{ username, setUsername, setShowProfile }}
            >
              {showProfile ? <Profile /> : <Login />}
            </LoginContext.Provider>
          }
        />
      </Routes>
    </AppProvider>
  );
}

export default MyRouter;
