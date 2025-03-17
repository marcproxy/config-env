/* eslint-disable no-undef */
import '@testing-library/jest-dom';

// Configuration des variables d'environnement pour les tests
global.process = {
  ...process,
  env: {
    NODE_ENV: 'test',
    API_URL: 'http://localhost:8080/mock-api'
  }
};