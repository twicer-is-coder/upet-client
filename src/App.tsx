import React from 'react';
import { Routes, Route } from "react-router-dom";
import FormPage from "./components/FormPage/FormPage";
import ThankYouPage from "./components/ThankYouPage/ThankYouPage"

import './App.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="thankyou" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;
