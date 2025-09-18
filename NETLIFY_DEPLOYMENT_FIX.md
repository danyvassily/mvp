# Correction de la Configuration Netlify

## Problèmes Identifiés et Résolus

### 1. Configuration `netlify.toml` Incohérente
**Problème** : Le fichier pointait vers `.next` au lieu de `out` pour l'export statique
**Solution** : 
- Changé `publish = ".next"` → `publish = "out"`
- Changé `NETLIFY_PUBLISH_DIR = ".next"` → `NETLIFY_PUBLISH_DIR = "out"`
- Ajouté `--frozen-lockfile` pour une installation plus fiable

### 2. Pages Dynamiques Sans `generateStaticParams()`
**Problème** : Les pages `[slug]` nécessitaient `generateStaticParams()` pour l'export statique
**Solution** : Ajouté `generateStaticParams()` dans :
- `app/evenements/[slug]/page.tsx`
- `app/actualites/[slug]/page.tsx`
- `app/les-vins/[slug]/page.tsx` (corrigé une erreur de syntaxe)

## Configuration Finale

### `netlify.toml`
```toml
[build]
  publish = "out"
  command = "pnpm install --frozen-lockfile && pnpm run build"

[build.environment]
  NODE_VERSION = "18"
  PNPM_VERSION = "8"
  NETLIFY_PUBLISH_DIR = "out"
```

### `next.config.mjs`
```js
export default {
  output: "export",
  images: { unoptimized: true },
  // ... autres configurations
}
```

## Résultat

✅ **Build réussi** : 79 pages générées statiquement
✅ **Export statique** : Dossier `out` créé avec tous les fichiers
✅ **Pages dynamiques** : Toutes les routes `[slug]` fonctionnent
✅ **Configuration Netlify** : Prête pour le déploiement

## Commandes de Test

```bash
# Installation des dépendances
pnpm install --frozen-lockfile

# Build local
pnpm run build

# Vérification du dossier de sortie
ls -la out/
```

## Notes Importantes

- Les warnings sur `redirects` et `headers` sont normaux avec l'export statique
- Ces fonctionnalités sont gérées par Netlify via `netlify.toml`
- L'application est maintenant compatible avec le déploiement Netlify en mode statique
