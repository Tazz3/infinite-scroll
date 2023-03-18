import "./App.css";
import React, { useState } from "react";
import LoadingScreen from "./components/UI/LoadingScreen";
import { Routes, Route } from "react-router-dom";
import User from "./components/ExtraInfo/User";

import MainPage from "./components/MainPage/MainPage";

function App() {
  const [loadingScreen, setLoadingScreen] = useState(true);

  return (
    <>
      <div className="content">
        <Routes>
          <Route path="/infinite-scroll/" element={<MainPage />} />
          <Route path="/User/:id" element={<User />} />
        </Routes>

        {loadingScreen && <LoadingScreen />}
      </div>
    </>
  );
}

export default App;
