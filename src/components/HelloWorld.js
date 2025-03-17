/* eslint-disable no-undef */
import React from 'react';

/**
 * Composant principal de l'application
 * 
 * Affiche un message "Hello World" et récupère les informations d'environnement
 * 
 * @component
 * @returns {React.ReactElement} Élément React principal de l'application
 */
function App() {
  /**
   * Récupère l'environnement courant
   * Utilise NODE_ENV ou définit par défaut 'development'
   * 
   * @type {string}
   */
  const nodeEnv = process.env.NODE_ENV || 'development';

  /**
   * Récupère l'URL de l'API
   * Utilise API_URL ou définit une URL locale par défaut
   * 
   * @type {string}
   */
  const apiUrl = process.env.API_URL || 'http://localhost:8080/api';

  return (
    <div className="container">
      <h1>Hello World!</h1>
      <p>Current environment: {nodeEnv}</p>
      <p>API URL: {apiUrl}</p>
    </div>
  );
}

export default App;