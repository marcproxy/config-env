import React from 'react';
import '../styles/main.scss';

/**
 * Composant principal de l'application
 * 
 * Ce composant affiche des informations de base sur l'environnement 
 * de l'application et la configuration de l'API.
 * 
 * @component
 * @example
 * return (
 *   <App />
 * )
 * 
 * @returns {React.ReactElement} Élément React représentant le composant App
 */
function App() {
  /**
   * Récupère l'environnement courant de l'application
   * Par défaut, utilise 'development' si aucun environnement n'est spécifié
   * 
   * @type {string}
   * @default 'development'
   */
  const nodeEnv = process.env.NODE_ENV || 'development';

  /**
   * Récupère l'URL de l'API
   * Utilise une URL locale par défaut si aucune URL n'est configurée
   * 
   * @type {string}
   * @default 'http://localhost:8080/api'
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