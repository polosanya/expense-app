import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Auth from './pages/Auth/Auth';

const root = ReactDOM.createRoot(
  document.getElementById("root") || new HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auth />}></Route>
    </Routes>
  </BrowserRouter>
);
