from pathlib import Path
from pdfminer.high_level import extract_text
import re, json, sys

def parse(t: str):
    t='\n'.join([l.strip() for l in t.splitlines() if l.strip()])
    r={}
    m=re.search(r'(?:Degré|Alcool|Alcohol)[^\d%]*(\d+[\.,]?\d?)\s*%?', t, re.I)
    if m: r['alcohol']=m.group(1).replace(',', '.')+'%'
    m=re.search(r'(?:C[ée]page(?:s)?|Grapes?)\s*[:\-]\s*([^\n]+)', t, re.I)
    if m:
        r['grapes']=[g.strip() for g in re.split(r'[;,•]', m.group(1)) if g.strip()]
    m=re.search(r'(?:Temp[ée]rature (?:de )?service|Service temperature)[^\d]*(\d{1,2}[-–]?\d{0,2})\s*°?C', t, re.I)
    if m: r['serv_temp']=m.group(1).replace('–','-')+'°C'
    m=re.search(r'(?:Carafage|Carafer|Décantation|Decanting)[^\n]*', t, re.I)
    if m: r['decanting']=m.group(0)
    m=re.search(r'(?:Accords? (?:mets\s*&?\s*vins|met(?:s)?-?vin[s]?)|Food pairing)\s*[:\-]?\s*([^\n]+)', t, re.I)
    if m:
        r['pairing']=[s.strip(' .;') for s in re.split(r'[;,•]', m.group(1)) if s.strip()]
    m=re.search(r'(?:Terroir|Soil)\s*[:\-]\s*([^\n]+)', t, re.I)
    if m: r['terroir']=m.group(1).strip()
    m=re.search(r'(?:Vinification|Élevage|Aging)\s*[:\-]\s*([^\n]+)', t, re.I)
    if m: r['vinification']=m.group(1).strip()
    m=re.search(r'(?:Garde|Conservation|Aging potential)\s*[:\-]\s*([^\n]+)', t, re.I)
    if m: r['garde']=m.group(1).strip()
    return r

def main():
    base=Path('public')
    paths=sorted(base.rglob('FT_*.pdf'))
    out=[]
    for p in paths:
        try:
            txt=extract_text(str(p))
            data=parse(txt)
        except Exception as e:
            data={'error':str(e)}
        out.append({'pdf': str(p), 'data': data})
    print(json.dumps(out, ensure_ascii=False, indent=2))

if __name__=='__main__':
    main()

