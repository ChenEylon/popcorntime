import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
