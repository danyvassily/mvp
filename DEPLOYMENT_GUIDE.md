# Guide de Déploiement Vercel - Châteaux-Lastours

## 🚀 Déploiement automatique depuis GitHub

### Étape 1: Préparer le repository GitHub
```bash
# Ajoutez les fichiers de configuration
git add .
git commit -m "Configuration pour déploiement Vercel"
git push origin main
```

**✅ Configuration effectuée :**
- ✅ `vercel.json` : Configuration optimisée pour Next.js
- ✅ `next.config.mjs` : Headers de sécurité et optimisations
- ✅ `package.json` : Scripts de build et vérification  
- ✅ Build testé et fonctionnel (69 pages générées)

### Étape 2: Connecter à Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "New Project"
4. Importez votre repository `chateaux-lastours`

### Étape 3: Configuration du projet
- **Framework Preset**: Next.js (détecté automatiquement)
- **Root Directory**: `./` (racine)
- **Build Command**: `pnpm build` (automatique)
- **Output Directory**: `.next` (automatique)
- **Install Command**: `pnpm install` (automatique)

### Étape 4: Variables d'environnement (optionnel)
Si vous avez des variables d'environnement :
1. Dans le dashboard Vercel, allez dans "Settings" > "Environment Variables"
2. Ajoutez vos variables :
   - `NEXT_PUBLIC_SITE_URL`: votre domaine final
   - `CONTACT_EMAIL`: email de contact

### Étape 5: Déployer
1. Cliquez sur "Deploy"
2. Vercel va automatiquement :
   - Installer les dépendances avec pnpm
   - Construire l'application Next.js
   - Déployer sur le CDN global

## 🔧 Configuration avancée

### Domaine personnalisé
1. Dans Vercel Dashboard > "Settings" > "Domains"
2. Ajoutez votre domaine personnalisé
3. Configurez les DNS selon les instructions Vercel

### Optimisations activées
- ✅ Compression automatique
- ✅ Headers de sécurité
- ✅ Optimisation d'images (AVIF/WebP)
- ✅ Cache optimisé
- ✅ CDN global
- ✅ Région France (CDG1)

### Analytics Vercel
Le package `@vercel/analytics` est déjà installé. Pour l'activer :
1. Dans Vercel Dashboard > "Analytics"
2. Activez les analytics
3. Elles s'activeront automatiquement

## 🚀 Commandes utiles

```bash
# Tester avant déploiement
pnpm run prepare-deploy

# Build local
pnpm run build

# Démarrer en mode production localement
pnpm run start

# Vérifier les types
pnpm run check-types
```

## 🔄 Déploiements automatiques

Vercel redéploiera automatiquement :
- ✅ À chaque push sur la branche `main`
- ✅ À chaque pull request (preview deployments)
- ✅ Détection automatique des changements

## 📊 Monitoring

Après déploiement, surveillez :
- **Performance**: Vercel Analytics
- **Erreurs**: Vercel Functions logs
- **Build time**: Vercel build logs
- **Core Web Vitals**: Lighthouse intégré

## 🎯 URL de votre site

Après déploiement, votre site sera disponible à :
- URL temporaire : `https://chateaux-lastours-[hash].vercel.app`
- URL personnalisée (à configurer) : `https://chateaux-lastours.com`

## 📞 Support

En cas de problème :
1. Vérifiez les logs de build dans Vercel Dashboard
2. Testez localement avec `pnpm run prepare-deploy`
3. Consultez la documentation Vercel
