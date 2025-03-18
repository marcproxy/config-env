# 🚀 Configuration d'Environnement de Développement React

[![GitHub stars](https://img.shields.io/github/stars/marcproxy/config-env.svg?style=social&label=Star)](https://github.com/marcproxy/config-env)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/React-19-blueviolet.svg)](https://reactjs.org/)
[![Contributions welcome](https://img.shields.io/badge/Contributions-welcome-orange.svg)](https://github.com/marcproxy/config-env/issues)

## 📋 Présentation du Projet

Un modèle complet de configuration d'environnement de développement pour applications React, intégrant les meilleures pratiques de développement moderne.

### 🌟 Fonctionnalités Clés

- 🔧 Configuration Webpack complète
- 🧪 Tests unitaires avec Jest
- 🔍 Linting avec ESLint
- 📝 Génération de documentation avec JSDoc
- 💡 Gestion multi-environnements
- 🚢 Workflow de commits conventionnels

## 🛠 Technologies Utilisées

![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=flat&logo=webpack&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)

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
| Commande | Description | Environnement |
|----------|-------------|---------------|
| `npm run dev` | Serveur de développement | Développement |
| `npm run dev:staging` | Serveur de staging | Staging |
| `npm run dev:testing` | Serveur de testing | Testing |

### Construction
| Commande | Description | Environnement |
|----------|-------------|---------------|
| `npm run prod` | Build de production | Production |
| `npm run build:staging` | Build de staging | Staging |
| `npm run build:testing` | Build de testing | Testing |

### Tests et Qualité
| Commande | Description |
|----------|-------------|
| `npm test` | Exécuter les tests |
| `npm run lint` | Vérifier le code |
| `npm run format` | Formater le code |
| `npm run type-check` | Vérifier les types TypeScript |

### Gestion des Commits
| Commande | Description |
|----------|-------------|
| `npm run commit` | Générer un commit conventionnel avec Commitizen |

---

## 🤝 Contribution

### Workflow de Contribution
1. **Fork du projet** et clone du repository
   ```bash
   git clone https://github.com/marcproxy/config-env.git
   ```
2. **Créer une branche de feature**
   ```bash
   git checkout -b feature/ma-fonctionnalite
   ```
3. **Effectuer vos modifications** et les ajouter
   ```bash
   git add .
   ```
4. **Générer un commit conventionnel**
   ```bash
   npm run commit
   ```
   - Cette commande ouvre une interface interactive pour créer un commit structuré avec Commitizen.
   - Elle suit les conventions **Conventional Commits** (ex: `feat: ajout de la gestion des utilisateurs`).
5. **Pusher la branche**
   ```bash
   git push origin feature/ma-fonctionnalite
   ```
6. **Ouvrir une Pull Request** sur GitHub.

### Exemples de Commits Conventionnels
| Type | Description | Exemple |
|------|------------|---------|
| `feat` | Ajout d'une nouvelle fonctionnalité | `feat: ajout du mode sombre` |
| `fix` | Correction d'un bug | `fix: correction du bug d'affichage` |
| `docs` | Mise à jour de la documentation | `docs: mise à jour du README` |
| `style` | Changements de style (indentation, espaces, etc.) | `style: reformattage du code` |
| `refactor` | Refactorisation du code sans changement de comportement | `refactor: amélioration de la gestion des erreurs` |
| `test` | Ajout ou modification de tests | `test: ajout de tests unitaires pour UserService` |
| `chore` | Tâches de maintenance (build, CI, dépendances) | `chore: mise à jour des dépendances` |

---

## 🔧 Configuration Détaillée

### Variables d'Environnement
- Fichier `.env.example` fourni comme modèle
- Création automatique du `.env`
- Configuration multi-environnements

### Environnements Supportés
- Développement
- Staging
- Testing
- Production

---

## 📦 Gestion des Dépendances

```bash
# Vérifier les mises à jour
npm outdated

# Mettre à jour toutes les dépendances
npm update
```

---

## 📄 Licence

Distribué sous licence ISC.  
Voir `LICENSE` pour plus de détails.

---

## 🔗 Ressources

- [Documentation React](https://reactjs.org/)
- [Webpack Configuration](https://webpack.js.org/)
- [Jest Testing](https://jestjs.io/)
- [ESLint Guide](https://eslint.org/)
- [Prettier Docs](https://prettier.io/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## 📞 Contact

Marc Martin - [marc.martin@ensitech.eu]

Lien du Projet : [https://github.com/marcproxy/config-env](https://github.com/marcproxy/config-env)

---

## 🌟 Donnez une étoile si ce projet vous aide !

### Contributeurs

Soyez le premier à contribuer ! 🎉

[Afficher les contributeurs](https://github.com/marcproxy/config-env/graphs/contributors)
