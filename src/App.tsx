import React from 'react';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import FormPage from "./components/Pages/FormPage/FormPage";
import ThankYouPage from "./components/Pages/ThankYouPage/ThankYouPage"
import './App.css';

import { UserProvider } from './components/contexts/UserContext'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="thankyou" element={<ThankYouPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
