# 404Factory

> De l'erreur à la réussite

Agence digitale spécialisée dans la création de sites web sur-mesure, automatisations et consulting technique.

🌐 **[404factory.vincent-bichat.fr](https://404factory.vincent-bichat.fr)**

---

## 🚀 Stack Technique

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Contact**: EmailJS

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/vincbct34/404Factory.git
cd 404Factory

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🛠️ Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualiser le build |
| `npm run lint` | Linter ESLint |
| `npm run lint:fix` | Corriger les erreurs ESLint |
| `npm run typecheck` | Vérification TypeScript |
| `npm run format` | Formater avec Prettier |
| `npm run check` | Vérification complète |

## 📁 Structure

```
404Factory/
├── public/          # Assets statiques
├── src/
│   ├── components/  # Composants React
│   ├── hooks/       # Hooks personnalisés
│   ├── styles/      # Fichiers CSS
│   └── main.tsx     # Point d'entrée
├── index.html       # Template HTML
└── vite.config.ts   # Configuration Vite
```

## 🔧 Configuration

Créer un fichier `.env` à la racine :

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📄 Licence

MIT © 404Factory
