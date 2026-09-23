# Abdus Salam — Portfolio Website

Mechanical engineer aur independent Android developer ki portfolio site.
CNC engineering tools, Islamic digital products, aur games — sab is
website pe live Play Store data ke sath dikhaye jate hain.

🔗 Live site: https://absalamofficial-cmyk.github.io  
📦 All apps: https://play.google.com/store/apps/dev?id=7303471421479319477  
📧 Contact: [salamkhan.apps@gmail.com](mailto:salamkhan.apps@gmail.com)

---

## Is repo mein kya hai

| File | Kaam |
|---|---|
| `index.html` | Asal website — GitHub Pages isi ko serve karti hai |
| `apps.json` | Live app data (name, icon, rating, downloads) — scraper isay refresh karta hai |
| `scraper.py` | Har app ke Play Store page se real data khainchne wala script |
| `requirements.txt` | `scraper.py` ki Python dependency |
| `.github/workflows/update-apps.yml` | GitHub Action — har 6 ghante scraper khud chalata hai |

---

## Setup — 5 minute

1. In sab files ko repo root mein rakhein (folder structure wese hi rehne dein):
   - `index.html`
   - `apps.json`
   - `scraper.py`
   - `requirements.txt`
   - `.github/workflows/update-apps.yml`

2. Commit + push karein. GitHub Pages pehle jaisa hi `index.html` serve
   karega — hosting mein kuch nahi badalta.

3. GitHub → apna repo → **Actions** tab → "Update Play Store data"
   workflow dikhega. Ek dafa **Run workflow** pe click karein taake
   pehla refresh ho jaye. Uske baad ye khud-ba-khud har 6 ghante chalta
   rahega.

4. Bas — `apps.json` ab har 6 ghante khud update hoga: real name, icon,
   star rating, review count, aur download tier seedha har app ke public
   Play Store listing se. Manually kuch edit karne ki zaroorat nahi.

---

## Naya app baad mein add karna ho to

`scraper.py` kholein, `PACKAGE_IDS` dictionary mein ek line add karein:

```python
"com.your.newapp": ("Category Tag", "One-line description.", "Display Name"),
