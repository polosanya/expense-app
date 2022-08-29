import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root') || new HTMLElement;
const root = createRoot(container);

root.render(
  <App />
);
