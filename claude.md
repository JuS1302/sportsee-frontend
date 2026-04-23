# Projet Sportsee — Dashboard sportif

## Description

Application React pour visualiser les données sportives d'un utilisateur
(sessions, calories, distance, fréquence cardiaque).
Projet de formation OpenClassrooms, développé en solo.

## Stack technique

- **Framework** : React avec Create React Router (mode SPA, ssr: false)
- **Langage** : TypeScript
- **Graphiques** : Recharts
- **CSS** : Tailwind CSS 4 avec variables CSS personnalisées
- **Auth** : JWT stocké dans les cookies via js-cookie
- **Gestion d'état** : Context API (AuthContext)
- **Outil de build** : Vite
- **Ports** :
  - Frontend → http://localhost:5173
  - Backend → http://localhost:8000

## Structure du projet

```
app/
  api/
    api.ts          → tous les appels HTTP (mock ou API réelle)
  components/
    charts/
      WeeklyDistanceChart.tsx
      HeartRateChart.tsx
    Button.tsx
    Card.tsx
    Footer.tsx
    Input.tsx
    Logo.tsx
    Navbar.tsx
    StatCard.tsx
  context/
    AuthContext.tsx  → token + userId, login(), logout()
  data/
    mock-data.json  → données de test (Julie Simon)
  hooks/
    useLogin.ts
    useUserData.ts
  pages/
    Login.tsx
    Dashboard.tsx
    Profile.tsx
    NotFound.tsx
  services/
    userService.ts  → calculs supplémentaires (totalCalories, restDays)
routes.ts           → configuration des routes
app.css             → variables CSS globales
```

## Routes

- `/` → Login (non authentifiée)
- `/dashboard` → Dashboard (protégée)
- `/profile` → Profile (protégée)
- `/*` → NotFound

## Commandes utiles

```bash
# Démarrer le frontend
npm run dev

# Démarrer le backend (dans sportsee-backend)
yarn dev

# Build
npm run build
```

## Switcher mock ↔ API réelle

Dans `app/api/api.ts`, modifier la variable :

```typescript
const USE_MOCK = true; // données mockées
const USE_MOCK = false; // vraie API sur localhost:8000
```

## Architecture des données

```
api.ts → (données brutes)
  ↓
services/userService.ts → (calculs : totalCalories, restDays)
  ↓
hooks/useUserData.ts → (isLoading, error, data)
  ↓
pages/Dashboard.tsx → (affichage)
```

## Variables CSS importantes (app.css)

- `primary` → #0B23F4 (bleu)
- `background` → #F0F2FF
- `spacing-page` → 100px
- `radius-card`, `radius-button`, `radius-input`

## À savoir

- Le mode SSR est désactivé (`ssr: false` dans react-router.config.ts)
- Les appels API se font TOUJOURS dans les hooks, jamais dans les composants
- Le token JWT est stocké dans un cookie via js-cookie
- Toujours faire `git commit` avant un gros changement

## Étape actuelle

Étape 9 — Dashboard (en cours)

- ✅ WeeklyDistanceChart (barres par semaine)
- ✅ HeartRateChart (barres BPM par jour)
- 🔄 Corriger les graphiques pour coller à la maquette Figma
- 🔄 Section "Cette semaine" → donut + durée + distance

## Maquette Figma

https://www.figma.com/proto/DiH1y32VLrenSxN9EzkJDn/Sportsee-React?node-id=2-2
