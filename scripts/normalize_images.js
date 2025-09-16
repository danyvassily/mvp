const fs = require('fs');
const path = require('path');

const pairs = [
  ["public/Page/Page cuvée Perlé/BLANC PERLE.jpg", "public/wine-perle-blanc.jpg"],
  ["public/Page/Page Cuvée Domeni blanc/BLANC DOMENI.jpg", "public/wine-domeni-blanc.jpg"],
  ["public/Page/Page Cuvée domeni Rosé/ROSE DOMENI.jpg", "public/wine-domeni-rose.jpg"],
  ["public/Page/Page Cuvée Domeni Rouge/ROUGE DOMENI.jpg", "public/wine-domeni-rouge.jpg"],
  ["public/Page/Page Cuvée Opus Balnc/BLANC OPUS.jpg", "public/wine-opus-blanc.jpg"],
  ["public/Page/Page Cuvée Opus Rouge/ROUGE OPUS.jpg", "public/wine-opus-rouge.jpg"],
  ["public/Page/Page Méthode Blanche/LA METHODE BLANC.jpg", "public/wine-methode-blanc.jpg"],
  ["public/Page/Page Méthode Rosé/LA METHODE ROSE.jpg", "public/wine-methode-rose.jpg"],
  ["public/Page/Page cuvée Claire de Lune/CLAIRE DE LUNE.jpg", "public/wine-claire-de-lune.jpg"],
  ["public/Page/Page Cuvée Pigeonnier/PIGEONNIER.jpg", "public/wine-pigeonnier.jpg"],
  ["public/Page/Page Cuvée Poussin Rosé/POUSSIN ROSE.jpg", "public/wine-poussin-rose.jpg"],
  ["public/Page/Page Cuvée poussin Blanc/POUSSIN BLANC.jpg", "public/wine-poussin-blanc.jpg"],
  ["public/Page/Page Cuvée Pertichor Rouge/PETRICHOR ROUGE.jpg", "public/wine-petrichor-rouge.jpg"],
];

for (const [src, dst] of pairs) {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dst);
    console.log('copied', '->', dst);
  } else {
    console.error('MISSING', src);
  }
}
