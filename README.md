
---

# 🚀 Configuration d'Environnement de Développement React

[![GitHub stars](https://img.shields.io/github/stars/marcproxy/config-env.svg?style=social&label=Star)](https://github.com/marcproxy/config-env)  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)  [![Node.js Version](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)  [![React Version](https://img.shields.io/badge/React-19-blueviolet.svg)](https://reactjs.org/)  [![Contributions welcome](https://img.shields.io/badge/Contributions-welcome-orange.svg)](https://github.com/marcproxy/config-env/issues)

## 📋 Présentation du Projet

Ce projet est un modèle complet de configuration d'environnement pour le développement d'applications React. Il inclut des outils modernes pour l'intégration continue, les tests, le linting, la génération de documentation et la gestion multi-environnements.

### 🌟 Fonctionnalités Clés

- 🔧 **Configuration Webpack complète**  
- 🧪 **Tests unitaires avec Jest**  
- 🔍 **Linting avec ESLint**  
- 📝 **Génération de documentation avec JSDoc**  
- 💡 **Gestion multi-environnements**  
- 🚢 **Workflow de commits conventionnels**

## 🛠 Technologies Utilisées

![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=flat&logo=webpack&logoColor=white)  ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)  ![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)  ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)  ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 16+
- npm 8+
- Git

### Installation

```bash
# Cloner le repository
git clone https://github.com/marcproxy/config-env.git

# Accéder au répertoire
cd config-env

# Installer les dépendances
npm install
```

## 📦 Scripts Principaux

### Développement

| Commande              | Description                                                                                  | Environnement |
|-----------------------|----------------------------------------------------------------------------------------------|---------------|
| `npm run dev`          | Lance le serveur de développement avec Webpack, exécute les vérifications de code et génère la documentation. | Développement |
| `npm run dev:staging`  | Lance le serveur en mode staging, idéal pour l'environnement de pré-production.              | Staging       |
| `npm run dev:testing`  | Lance le serveur en mode testing, utile pour les tests locaux.                              | Testing       |

### Construction

| Commande              | Description                                                                                  | Environnement |
|-----------------------|----------------------------------------------------------------------------------------------|---------------|
| `npm run prod`         | Prépare l'application pour la production : lance les tests puis construit le projet en mode production. | Production    |
| `npm run build:staging`| Nettoie l'environnement, puis construit le projet en mode production pour le staging.        | Staging       |
| `npm run build:testing`| Nettoie l'environnement, puis construit le projet en mode production pour les tests.         | Testing       |

### Tests et Qualité

| Commande              | Description                                                                                  |
|-----------------------|----------------------------------------------------------------------------------------------|
| `npm test`            | Exécute les tests unitaires avec Jest.                                                       |
| `npm run lint`        | Lance ESLint pour vérifier et corriger automatiquement les problèmes de style et de code.   |
| `npm run format`      | Formate le code avec Prettier selon les règles définies dans la configuration.              |
| `npm run type-check`  | Vérifie les types TypeScript si le projet utilise TypeScript.                               |

### Gestion des Commits

| Commande              | Description                                                                                  |
|-----------------------|----------------------------------------------------------------------------------------------|
| `npm run commit`       | Ouvre Commitizen pour générer un message de commit conventionnel.                           |

### Documentation

| Commande              | Description                                                                                  |
|-----------------------|----------------------------------------------------------------------------------------------|
| `npm run doc`          | Génère la documentation à partir des commentaires dans le code source avec JSDoc.           |
| `npm run doc:open`     | Ouvre un serveur HTTP local pour afficher la documentation générée à l'adresse `http://localhost:5000`. |

---

## 🛠 Détails des Commandes `npm run`

### Développement

- **`dev`**  
  Lance un serveur de développement avec Webpack, puis exécute les vérifications de code avec ESLint et génère la documentation. Cette commande prépare l'environnement pour le développement.

  ```bash
  webpack serve && npm run lint && npm run doc && commitizen init cz-conventional-changelog --y
  ```

- **`dev:staging`**  
  Lance un serveur de développement en mode staging pour tester le code dans un environnement similaire à la production. Cette commande configure l'environnement `staging` et démarre le serveur Webpack en mode développement.

  ```bash
  cross-env NODE_ENV=staging webpack serve --mode development
  ```

- **`dev:testing`**  
  Lance un serveur de développement en mode testing pour tester les fonctionnalités avec un environnement isolé de test. Cette commande utilise Webpack en mode développement, mais avec la variable d'environnement `NODE_ENV` définie à `testing`.

  ```bash
  cross-env NODE_ENV=testing webpack serve --mode development
  ```

