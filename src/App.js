import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from './Compounts/Home';
import Survey from './Forms/Survey';
import Applicationforms from './Forms/Applicationforms';
import Employmentform from './Forms/Employmentform';
import EventForm from './Forms/EventForm';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Survey" element={<Survey />} />
        <Route path="/Applicationforms" element={<Applicationforms />} />
        <Route path="/Employmentform" element={<Employmentform />} />
        <Route path="/EventForm" element={<EventForm />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();