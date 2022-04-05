import React from 'react';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import FormPage from "./components/Pages/FormPage/FormPage";
import ThankYouPage from "./components/Pages/ThankYouPage/ThankYouPage"
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="thankyou" element={<ThankYouPage />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
