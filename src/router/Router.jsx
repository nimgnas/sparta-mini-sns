import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Writing from "../pages/Writing";
import Detail from "./Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/Writing" element={<Writing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
