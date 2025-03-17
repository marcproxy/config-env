import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/HelloWorld';
import './styles/main.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);