### Build

- **`prod`**  
  Cette commande effectue deux actions : 
  1. Lance les tests avec `npm run test`.
  2. Compile le projet pour la production avec Webpack (`--mode production`).

  ```bash
  cross-env NODE_ENV=production npm run test && webpack --mode production
  ```

- **`build:staging`**  
  Nettoie l'environnement (supprime les fichiers générés) puis construit le projet en mode production pour l'environnement `staging`.

  ```bash
  cross-env NODE_ENV=staging npm run clean && webpack --mode production
  ```

- **`build:testing`**  
  Nettoie l'environnement puis construit le projet pour l'environnement `testing` en mode production.

  ```bash
  cross-env NODE_ENV=testing npm run clean && webpack --mode production
  ```

### Tests

- **`test`**  
  Exécute les tests unitaires avec Jest.

  ```bash
  jest
  ```

- **`test:coverage`**  
  Exécute les tests avec Jest tout en générant un rapport de couverture de code.

  ```bash
  jest --coverage
  ```

- **`test:watch`**  
  Lance Jest en mode "watch", ce qui signifie que les tests seront réexécutés automatiquement chaque fois qu'un fichier est modifié.

  ```bash
  jest --watch
  ```

- **`test:ci`**  
  Exécute les tests avec Jest dans un environnement de CI, avec un rapport de couverture.

  ```bash
  cross-env NODE_ENV=test jest --ci --coverage
  ```

### Linting

- **`lint`**  
  Vérifie et corrige les erreurs de code avec ESLint pour les fichiers `.js` et `.jsx`.

  ```bash
  eslint 'src/**/*.{js,jsx}' --fix
  ```

- **`lint:strict`**  
  Vérifie le code sans appliquer de corrections automatiques.

  ```bash
  eslint 'src/**/*.{js,jsx}'
  ```

- **`lint:styles`**  
  Vérifie les fichiers `.scss` pour respecter les règles de style définies dans Stylelint.

  ```bash
  stylelint '**/*.scss'
  ```

### Formatage

- **`format`**  
  Formate tous les fichiers de code dans le répertoire `src` avec Prettier.

  ```bash
  prettier --write 'src/**/*.{js,jsx,ts,tsx,json,css,scss,md}'
  ```

- **`lint-no-fail`**  
  Lance ESLint pour corriger les erreurs de code mais ne fait pas échouer la commande si des erreurs sont trouvées.

  ```bash
  eslint 'src/**/*.{js,jsx}' --fix || true
  ```

### Documentation

- **`doc`**  
  Génére la documentation à partir des commentaires dans le code source.

  ```bash
  jsdoc -c jsdoc.config.json
  ```

- **`doc:open`**  
  Démarre un serveur local pour servir la documentation générée.

  ```bash
  node -e "const http=require('http');const handler=require('serve-handler');const server=http.createServer((req,res)=>handler(req,res,{public:'docs'}));server.listen(5000,()=>console.log('Documentation served at http://localhost:5000'))"
  ```

### Préparation

- **`prepare`**  
  Initialise Husky pour ajouter des hooks Git afin de valider

 le code avant les commits.

  ```bash
  husky
  ```

- **`commit`**  
  Utilise Commitizen pour générer un message de commit conventionnel.

  ```bash
  cz
  ```

### Nettoyage

- **`clean`**  
  Supprime les répertoires `dist`, `coverage` et `docs`.

  ```bash
  rm -rf dist coverage docs
  ```

---

## 📈 Analyse des Bundles

- **`analyze`**  
  Génère un rapport d'analyse des bundles Webpack afin de visualiser la taille des différents fichiers.

  ```bash
  webpack --profile --json > stats.json && webpack-bundle-analyzer stats.json
  ```

---

## 🌍 Contribution

Les contributions sont les bienvenues! Pour participer :

1. Fork le projet
2. Crée une branche pour ta fonctionnalité (`git checkout -b feature/ma-fonctionnalité`)
3. Commit tes modifications (`git commit -am 'Ajout de ma fonctionnalité'`)
4. Pousse sur ta branche (`git push origin feature/ma-fonctionnalité`)
5. Crée une pull request

---

## 📝 Licence

Ce projet est sous licence MIT - consultez le fichier [LICENSE](LICENSE) pour plus de détails.

--- 
