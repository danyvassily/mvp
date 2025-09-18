#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("🔍 Analyse des fichiers publics utilisés...");

// Fichiers référencés dans le code (basé sur l'audit)
const usedFiles = [
  // Images du header/logo
  "/PHOTOS-WEB-LASTOURS/LOGO/logo argenté.PNG",
  "/logo-chateau-lastours.png",

  // Images hero/principales
  "/photos/allée-platane-tente.jpg",
  "/chateau-lastours-hero.jpg",
  "/photos/007.jpg",
  "/photos/lastours017.jpg",

  // Gammes de vins (page les-vins)
  "/PHOTOS-WEB-LASTOURS/BOUTEILLES/par-gamme/Gamme Domeni.jpg",
  "/PHOTOS-WEB-LASTOURS/BOUTEILLES/par-gamme/Gamme Opus.jpg",
  "/PHOTOS-WEB-LASTOURS/BOUTEILLES/par-gamme/Gamme M‚thode.jpg",
  "/PHOTOS-WEB-LASTOURS/BOUTEILLES/par-gamme/Gamme Poussin.jpg",
  "/PHOTOS-WEB-LASTOURS/BOUTEILLES/par-gamme/Gamme Confidentielle.jpg",

  // Page histoire
  "/Page/_common/histoire-hero.jpg",
  "/Page/La vigne - ok/la véraison .jpg",

  // Images générées/placeholders (à garder)
  "/wine-pressing-grapes-traditional-press.png",
  "/wine-fermentation-tanks-stainless-steel.png",
  "/wine-malolactic-fermentation-process.png",
  "/wine-pressing-separation-process.png",
  "/wine-barrel-aging-french-oak.png",
  "/wine-blending-tasting-room.png",
  "/wine-bottling-line-estate.png",
  "/wine-barrel-maintenance-cellar.png",
  "/sustainable-vineyard-practices-organic-farming.png",
  "/syrah-grape-clusters-on-vine-close-up.png",
  "/chardonnay-white-grapes-golden-sunlight.png",
  "/grenache-red-grape-bunches-mediterranean.png",
  "/precision-viticulture-technology-sensors-vineyard.png",
  "/white-wine-seafood-pairing.png",
  "/red-wine-meat-pairing.png",
  "/rose-wine-summer-pairing.png",
  "/sparkling-wine-celebration-pairing.png",
  "/gaillac-grape-varieties.png",

  // Portraits équipe
  "/marie-lastours-portrait-winemaker.png",
  "/thomas-lastours-portrait-vineyard-manager.png",
  "/jean-michel-cellar-master-portrait.png",
  "/sophie-vineyard-manager-portrait.png",
  "/pierre-sommelier-tasting-room-portrait.png",
  "/claire-marketing-director-portrait.png",
  "/antoine-export-manager-portrait.png",
  "/isabelle-hospitality-manager-portrait.png",

  // Autres images de pages
  "/sustainable-vineyard-practices.png",
  "/confusion-sexuelle-vineyard.png",
  "/biodiversity-vineyard-ecosystem.png",
  "/wine-cellar-with-barrels-and-bottles.png",
  "/wine-tasting-room-elegant-setup-reservation.png",
  "/vineyard-workers-tending-vines-traditional-methods.png",
  "/wine-events-celebration-vineyard-gathering.png",
  "/french-chateau-vineyard-landscape-with-rolling-hil.png",
  "/wine-estate-owner-portrait.png",
  "/wine-education-workshop.png",
  "/mecenat-partnership-wine-estate.png",
  "/gastronomie-wine-pairing-elegant.png",
  "/faq-help-support-wine-estate.png",
  "/private-event-organization-luxury.png",
  "/winemaking-team-portrait-in-vineyard.png",
  "/terroir-landscape-with-vineyard-rows-and-hills.png",
  "/exclusive-wine-club-tasting-room-luxury.png",

  // Fallbacks important
  "/french-chateau-wine-cellar.png",

  // Fichiers PDF (fiches techniques)
  "/Fiche technique/",
  "/fiche-technique/",
];

const publicDir = path.join(process.cwd(), "public");
const backupDir = path.join(process.cwd(), "public_backup");
const tempDir = path.join(process.cwd(), "public_clean");

try {
  // 1. Créer un backup complet
  console.log("📦 Création du backup...");
  if (fs.existsSync(backupDir)) {
    execSync(`rm -rf "${backupDir}"`);
  }
  execSync(`cp -r "${publicDir}" "${backupDir}"`);

  // 2. Créer le dossier temporaire propre
  console.log("🧹 Création du dossier propre...");
  if (fs.existsSync(tempDir)) {
    execSync(`rm -rf "${tempDir}"`);
  }
  fs.mkdirSync(tempDir, { recursive: true });

  // 3. Copier uniquement les fichiers utilisés
  let copiedCount = 0;
  let totalSize = 0;

  for (const file of usedFiles) {
    const sourcePath = path.join(publicDir, file);
    const destPath = path.join(tempDir, file);

    try {
      // Créer le dossier parent si nécessaire
      const destDir = path.dirname(destPath);
      fs.mkdirSync(destDir, { recursive: true });

      if (fs.existsSync(sourcePath)) {
        const stats = fs.statSync(sourcePath);

        if (stats.isDirectory()) {
          // Copier tout le dossier (pour les fiches techniques)
          execSync(`cp -r "${sourcePath}" "${destDir}/"`);
          console.log(`📁 Copié dossier: ${file}`);
        } else {
          // Copier le fichier
          fs.copyFileSync(sourcePath, destPath);
          totalSize += stats.size;
          copiedCount++;
          console.log(
            `✅ Copié: ${file} (${(stats.size / 1024 / 1024).toFixed(2)}MB)`
          );
        }
      } else {
        console.log(`⚠️  Fichier non trouvé: ${file}`);
      }
    } catch (error) {
      console.log(`❌ Erreur pour ${file}:`, error.message);
    }
  }

  // 4. Calculer les gains
  const originalSize = execSync(`du -sb "${publicDir}" | cut -f1`)
    .toString()
    .trim();
  const newSize = execSync(`du -sb "${tempDir}" | cut -f1`).toString().trim();

  console.log("\n📊 Résultats:");
  console.log(`   Fichiers copiés: ${copiedCount}`);
  console.log(
    `   Taille originale: ${(originalSize / 1024 / 1024 / 1024).toFixed(2)}GB`
  );
  console.log(`   Nouvelle taille: ${(newSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(
    `   Économie: ${(((originalSize - newSize) / originalSize) * 100).toFixed(
      1
    )}%`
  );

  console.log("\n🎯 Pour appliquer les changements:");
  console.log(`   mv "${publicDir}" "${publicDir}_old"`);
  console.log(`   mv "${tempDir}" "${publicDir}"`);
  console.log("\n💡 Pour restaurer le backup:");
  console.log(`   rm -rf "${publicDir}" && mv "${backupDir}" "${publicDir}"`);
} catch (error) {
  console.error("❌ Erreur:", error.message);
  process.exit(1);
}
