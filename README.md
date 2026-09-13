# Abdus Salam — Portfolio Website

Mechanical engineer aur independent Android developer ki portfolio site.
CNC engineering tools, Islamic digital products, aur games — sab is
website pe live Play Store data ke sath dikhaye jate hain.

🔗 Live site: https://absalamofficial-cmyk.github.io
📦 All apps: https://play.google.com/store/apps/dev?id=7303471421479319477
📧 Contact: absalamofficial@gmail.com

---

## Is repo mein kya hai

| File | Kaam |
|---|---|
| `index.html` | Asal website — GitHub Pages isi ko serve karti hai |
| `apps.json` | Live app data (name, icon, rating, downloads) — scraper isay refresh karta hai |
| `scraper.py` | Har app ke Play Store page se real data khींchne wala script |
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
```

Bas is ek line ko commit kar dein. Agli scheduled run pe (ya "Run
workflow" manually click kar ke) naye app ka real name/icon/rating/
downloads khud aa jayega aur wo baaki apps jaisay hi card format mein
website pe dikhne lag jayega — HTML mein kuch edit karne ki zaroorat
nahi.

---

## "Real" data ki hadd kya hai

Google Play kisi ko bhi — website ko, ya khud developer ko public API
se bhi — **exact** install counter nahi deta. Play Store pe public
sirf rounded tiers dikhte hain (`10+`, `50+`, `100+`, `500+`,
`1,000+` …), aur `scraper.py` yehi tiers padhta hai jo is site pe
dikhte hain. Ye wahi number hai jo koi bhi shopper Play Store page pe
khud dekh sakta hai — kuch bhi fake ya andaza laga hua nahi, lekin ye
kabhi exact "1,247 installs" wala number nahi dikha sakta, kyunke wo
number kahin bhi public nahi hai.

Agar kabhi apne Play Console ke **exact** internal install/uninstall
numbers site pe chahiye hon, us ke liye official Google Play Developer
Reporting API chahiye hogi — apni Play Console se service account key
generate karni padegi (ye sirf account owner kar sakta hai). Ye ek
bara, alag setup hai — agar ye route chahiye to bata dena, wo bhi kar
sakte hain.
