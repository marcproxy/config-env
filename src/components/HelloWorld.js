// src/components/App.jsx
import React from 'react';

function App() {
  return (
    <div className="container">
      <h1>Hello World!</h1>
      <p>Current environment: {process.env.NODE_ENV || 'development'}</p>
      <p>API URL: {process.env.API_URL || 'http://localhost:8080/api'}</p>
    </div>
  );
}

export default App;