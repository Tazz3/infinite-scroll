import "./App.css";
import React from "react";

import { Routes, Route } from "react-router-dom";
import User from "./components/ExtraInfo/User";

import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <>
      <div className="content">
        <Routes>
          <Route path="/infinite-scroll/" element={<MainPage />} />
          <Route path="/User/:id" element={<User />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
