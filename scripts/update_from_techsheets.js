// Update lib/wines-data.ts fields using data/techsheets.json
const fs = require('fs');
const path = require('path');

const TECH_JSON = 'data/techsheets.json';
const DATA_FILE = 'lib/wines-data.ts';

const mapPdfToId = {
  'FT_blanc_Domeni 2024.pdf': 'domeni-blanc-2023',
  'FT_rosé_Domeni_2024.pdf': 'domeni-rose-2023',
  'FT_rouge_Domeni_2022.pdf': 'domeni-rouge-2021',
  'FT_blanc_Opus_2023.pdf': 'opus-blanc-2022',
  'FT_rouge_opus_2021.pdf': 'opus-rouge-2020',
  'FT_blanc_claire_de_lune_2023.pdf': 'claire-de-lune-2022',
  'FT_Rouge_Petrichor_2020.pdf': 'petrichor-rouge-2020',
  'FT_Rouge_Cuvée_du_Pigeonnier_2022.pdf': 'pigeonnier-rouge-2021',
  'FT_la_méthode_blanc.pdf': 'methode-blanc-2020',
  'FT_la_méthode_rosée_23.pdf': 'methode-rose-2020',
  'FT_perlé_2023.pdf': 'perle-blanc-2023',
  'FT_poussin_moelleux_2024.pdf': 'poussin-blanc-2024',
  'FT_poussin rosé_moelleux_2024.pdf': 'poussin-rose-2023',
};

function setField(block, keyPath, value) {
  if (!value) return block;
  const [obj, key] = keyPath.split('.');
  if (obj === 'technicalInfo') {
    if (key === 'alcohol') {
      return block.replace(/alcohol:\s*"[^"]*"/, `alcohol: "${value}"`);
    }
    if (key === 'grapes' && Array.isArray(value)) {
      const arr = value.map(v => `"${v}"`).join(', ');
      return block.replace(/grapes:\s*\[[^\]]*\]/, `grapes: [${arr}]`);
    }
  }
  if (obj === 'servingAdvice') {
    if (key === 'temperature') {
      return block.replace(/temperature:\s*"[^"]*"/, `temperature: "${value}"`);
    }
    if (key === 'decanting') {
      if (/decanting:\s*"[^"]*"/.test(block)) {
        return block.replace(/decanting:\s*"[^"]*"/, `decanting: "${value}"`);
      } else {
        return block.replace(/servingAdvice:\s*\{/, `servingAdvice: {\n      decanting: "${value}",`);
      }
    }
  }
  if (obj === 'foodPairing') {
    if (key === 'pairing' && Array.isArray(value)) {
      // naive merge: put into appetizers if empty
      const arr = value.map(v => `"${v}"`).join(', ');
      if (/appetizers:\s*\[[^\]]*\]/.test(block)) {
        return block.replace(/appetizers:\s*\[[^\]]*\]/, `appetizers: [${arr}]`);
      }
    }
  }
  if (obj === 'composition') {
    if (key === 'terroir') {
      return block.replace(/terroir:\s*"[^"]*"/, `terroir: "${value}"`);
    }
    if (key === 'vinification') {
      return block.replace(/vinification:\s*"[^"]*"/, `vinification: "${value}"`);
    }
  }
  return block;
}

function updateData(ts, id, data) {
  const re = new RegExp(`\\{\\s*\\n\\s*id: \\\"${id}\\\",[\\s\\S]*?\\n\\s*\\},`);
  const m = ts.match(re);
  if (!m) return ts;
  let block = m[0];
  block = setField(block, 'technicalInfo.alcohol', data.alcohol);
  block = setField(block, 'technicalInfo.grapes', data.grapes);
  block = setField(block, 'servingAdvice.temperature', data.serv_temp);
  block = setField(block, 'servingAdvice.decanting', data.decanting);
  block = setField(block, 'foodPairing.pairing', data.pairing);
  block = setField(block, 'composition.terroir', data.terroir);
  block = setField(block, 'composition.vinification', data.vinification);
  return ts.replace(re, block);
}

function main(){
  if (!fs.existsSync(TECH_JSON)) { console.error('Missing', TECH_JSON); process.exit(1); }
  let tech = JSON.parse(fs.readFileSync(TECH_JSON,'utf8'));
  let ts = fs.readFileSync(DATA_FILE,'utf8');
  for (const item of tech){
    const base = path.basename(item.pdf);
    const id = mapPdfToId[base];
    if (!id) continue;
    ts = updateData(ts, id, item.data||{});
  }
  fs.writeFileSync(DATA_FILE, ts);
  console.log('Updated', DATA_FILE);
}

if (require.main === module) main();

