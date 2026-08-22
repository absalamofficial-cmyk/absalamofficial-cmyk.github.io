<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Abdus Salam — Engineer & Android Developer</title>
  <meta name="description" content="Abdus Salam — mechanical engineer and Android developer building precision CNC tools, Islamic apps, and games from Maidan Dir Lower, Pakistan." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet" />
  <style>
    /* ----- reset & base ----- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --bg: #f8faff;
      --bg-card: #ffffff;
      --bg-nav: rgba(255, 255, 255, 0.72);
      --text: #0b1120;
      --text-secondary: #334155;
      --text-muted: #64748b;
      --border: #e9edf5;
      --primary: #1a4b8c;
      --primary-light: #2a6bb0;
      --accent: #d4a853;
      --radius: 20px;
      --shadow: 0 12px 32px rgba(0, 20, 50, 0.06);
      --shadow-hover: 0 20px 40px rgba(0, 20, 50, 0.10);
      --transition: 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    img {
      display: block;
      max-width: 100%;
    }

    /* ----- container ----- */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* ----- nav ----- */
    nav {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--bg-nav);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.04);
    }

    nav .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 68px;
    }

    .logo {
      font-weight: 700;
      font-size: 1.1rem;
      letter-spacing: -0.3px;
      color: var(--text);
    }

    .logo span {
      color: var(--primary);
    }

    nav ul {
      display: flex;
      gap: 32px;
      list-style: none;
    }

    nav a {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-secondary);
      transition: color var(--transition);
      position: relative;
    }

    nav a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary);
      transition: width var(--transition);
    }

    nav a:hover {
      color: var(--text);
    }

    nav a:hover::after {
      width: 100%;
    }

    /* ----- sections ----- */
    section {
      padding: 72px 0;
    }

    .section-label {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--primary);
      margin-bottom: 6px;
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 2.6rem);
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1.2;
      margin-bottom: 16px;
    }

    .section-desc {
      font-size: 1.05rem;
      color: var(--text-secondary);
      max-width: 560px;
    }

    .text-center {
      text-align: center;
    }

    .mx-auto {
      margin-left: auto;
      margin-right: auto;
    }

    /* ----- hero ----- */
    .hero {
      padding: 60px 0 80px;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 56px;
      align-items: center;
    }

    .hero-content .section-label {
      margin-bottom: 12px;
    }

    .hero-content h1 {
      font-size: clamp(2.4rem, 5vw, 4rem);
      font-weight: 700;
      letter-spacing: -0.04em;
      line-height: 1.1;
      margin-bottom: 20px;
    }

    .hero-content h1 .highlight {
      color: var(--primary);
    }

    .hero-content p {
      font-size: 1.1rem;
      color: var(--text-secondary);
      max-width: 480px;
      margin-bottom: 32px;
    }

    .hero-stats {
      display: flex;
      gap: 40px;
      margin-bottom: 36px;
      flex-wrap: wrap;
    }

    .hero-stats .stat {
      display: flex;
      flex-direction: column;
    }

    .hero-stats .stat strong {
      font-size: 1.6rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: var(--text);
    }

    .hero-stats .stat span {
      font-size: 0.85rem;
      color: var(--text-muted);
      font-weight: 400;
    }

    .btn-group {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 28px;
      border-radius: 100px;
      font-weight: 600;
      font-size: 0.9rem;
      border: none;
      cursor: pointer;
      transition: all var(--transition);
      background: transparent;
    }

    .btn-primary {
      background: var(--primary);
      color: #fff;
      box-shadow: 0 4px 12px rgba(26, 75, 140, 0.25);
    }

    .btn-primary:hover {
      background: var(--primary-light);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(26, 75, 140, 0.30);
    }

    .btn-outline {
      border: 1.5px solid var(--border);
      color: var(--text);
    }

    .btn-outline:hover {
      border-color: var(--primary);
      color: var(--primary);
      transform: translateY(-2px);
    }

    /* hero image */
    .hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hero-image .frame {
      position: relative;
      width: 100%;
      max-width: 400px;
      aspect-ratio: 1 / 1;
      border-radius: var(--radius);
      overflow: hidden;
      background: #eef3fa;
      box-shadow: var(--shadow);
      border: 1px solid var(--border);
    }

    .hero-image .frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-image .badge {
      position: absolute;
      bottom: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      border: 1px solid var(--border);
      padding: 8px 20px;
      border-radius: 100px;
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--text-secondary);
      white-space: nowrap;
      box-shadow: var(--shadow);
    }

    .hero-image .badge strong {
      color: var(--text);
    }

    /* ----- apps grid ----- */
    .apps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 24px;
      margin-top: 40px;
    }

    .app-card {
      background: var(--bg-card);
      border-radius: var(--radius);
      padding: 24px;
      border: 1px solid var(--border);
      transition: all var(--transition);
      box-shadow: var(--shadow);
    }

    .app-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-hover);
      border-color: var(--primary-light);
    }

    .app-card-top {
      display: flex;
      gap: 16px;
      align-items: center;
      margin-bottom: 14px;
    }

    .app-icon {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      object-fit: cover;
      border: 1px solid var(--border);
      background: #f1f5f9;
      flex-shrink: 0;
    }

    .app-meta h3 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 2px;
    }

    .app-meta .app-id {
      font-size: 0.7rem;
      font-weight: 400;
      color: var(--text-muted);
      letter-spacing: 0.02em;
    }

    .app-tag {
      display: inline-block;
      font-size: 0.65rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--primary);
      background: rgba(26, 75, 140, 0.08);
      padding: 2px 12px;
      border-radius: 100px;
      margin-bottom: 10px;
    }

    .app-desc {
      font-size: 0.92rem;
      color: var(--text-secondary);
      margin-bottom: 18px;
      line-height: 1.5;
    }

    .app-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 14px;
      border-top: 1px solid var(--border);
    }

    .app-stats {
      display: flex;
      gap: 16px;
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .app-stats .rating {
      color: #d4a853;
    }

    .app-link {
      font-weight: 600;
      font-size: 0.85rem;
      color: var(--primary);
      transition: color var(--transition);
    }

    .app-link:hover {
      color: var(--primary-light);
    }

    /* ----- about ----- */
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      margin-top: 24px;
    }

    .about-text p {
      color: var(--text-secondary);
      font-size: 1.02rem;
      margin-bottom: 18px;
    }

    .about-text p strong {
      color: var(--text);
    }

    .skill-group {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 20px 22px;
      margin-bottom: 16px;
      box-shadow: var(--shadow);
    }

    .skill-group h4 {
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--primary);
      margin-bottom: 10px;
    }

    .chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .chip {
      font-size: 0.8rem;
      padding: 4px 14px;
      border-radius: 100px;
      background: #f1f5f9;
      color: var(--text-secondary);
      border: 1px solid transparent;
      transition: all var(--transition);
    }

    .chip:hover {
      border-color: var(--primary-light);
      color: var(--text);
    }

    /* ----- timeline ----- */
    .timeline {
      position: relative;
      padding-left: 28px;
      border-left: 2px solid var(--border);
      margin-top: 32px;
    }

    .tl-item {
      position: relative;
      padding-bottom: 40px;
    }

    .tl-item:last-child {
      padding-bottom: 0;
    }

    .tl-item::before {
      content: '';
      position: absolute;
      left: -33px;
      top: 4px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--bg);
      border: 2px solid var(--primary);
    }

    .tl-year {
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--primary);
      margin-bottom: 4px;
    }

    .tl-title {
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 4px;
    }

    .tl-desc {
      color: var(--text-secondary);
      font-size: 0.95rem;
      max-width: 520px;
    }

    /* ----- contact ----- */
    .contact-panel {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 56px 48px;
      text-align: center;
      box-shadow: var(--shadow);
    }

    .contact-panel h2 {
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      font-weight: 700;
      margin-bottom: 12px;
    }

    .contact-panel p {
      color: var(--text-secondary);
      max-width: 480px;
      margin: 0 auto 28px;
      font-size: 1rem;
    }

    /* ----- footer ----- */
    footer {
      padding: 36px 0 48px;
      border-top: 1px solid var(--border);
      text-align: center;
      color: var(--text-muted);
      font-size: 0.85rem;
    }

    footer .foot-links {
      display: flex;
      justify-content: center;
      gap: 28px;
      flex-wrap: wrap;
      margin-bottom: 12px;
    }

    footer a {
      color: var(--text-secondary);
      transition: color var(--transition);
    }

    footer a:hover {
      color: var(--text);
    }

    /* ----- reveal animation ----- */
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ----- responsive ----- */
    @media (max-width: 900px) {
      .hero-grid {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .hero-content p {
        margin-left: auto;
        margin-right: auto;
      }

      .hero-stats {
        justify-content: center;
      }

      .btn-group {
        justify-content: center;
      }

      .hero-image .frame {
        max-width: 280px;
      }

      .about-grid {
        grid-template-columns: 1fr;
      }

      nav ul {
        display: none;
      }

      section {
        padding: 56px 0;
      }

      .contact-panel {
        padding: 32px 20px;
      }
    }

    @media (max-width: 600px) {
      .container {
        padding: 0 16px;
      }

      .hero-stats {
        gap: 24px;
      }

      .apps-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- ===== NAV ===== -->
  <nav>
    <div class="container">
      <div class="logo">Abdus <span>Salam</span></div>
      <ul>
        <li><a href="#apps">Apps</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#journey">Journey</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <main>

    <!-- ===== HERO ===== -->
    <section class="hero" id="top">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="section-label">Mechanical Engineer / Android Developer</div>
            <h1>Precision tools, <br /><span class="highlight">shipped as apps.</span></h1>
            <p>
              I'm Abdus Salam — a mechanical engineer and Android developer from Maidan Dir Lower.
              I build CNC machining tools, Islamic digital products, and games — from UI to DSP audio and the engineering math underneath.
            </p>
            <div class="hero-stats">
              <div class="stat"><strong>6</strong><span>Apps published</span></div>
              <div class="stat"><strong>5.0★</strong><span>SmartTurn rating</span></div>
              <div class="stat"><strong>10+</strong><span>Years in CNC</span></div>
            </div>
            <div class="btn-group">
              <a href="#apps" class="btn btn-primary">View my apps</a>
              <a href="#contact" class="btn btn-outline">Get in touch</a>
            </div>
          </div>
          <div class="hero-image">
            <div class="frame">
              <!-- professional still photo placeholder (generated avatar-style) -->
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23eef3fa'/%3E%3Ccircle cx='200' cy='160' r='70' fill='%23b3c9e0'/%3E%3Ccircle cx='175' cy='145' r='8' fill='%232b3f57'/%3E%3Ccircle cx='225' cy='145' r='8' fill='%232b3f57'/%3E%3Cpath d='M170 185 Q200 205 230 185' stroke='%232b3f57' stroke-width='5' fill='none' stroke-linecap='round'/%3E%3Crect x='140' y='245' width='120' height='80' rx='12' fill='%231a4b8c'/%3E%3Crect x='170' y='275' width='60' height='12' rx='6' fill='%23ffffff80'/%3E%3C/svg%3E"
                alt="Abdus Salam — engineer and developer from Maidan Dir Lower"
                style="width:100%;height:100%;object-fit:cover;"
              />
              <div class="badge"><strong>Maidan Dir Lower,</strong> Pakistan</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== APPS ===== -->
    <section id="apps">
      <div class="container">
        <div class="section-label">Published Work</div>
        <h2 class="section-title">Apps on Google Play</h2>
        <p class="section-desc">Each card shows live Play Store ratings and download tiers.</p>

        <div class="apps-grid">
          <!-- Machinist Nexus -->
          <div class="app-card reveal">
            <div class="app-card-top">
              <img class="app-icon" src="https://play-lh.googleusercontent.com/WU0P8_wKhSW8t03o3wGBScu3WRSP1BvbZmRZ6OJHbDZKyF275kqxs5C-XqJ42C7xLClULB2LUzj6pPjS-Zwmxbg=s256" alt="Machinist Nexus icon" loading="lazy" />
              <div class="app-meta">
                <h3>Machinist Nexus</h3>
                <span class="app-id">com.machinist.toolbox</span>
              </div>
            </div>
            <span class="app-tag">Engineering Tools</span>
            <p class="app-desc">AI-assisted machining calculators — milling, turning, threads, gears — with offline Mach-AI and a global chat.</p>
            <div class="app-footer">
              <div class="app-stats"><span>50+ downloads</span></div>
              <a class="app-link" href="https://play.google.com/store/apps/details?id=com.machinist.toolbox" target="_blank" rel="noopener">Open ↗</a>
            </div>
          </div>

          <!-- SmartTurn -->
          <div class="app-card reveal">
            <div class="app-card-top">
              <img class="app-icon" src="https://play-lh.googleusercontent.com/TGcV0eSSEkty8V4JWuju4AIdXSZ4j0AXwWzwmm77D8kLNxNBPXr49NQhzkCdMNGrE3xUzybOLZUZK7ezoVZX6Q=s256" alt="SmartTurn icon" loading="lazy" />
              <div class="app-meta">
                <h3>SmartTurn</h3>
                <span class="app-id">com.turningcalculator.pro</span>
              </div>
            </div>
            <span class="app-tag">Engineering Tools</span>
            <p class="app-desc">CNC turning calculator — speeds, feeds, MRR, tool life across 25+ materials.</p>
            <div class="app-footer">
              <div class="app-stats"><span class="rating">★ 5.0</span><span>100+ downloads</span></div>
              <a class="app-link" href="https://play.google.com/store/apps/details?id=com.turningcalculator.pro" target="_blank" rel="noopener">Open ↗</a>
            </div>
          </div>

          <!-- SmartMill -->
          <div class="app-card reveal">
            <div class="app-card-top">
              <img class="app-icon" src="https://play-lh.googleusercontent.com/YLth2dlS03McruSAjK5SilcJqNhs0G72hrjQZuhNC3n5FRsDxdr6lenXzzn-JJpSL-Bg0Cnc-yI-JQdhaDt9Hg=s256" alt="SmartMill icon" loading="lazy" />
              <div class="app-meta">
                <h3>SmartMill</h3>
                <span class="app-id">com.cncmilling.calculator</span>
              </div>
            </div>
            <span class="app-tag">Engineering Tools</span>
            <p class="app-desc">CNC milling calculator with physical‑accuracy engine, offline library, and PDF reports.</p>
            <div class="app-footer">
              <div class="app-stats"><span>100+ downloads</span></div>
              <a class="app-link" href="https://play.google.com/store/apps/details?id=com.cncmilling.calculator" target="_blank" rel="noopener">Open ↗</a>
            </div>
          </div>

          <!-- Deenly -->
          <div class="app-card reveal">
            <div class="app-card-top">
              <img class="app-icon" src="https://play-lh.googleusercontent.com/al_6vOLbcyyf2AEopVSqjsLDMwD6beAQyq5mzAQvG8UFjEcO3R99sKmviMBce0go5BOQ-L7e6ZS3m6VyRWnP=s256" alt="Deenly icon" loading="lazy" />
              <div class="app-meta">
                <h3>Deenly</h3>
                <span class="app-id">com.ramzan.prayer.hadees</span>
              </div>
            </div>
            <span class="app-tag">Islamic Lifestyle</span>
            <p class="app-desc">Prayer times, smart Azan, Hadith library, Tilawat, and 3D Qibla compass.</p>
            <div class="app-footer">
              <div class="app-stats"><span>100+ downloads</span></div>
              <a class="app-link" href="https://play.google.com/store/apps/details?id=com.ramzan.prayer.hadees" target="_blank" rel="noopener">Open ↗</a>
            </div>
          </div>

          <!-- Al-Fajar -->
          <div class="app-card reveal">
            <div class="app-card-top">
              <img class="app-icon" src="https://play-lh.googleusercontent.com/yvnWiqA8FUJdkPYzUTYQMMhZY3nEjlLF8s1UnEZersHNb_Q-A1__mXqIuEFatx8EvNxXm3mDTDDkRlHXJM4VE8g=s256" alt="Al-Fajar icon" loading="lazy" />
              <div class="app-meta">
                <h3>Al-Fajar</h3>
                <span class="app-id">com.al.alishaat</span>
              </div>
            </div>
            <span class="app-tag">Islamic Audio Library</span>
            <p class="app-desc">Free, ad‑free audio library of Tafseer, Dars‑e‑Hadith, Bayanat, and Tilawat with offline downloads.</p>
            <div class="app-footer">
              <div class="app-stats"><span>50+ downloads</span></div>
              <a class="app-link" href="https://play.google.com/store/apps/details?id=com.al.alishaat" target="_blank" rel="noopener">Open ↗</a>
            </div>
          </div>

          <!-- LudoMaster -->
          <div class="app-card reveal">
            <div class="app-card-top">
              <img class="app-icon" src="https://play-lh.googleusercontent.com/3IIXri1UggJlQ44xIyF5ZqLNkEks1UFpG_Wod_awlURE5-qchn3Us1Lu3feFm54JFh9BIwlJ4VM4b2zR6Jih2vs=s256" alt="LudoMaster icon" loading="lazy" />
              <div class="app-meta">
                <h3>LudoMaster</h3>
                <span class="app-id">com.ludomaster.pk</span>
              </div>
            </div>
            <span class="app-tag">Game</span>
            <p class="app-desc">Real‑time multiplayer Ludo with private rooms, global leaderboard, and glass UI.</p>
            <div class="app-footer">
              <div class="app-stats"><span class="rating">★ 4.0</span><span>100+ downloads</span></div>
              <a class="app-link" href="https://play.google.com/store/apps/details?id=com.ludomaster.pk" target="_blank" rel="noopener">Open ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ABOUT ===== -->
    <section id="about">
      <div class="container">
        <div class="section-label">About</div>
        <h2 class="section-title">Engineer first, developer by necessity.</h2>
        <div class="about-grid">
          <div class="about-text reveal">
            <p>
              I'm a <strong>mechanical engineer</strong> with over a decade of hands‑on CNC experience — metal spinning, turning, milling, G‑code, and Sinumerik 828D. That process knowledge is the foundation for everything I build.
            </p>
            <p>
              When I couldn't find software that matched how machinists actually work, I started building it myself — first as calculators, then as full Android apps covering UI/UX, real‑time DSP audio, and the calculation engines underneath.
            </p>
            <p>
              I work independently across the full Android stack and am currently building <strong>Smart Spin</strong> — a professional CNC metal‑spinning CAD/CAM application — alongside my published tools.
            </p>
          </div>
          <div class="reveal">
            <div class="skill-group">
              <h4>Engineering</h4>
              <div class="chip-row">
                <span class="chip">CNC Turning</span>
                <span class="chip">CNC Milling</span>
                <span class="chip">Metal Spinning</span>
                <span class="chip">G‑Code</span>
                <span class="chip">Sinumerik 828D</span>
              </div>
            </div>
            <div class="skill-group">
              <h4>Development</h4>
              <div class="chip-row">
                <span class="chip">Kotlin</span>
                <span class="chip">Jetpack Compose</span>
                <span class="chip">Android SDK</span>
                <span class="chip">Firebase</span>
                <span class="chip">Real‑time DSP</span>
              </div>
            </div>
            <div class="skill-group">
              <h4>Design</h4>
              <div class="chip-row">
                <span class="chip">Glassmorphism UI</span>
                <span class="chip">3D Simulation</span>
                <span class="chip">Material You</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== JOURNEY ===== -->
    <section id="journey">
      <div class="container">
        <div class="section-label">Journey</div>
        <h2 class="section-title">From workshop floor to Play Store.</h2>
        <div class="timeline">
          <div class="tl-item reveal">
            <div class="tl-year">Foundation</div>
            <div class="tl-title">10+ years in CNC machining</div>
            <div class="tl-desc">Hands‑on experience in turning, milling, and metal spinning — the process knowledge behind every calculator I build.</div>
          </div>
          <div class="tl-item reveal">
            <div class="tl-year">Tools</div>
            <div class="tl-title">SmartTurn, SmartMill &amp; Machinist Nexus</div>
            <div class="tl-desc">Professional‑grade CNC calculators with industry‑validated algorithms, reports, and an AI assistant for machinists.</div>
          </div>
          <div class="tl-item reveal">
            <div class="tl-year">Faith</div>
            <div class="tl-title">Deenly &amp; Al‑Fajar</div>
            <div class="tl-desc">Islamic digital products — prayer times, Hadith, Tilawat, and a free audio library of Tafseer and Bayanat, built as Sadaqah Jariyah.</div>
          </div>
          <div class="tl-item reveal">
            <div class="tl-year">Play</div>
            <div class="tl-title">LudoMaster</div>
            <div class="tl-desc">Real‑time multiplayer Ludo with private rooms, global leaderboards, and a modern glass UI.</div>
          </div>
          <div class="tl-item reveal">
            <div class="tl-year">Now</div>
            <div class="tl-title">Building Smart Spin</div>
            <div class="tl-desc">A professional CNC metal‑spinning CAD/CAM application — contour editing, 3D simulation, and multi‑controller G‑code generation.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CONTACT ===== -->
    <section id="contact">
      <div class="container">
        <div class="contact-panel reveal">
          <h2>Let's build something precise.</h2>
          <p>Open to engineering‑software collaborations, custom app development, and conversations about CNC process automation.</p>
          <div class="btn-group" style="justify-content:center;">
            <a href="mailto:absalamofficial@gmail.com" class="btn btn-primary">Email me</a>
            <a href="https://play.google.com/store/apps/dev?id=7303471421479319477" target="_blank" rel="noopener" class="btn btn-outline">All apps on Play Store ↗</a>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- ===== FOOTER ===== -->
  <footer>
    <div class="container">
      <div class="foot-links">
        <a href="mailto:absalamofficial@gmail.com">absalamofficial@gmail.com</a>
        <a href="https://play.google.com/store/apps/dev?id=7303471421479319477" target="_blank" rel="noopener">Google Play</a>
        <a href="#top">Back to top</a>
      </div>
      <div>© 2026 Abdus Salam · Maidan Dir Lower, Pakistan</div>
    </div>
  </footer>

  <script>
    // scroll reveal
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  </script>

</body>
</html>
