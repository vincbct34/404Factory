# 404Factory

> On construit ce qui manque

Studio indépendant à Montpellier : sites web sur-mesure, automatisations et consulting technique.

🌐 **[www.404-factory.com](https://www.404-factory.com)**

---

## 🚀 Stack Technique

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Routing & i18n**: React Router v7 (FR à la racine, EN sous `/en`)
- **Validation**: Zod 4
- **Styling**: TailwindCSS (design system "The Void")
- **Contact**: Resend (server-side, via small Express backend)

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

| Commande            | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Serveur de développement                                  |
| `npm run build`     | Build de production                                       |
| `npm run start`     | Serveur Express (prod, sert `dist/` + API contact Resend) |
| `npm run preview`   | Prévisualiser le build                                    |
| `npm run lint`      | Linter ESLint                                             |
| `npm run lint:fix`  | Corriger les erreurs ESLint                               |
| `npm run typecheck` | Vérification TypeScript                                   |
| `npm run format`    | Formater avec Prettier                                    |
| `npm run check`     | Vérification complète                                     |

## 📁 Structure

```
404Factory/
├── public/          # Assets statiques
├── server/          # Backend Express (API contact, Resend)
├── src/
│   ├── components/  # Composants React (ui/, layout/)
│   ├── hooks/       # Hooks personnalisés
│   ├── i18n/        # Traductions FR/EN
│   ├── lib/         # Données projets, helpers, types
│   ├── pages/       # Pages routées
│   └── main.tsx     # Point d'entrée
├── index.html       # Template HTML
└── vite.config.ts   # Configuration Vite
```

## 🔧 Configuration

Créer un fichier `.env` à la racine (voir `.env.example`) :

```env
# Resend (server-side, jamais exposé au client)
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_FROM_NAME=404Factory
CONTACT_RECEIVER_EMAIL=factory404@outlook.fr

# QReview (optionnel — témoignages sur la page Studio)
VITE_QREVIEW_API_URL=
VITE_QREVIEW_API_TOKEN=
```

`RESEND_FROM_EMAIL` doit être un domaine vérifié dans Resend (ou `onboarding@resend.dev` pour tester).

## 📄 Licence

MIT © 404Factory
