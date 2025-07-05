# 404Factory 🔧

> **Transformons vos erreurs en solutions**

Une agence digitale moderne spécialisée dans la création de solutions web sur-mesure, avec une approche unique inspirée du concept d'erreur 404 comme opportunité d'innovation.

## 🎯 À propos

404Factory est un site vitrine moderne qui présente les services d'une agence digitale avec une identité visuelle forte basée sur l'esthétique cyberpunk et les erreurs de développement transformées en opportunités créatives.

### ✨ Fonctionnalités

- **Design Cyberpunk** : Interface sombre avec effets de glitch et animations
- **Navigation fluide** : Scroll smooth entre les sections
- **Formulaire de contact** : Système d'envoi d'email intégré
- **Responsive design** : Optimisé pour tous les appareils
- **Animations interactives** : Effets visuels engageants
- **Performance optimisée** : Built avec Next.js 15

## 🛠 Technologies

### Frontend
- **Framework** : [Next.js 15](https://nextjs.org/) avec App Router
- **Language** : TypeScript
- **Styling** : Tailwind CSS avec animations personnalisées
- **Icons** : Lucide React
- **Forms** : React Hook Form avec validation Zod

### Backend
- **API Routes** : Next.js API Routes
- **Email** : Nodemailer pour l'envoi d'emails
- **Validation** : Zod pour la validation des données

### Outils de développement
- **Build Tool** : Next.js compiler
- **CSS** : PostCSS avec Tailwind CSS
- **Type Checking** : TypeScript

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone [votre-repo-url]
cd 404Factory
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration de l'environnement**
Créer un fichier `.env.local` à la racine :
```env
# Configuration SMTP pour l'envoi d'emails
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASS=your-email-password

# Email de destination pour les formulaires
CONTACT_EMAIL=contact@404factory.com
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
404Factory/
├── app/                    # App Router de Next.js
│   ├── api/               # API Routes
│   │   └── contact/       # Endpoint de contact
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx          # Page d'accueil
├── components/            # Composants React
│   ├── hero-section.tsx   # Section principale avec animation 404
│   ├── services-section.tsx # Présentation des services
│   ├── projects-section.tsx # Portfolio de projets
│   ├── about-section.tsx  # Section à propos
│   ├── contact-section.tsx # Formulaire de contact
│   └── navigation.tsx     # Menu de navigation
├── lib/                   # Utilities et configuration
│   ├── email.ts          # Configuration email
│   ├── utils.ts          # Fonctions utilitaires
│   ├── hooks/            # Hooks personnalisés
│   └── types/            # Types TypeScript
└── public/               # Assets statiques
```

## 🎨 Sections du site

### 1. Hero Section
- Animation 404 avec effet de glitch
- Message principal avec call-to-action
- Éléments flottants pour l'ambiance cyberpunk

### 2. Services
- **Sites sur-mesure** : Développement web moderne
- **Automatisations** : Scripts et intégrations personnalisées
- **Consulting Tech** : Audit et architecture technique

### 3. Projets
Showcase des réalisations avec technologies utilisées

### 4. À propos
Présentation de l'approche et de la philosophie

### 5. Contact
Formulaire fonctionnel avec validation et envoi d'email

## 🔧 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm run start

# Linting
npm run lint
```

## 🎨 Customisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.ts` :
- **Electric Blue** : Couleur d'accent principale
- **Noir/Gris** : Palette sombre pour le thème cyberpunk

### Animations
Les animations personnalisées sont dans `globals.css` :
- Effet de glitch
- Animations de pulse
- Transitions fluides

## 📧 Configuration Email

Pour que le formulaire de contact fonctionne, configurez :

1. **Variables d'environnement** dans `.env.local`
2. **Paramètres SMTP** de votre fournisseur email
3. **Email de destination** pour recevoir les messages

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm run build
```
Puis déployez sur [Vercel](https://vercel.com)

### Autres plateformes
Le projet est compatible avec toutes les plateformes supportant Next.js :
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contribution

1. Fork le projet
2. Créer une branche pour votre feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

Pour toute question ou demande de collaboration :
- **Website** : [404-factory.com](https://404-factory.com)
- **Email** : factory404@outlook.fr

---

*"Chaque bug est une opportunité, chaque erreur un nouveau départ."* - 404Factory
