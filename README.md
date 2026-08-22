<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Abdus Salam — Advanced Engineering & Android</title>
  <meta name="description" content="Abdus Salam — mechanical engineer and Android developer from Maidan Dir Lower, building CNC tools and apps." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    /* ----- Reset & Base ----- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --bg-primary: #070b14;
      --bg-secondary: #0f1629;
      --bg-card: rgba(255, 255, 255, 0.04);
      --border-glass: rgba(255, 255, 255, 0.08);
      --text-primary: #f0f4ff;
      --text-secondary: #a8b8d8;
      --text-muted: #6b7fa0;
      --cyan: #00e5ff;
      --blue: #3b82f6;
      --purple: #8b5cf6;
      --pink: #ec4899;
      --gold: #facc15;
      --radius: 20px;
      --shadow-glow: 0 8px 32px rgba(0, 229, 255, 0.15);
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      line-height: 1.6;
      overflow-x: hidden;
      min-height: 100vh;
    }

    /* ----- Advanced Animated Background (Orbs & Grid) ----- */
    .bg-layer {
      position: fixed;
      inset: 0;
      z-index: -1;
      overflow: hidden;
      pointer-events: none;
    }

    .bg-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(59, 130, 246, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    .bg-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.5;
      animation: floatOrb 20s ease-in-out infinite alternate;
    }

    .bg-orb.orb1 {
      width: 500px;
      height: 500px;
      background: var(--purple);
      top: -10%;
      right: -10%;
      opacity: 0.25;
    }

    .bg-orb.orb2 {
      width: 600px;
      height: 600px;
      background: var(--cyan);
      bottom: -20%;
      left: -15%;
      opacity: 0.15;
      animation-duration: 25s;
    }

    .bg-orb.orb3 {
      width: 400px;
      height: 400px;
      background: var(--pink);
      top: 40%;
      left: 40%;
      opacity: 0.12;
      animation-duration: 30s;
    }

    @keyframes floatOrb {
      0% {
        transform: translate(0, 0) scale(1);
      }
      100% {
        transform: translate(60px, -40px) scale(1.2);
      }
    }

    /* Floating particles (fake tech dots) */
    .particles {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: var(--cyan);
      border-radius: 50%;
      box-shadow: 0 0 12px var(--cyan);
      opacity: 0.3;
      animation: particleMove linear infinite;
    }

    @keyframes particleMove {
      0% {
        transform: translateY(100vh) scale(0);
        opacity: 0;
      }
      10% {
        opacity: 0.6;
      }
      90% {
        opacity: 0.6;
      }
      100% {
        transform: translateY(-10vh) scale(1);
        opacity: 0;
      }
    }

    /* ----- Container ----- */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 2;
    }

    /* ----- Glass Navbar ----- */
    nav {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(7, 11, 20, 0.7);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      border-bottom: 1px solid var(--border-glass);
    }

    nav .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 72px;
    }

    .logo {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 1.2rem;
      letter-spacing: -0.5px;
      background: linear-gradient(135deg, var(--cyan), var(--blue), var(--purple));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    nav ul {
      display: flex;
      gap: 36px;
      list-style: none;
    }

    nav a {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text-secondary);
      transition: all 0.3s ease;
      position: relative;
    }

    nav a::before {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--cyan), var(--purple));
      transition: width 0.4s ease;
      border-radius: 4px;
      box-shadow: 0 0 12px var(--cyan);
    }

    nav a:hover {
      color: #fff;
    }

    nav a:hover::before {
      width: 100%;
    }

    /* ----- Section Headers ----- */
    section {
      padding: 80px 0;
    }

    .section-label {
      display: inline-block;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--cyan);
      background: rgba(0, 229, 255, 0.08);
      padding: 4px 16px;
      border-radius: 100px;
      border: 1px solid rgba(0, 229, 255, 0.15);
      margin-bottom: 12px;
      box-shadow: 0 0 20px rgba(0, 229, 255, 0.05);
    }

    .section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(2.2rem, 4vw, 3rem);
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1.1;
      margin-bottom: 16px;
    }

    .section-title .gradient-text {
      background: linear-gradient(135deg, var(--cyan), var(--blue), var(--purple));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-desc {
      font-size: 1.05rem;
      color: var(--text-secondary);
      max-width: 560px;
    }

    /* ----- Hero with 3D Tilt ----- */
    .hero {
      padding: 40px 0 80px;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 60px;
      align-items: center;
    }

    .hero-content h1 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(2.8rem, 5.5vw, 4.5rem);
      font-weight: 700;
      line-height: 1.05;
      letter-spacing: -0.04em;
      margin-bottom: 20px;
    }

    .hero-content h1 .highlight {
      background: linear-gradient(135deg, var(--cyan), var(--blue), var(--purple), var(--pink));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 4s linear infinite;
      background-size: 300% 100%;
    }

    @keyframes shimmer {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .hero-content p {
      font-size: 1.1rem;
      color: var(--text-secondary);
      max-width: 480px;
      margin-bottom: 32px;
    }

    .hero-stats {
      display: flex;
      gap: 48px;
      margin-bottom: 36px;
      flex-wrap: wrap;
    }

    .hero-stats .stat strong {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.8rem;
      font-weight: 700;
      display: block;
      color: #fff;
      letter-spacing: -0.02em;
    }

    .hero-stats .stat strong .cyan {
      color: var(--cyan);
    }
    .hero-stats .stat strong .gold {
      color: var(--gold);
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
      gap: 10px;
      padding: 14px 32px;
      border-radius: 100px;
      font-weight: 600;
      font-size: 0.9rem;
      border: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      text-decoration: none;
      font-family: 'Inter', sans-serif;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--cyan), var(--blue));
      color: #070b14;
      box-shadow: 0 4px 24px rgba(0, 229, 255, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 12px 40px rgba(0, 229, 255, 0.4);
    }

    .btn-outline {
      background: var(--bg-card);
      border: 1px solid var(--border-glass);
      color: var(--text-primary);
      backdrop-filter: blur(8px);
    }

    .btn-outline:hover {
      border-color: var(--cyan);
      background: rgba(0, 229, 255, 0.05);
      transform: translateY(-3px);
      box-shadow: 0 8px 32px rgba(0, 229, 255, 0.1);
    }

    /* Hero Visual */
    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      perspective: 800px;
    }

    .tilt-frame {
      position: relative;
      width: 100%;
      max-width: 380px;
      aspect-ratio: 1/1;
      border-radius: var(--radius);
      padding: 3px;
      background: conic-gradient(from 0deg, var(--cyan), var(--blue), var(--purple), var(--pink), var(--cyan));
      animation: spinBorder 8s linear infinite;
      box-shadow: 0 20px 60px rgba(0, 229, 255, 0.15);
      transition: transform 0.1s ease;
      transform-style: preserve-3d;
    }

    @keyframes spinBorder {
      to {
        transform: rotate(360deg);
      }
    }

    .tilt-inner {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: calc(var(--radius) - 2px);
      overflow: hidden;
      background: var(--bg-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tilt-inner img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .badge-location {
      position: absolute;
      bottom: -14px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(7, 11, 20, 0.8);
      backdrop-filter: blur(12px);
      border: 1px solid var(--border-glass);
      padding: 10px 24px;
      border-radius: 100px;
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--text-secondary);
      white-space: nowrap;
      box-shadow: var(--shadow-glow);
      width: max-content;
    }

    .badge-location strong {
      color: #fff;
      font-weight: 600;
    }

    .badge-location .dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      background: var(--cyan);
      border-radius: 50%;
      margin-right: 8px;
      box-shadow: 0 0 16px var(--cyan);
      animation: pulseDot 2s infinite;
    }

    @keyframes pulseDot {
      0%,
      100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.4;
        transform: scale(0.7);
      }
    }

    /* Floating tech shapes around hero */
    .float-shape {
      position: absolute;
      border: 1px solid rgba(0, 229, 255, 0.15);
      border-radius: 6px;
      background: rgba(0, 229, 255, 0.02);
      backdrop-filter: blur(4px);
      animation: floatY 6s ease-in-out infinite alternate;
      pointer-events: none;
    }

    .float-shape.s1 {
      width: 40px;
      height: 40px;
      top: -10%;
      right: -8%;
      border-radius: 50%;
      border-color: var(--purple);
    }
    .float-shape.s2 {
      width: 60px;
      height: 60px;
      bottom: -6%;
      left: -10%;
      border-radius: 12px;
      border-color: var(--pink);
      animation-delay: 1s;
    }
    .float-shape.s3 {
      width: 30px;
      height: 30px;
      top: 30%;
      right: -15%;
      border-color: var(--cyan);
      animation-delay: 2s;
      border-radius: 4px;
    }

    @keyframes floatY {
      0% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(-20px);
      }
    }

    /* ----- Apps Grid (Glass Cards) ----- */
    .apps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 28px;
      margin-top: 40px;
    }

    .app-card {
      background: var(--bg-card);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--border-glass);
      border-radius: var(--radius);
      padding: 24px;
      transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      position: relative;
      overflow: hidden;
    }

    .app-card::before {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: var(--radius);
      padding: 1px;
      background: linear-gradient(135deg, var(--cyan), transparent 40%, var(--purple));
      opacity: 0;
      transition: opacity 0.5s ease;
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      mask-composite: exclude;
      pointer-events: none;
    }

    .app-card:hover {
      transform: translateY(-8px) scale(1.01);
      border-color: transparent;
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5), var(--shadow-glow);
    }

    .app-card:hover::before {
      opacity: 1;
    }

    .app-card-top {
      display: flex;
      gap: 16px;
      align-items: center;
      margin-bottom: 16px;
    }

    .app-icon {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      object-fit: cover;
      border: 1px solid var(--border-glass);
      background: var(--bg-secondary);
      flex-shrink: 0;
    }

    .app-meta h3 {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      font-size: 1.05rem;
      color: #fff;
    }

    .app-meta .app-id {
      font-size: 0.7rem;
      font-weight: 400;
      color: var(--text-muted);
      font-family: 'Space Grotesk', monospace;
    }

    .app-tag {
      display: inline-block;
      font-size: 0.6rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--cyan);
      background: rgba(0, 229, 255, 0.1);
      padding: 2px 12px;
      border-radius: 100px;
      border: 1px solid rgba(0, 229, 255, 0.1);
      margin-bottom: 12px;
    }

    .app-desc {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-bottom: 18px;
      line-height: 1.5;
      min-height: 44px;
    }

    .app-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 16px;
      border-top: 1px solid var(--border-glass);
    }

    .app-stats {
      display: flex;
      gap: 16px;
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .app-stats .rating {
      color: var(--gold);
    }

    .app-link {
      font-weight: 600;
      font-size: 0.85rem;
      color: var(--cyan);
      transition: all 0.3s ease;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .app-link:hover {
      color: #fff;
      text-shadow: 0 0 20px var(--cyan);
    }

    /* ----- About (Glass skills) ----- */
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
      color: #fff;
    }

    .skill-group {
      background: var(--bg-card);
      backdrop-filter: blur(12px);
      border: 1px solid var(--border-glass);
      border-radius: 16px;
      padding: 22px 24px;
      margin-bottom: 16px;
      transition: all 0.3s ease;
    }

    .skill-group:hover {
      border-color: rgba(0, 229, 255, 0.2);
      box-shadow: var(--shadow-glow);
    }

    .skill-group h4 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--cyan);
      margin-bottom: 12px;
    }

    .chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .chip {
      font-size: 0.78rem;
      padding: 5px 16px;
      border-radius: 100px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border-glass);
      color: var(--text-secondary);
      transition: all 0.3s ease;
    }

    .chip:hover {
      border-color: var(--cyan);
      color: #fff;
      box-shadow: 0 0 20px rgba(0, 229, 255, 0.05);
    }

    /* ----- Timeline (Glowing) ----- */
    .timeline {
      position: relative;
      padding-left: 32px;
      border-left: 2px solid rgba(0, 229, 255, 0.2);
      margin-top: 32px;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: -6px;
      top: 0;
      width: 10px;
      height: 10px;
      background: var(--cyan);
      border-radius: 50%;
      box-shadow: 0 0 30px var(--cyan);
      animation: pulseDot 2s infinite;
    }

    .tl-item {
      position: relative;
      padding-bottom: 44px;
    }

    .tl-item:last-child {
      padding-bottom: 0;
    }

    .tl-item::before {
      content: '';
      position: absolute;
      left: -37px;
      top: 6px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--bg-primary);
      border: 2px solid var(--cyan);
      box-shadow: 0 0 16px var(--cyan);
    }

    .tl-year {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--cyan);
      margin-bottom: 4px;
    }

    .tl-title {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      font-size: 1.1rem;
      color: #fff;
      margin-bottom: 4px;
    }

    .tl-desc {
      color: var(--text-secondary);
      font-size: 0.95rem;
      max-width: 520px;
    }

    /* ----- Contact (Large Glass) ----- */
    .contact-panel {
      background: var(--bg-card);
      backdrop-filter: blur(20px);
      border: 1px solid var(--border-glass);
      border-radius: var(--radius);
      padding: 64px 48px;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
      position: relative;
      overflow: hidden;
    }

    .contact-panel::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 0%, rgba(0, 229, 255, 0.05), transparent 60%);
      pointer-events: none;
    }

    .contact-panel h2 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(2rem, 3vw, 2.6rem);
      font-weight: 700;
      margin-bottom: 12px;
      position: relative;
    }

    .contact-panel p {
      color: var(--text-secondary);
      max-width: 500px;
      margin: 0 auto 32px;
      font-size: 1rem;
      position: relative;
    }

    .contact-panel .btn-group {
      justify-content: center;
      position: relative;
    }

    /* ----- Footer ----- */
    footer {
      padding: 40px 0 48px;
      border-top: 1px solid var(--border-glass);
      text-align: center;
      color: var(--text-muted);
      font-size: 0.85rem;
    }

    footer .foot-links {
      display: flex;
      justify-content: center;
      gap: 32px;
      flex-wrap: wrap;
      margin-bottom: 12px;
    }

    footer a {
      color: var(--text-secondary);
      transition: color 0.3s ease;
      text-decoration: none;
    }

    footer a:hover {
      color: var(--cyan);
    }

    /* ----- Scroll Reveal Animation ----- */
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .reveal-stagger {
      transition-delay: 0.1s;
    }

    /* ----- Responsive ----- */
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

      .hero-visual {
        order: -1;
        margin-bottom: 20px;
      }

      .tilt-frame {
        max-width: 280px;
      }

      .about-grid {
        grid-template-columns: 1fr;
      }

      nav ul {
        display: none;
      }

      section {
        padding: 60px 0;
      }

      .contact-panel {
        padding: 36px 20px;
      }

      .badge-location {
        font-size: 0.7rem;
        padding: 6px 16px;
        bottom: -10px;
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

  <!-- ===== ADVANCED BACKGROUND ===== -->
  <div class="bg-layer">
    <div class="bg-grid"></div>
    <div class="bg-orb orb1"></div>
    <div class="bg-orb orb2"></div>
    <div class="bg-orb orb3"></div>
    <div class="particles" id="particles"></div>
  </div>

  <!-- ===== NAV ===== -->
  <nav>
    <div class="container">
      <div class="logo">Abdus Salam</div>
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
            <span class="section-label">Mechanical Engineer / Android Developer</span>
            <h1>Precision Engineering,<br /><span class="highlight">Shipped as Apps.</span></h1>
            <p>
              I'm Abdus Salam — a mechanical engineer and independent Android developer from Maidan Dir Lower. I build CNC machining tools, Islamic digital products, and games, end-to-end: UI, DSP audio, and the engineering math underneath.
            </p>
            <div class="hero-stats">
              <div class="stat"><strong>6</strong><span>Apps Published</span></div>
              <div class="stat"><strong class="gold">5.0★</strong><span>SmartTurn Rating</span></div>
              <div class="stat"><strong class="cyan">10+</strong><span>Years CNC Experience</span></div>
            </div>
            <div class="btn-group">
              <a href="#apps" class="btn btn-primary">View My Apps</a>
              <a href="#contact" class="btn btn-outline">Contact Me</a>
            </div>
          </div>
          <div class="hero-visual" id="tiltContainer">
            <div class="tilt-frame" id="tiltElement">
              <div class="tilt-inner">
                <!-- Advanced SVG Placeholder (Tech Avatar) -->
                <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#0f172a" />
                      <stop offset="100%" stop-color="#1e293b" />
                    </linearGradient>
                    <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#00e5ff" />
                      <stop offset="100%" stop-color="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="400" rx="18" fill="url(#avatarGrad)" />
                  <!-- Tech grid lines -->
                  <line x1="60" y1="280" x2="340" y2="280" stroke="rgba(0,229,255,0.08)" stroke-width="2" />
                  <line x1="60" y1="300" x2="340" y2="300" stroke="rgba(0,229,255,0.08)" stroke-width="2" />
                  <line x1="60" y1="320" x2="340" y2="320" stroke="rgba(0,229,255,0.08)" stroke-width="2" />
                  <circle cx="200" cy="160" r="70" fill="rgba(255,255,255,0.03)" stroke="rgba(0,229,255,0.2)" stroke-width="1" />
                  <circle cx="200" cy="160" r="60" fill="rgba(59,130,246,0.1)" />
                  <!-- Face silhouette -->
                  <circle cx="175" cy="148" r="7" fill="#a8b8d8" />
                  <circle cx="225" cy="148" r="7" fill="#a8b8d8" />
                  <path d="M170 185 Q200 205 230 185" stroke="#a8b8d8" stroke-width="5" fill="none" stroke-linecap="round" />
                  <!-- Tech visor / glasses effect -->
                  <rect x="150" y="170" width="100" height="20" rx="10" fill="rgba(0,229,255,0.05)" stroke="rgba(0,229,255,0.3)" stroke-width="1" />
                  <rect x="175" y="175" width="50" height="10" rx="5" fill="rgba(0,229,255,0.1)" />
                  <!-- Code brackets -->
                  <text x="60" y="260" font-family="monospace" font-size="14" fill="rgba(0,229,255,0.3)">{ .engineer }</text>
                  <text x="60" y="340" font-family="monospace" font-size="14" fill="rgba(139,92,246,0.3)">{ .developer }</text>
                  <circle cx="200" cy="330" r="16" fill="none" stroke="url(#circleGrad)" stroke-width="2" />
                  <circle cx="200" cy="330" r="8" fill="rgba(0,229,255,0.2)" />
                </svg>
                <div class="float-shape s1"></div>
                <div class="float-shape s2"></div>
                <div class="float-shape s3"></div>
              </div>
              <div class="badge-location">
                <span class="dot"></span><strong>Maidan Dir Lower,</strong> Pakistan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== APPS ===== -->
    <section id="apps">
      <div class="container">
        <span class="section-label">Published Work</span>
        <h2 class="section-title">Apps on <span class="gradient-text">Google Play</span></h2>
        <p class="section-desc">Each card pulls live Play Store ratings and download tiers.</p>

        <div class="apps-grid">
          <!-- Card 1 -->
          <div class="app-card reveal reveal-stagger">
            <div class="app-card-top">
              <img class="app-icon" src="https://play-lh.googleusercontent.com/WU0P8_wKhSW8t03o3wGBScu3WRSP1BvbZmRZ6OJHbDZKyF275kqxs5C-XqJ42C7xLClULB2LUzj6pPjS-Zwmxbg=s256" alt="Machinist Nexus" loading="lazy" />
              <div class="app-meta">
                <h3>Machinist Nexus</h3>
                <span class="app-id">com.machinist.toolbox</span>
              </div>
            </div>
            <span class="app-tag">Engineering Tools</span>
            <p class="app-desc">AI-assisted machining calculators — milling, turning, threads, gears — with an offline Mach-AI assistant.</p>
            <div class="app-footer">
              <div class="app-stats"><span>50+ downloads</span></div>
              <a class="app-link" href="https://play.google.com/store/apps/details?id=com.machinist.toolbox" target="_blank" rel="noopener">Open ↗</a>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="app-card reveal reveal-stagger" style="transition-delay:0.1s;">
            <div class="app-card-top">
              <img class="app-icon" src="https://play-lh.googleusercontent.com/TGcV0eSSEkty8V4JWuju4AIdXSZ4j0AXwWzwmm77D8kLNxNBPXr49NQhzkCdMNGrE3xUzybOLZUZK7ezoVZX6Q=s256" alt="SmartTurn" loading="lazy" />
              <div class="app-meta">
                <h3>SmartTurn</h3>
                <span class="app-id">com.turningcalculator.pro</span>
              </div>
            </div>
            <span class="app-tag">Engineering Tools</span>
            <p class="app-desc">CNC turning calculator — cutting speed, feed rate, MRR, and tool life across 25+ materials.</p>
            <div class="app-footer">
              <div class="app-stats"><span class="rating">★ 5.0</span><span>100+ downloads</span></div>
              <a class="app-link" href="https://play.google.com/store/apps/details?id=com.turningcalculator.pro" target="_blank" rel="noopener">Open ↗</a>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="app-card reveal reveal-stagger" style="transition-delay:0.2s;">
            <div class="app-card-top">
              <img class="app-icon" src="https://play-lh.googleusercontent.com/YLth2dlS03McruSAjK5SilcJqNhs0G72hrjQZuhNC3n5FRsDxdr6lenXzzn-JJpSL-Bg0Cnc-yI-JQdhaDt9Hg=s256" alt="SmartMill" loading="lazy" />
              <div class="app-meta">
                <h3>SmartMill</h3>
                <span class="app-id">com.cncmilling.calculator</span>
              </div>
            </div>
            <span class="app-tag">Engineering Tools</span>
            <p class="app-desc">CNC milling calculator with physical-accuracy engine, offline machine library, and PDF reports.</p>
            <div class="app-footer">
              <div class="app-stats"><span>100+ downloads</span></div>
              <a class="app-link" href="https://play.google.com/store/apps/details?id=com.cncmilling.calculator" target="_blank" rel="noopener">Open ↗</a>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="app-card reveal reveal-stagger" style="transition-delay:0.3s;">
            <div class="app-card-top">
              <img class="app-icon" src="https://play-lh.googleusercontent.com/al_6vOLbcyyf2AEopVSqjsLDMwD6beAQyq5mzAQvG8UFjEcO3R99sKmviMBce0go5BOQ-L7e6ZS3m6VyRWnP=s256" alt="Deenly" loading="lazy" />
              <div class="app-meta">
                <h3>Deenly</h3>
                <span class="app-id">com.ramzan.prayer.hadees</span>
              </div>
            </div>
            <span class="app-tag">Islamic Lifestyle</span>
            <p class="app-desc">Prayer times, smart Azan alarms, Hadith library, Tilawat, and a 3D Qibla compass.</p>
            <div class="app-footer">
              <div class="app-stats"><span>100+ downloads</span></div>
              <a class="app-link" href="https://play.google.com/store/apps/details?id=com.ramzan.prayer.hadees" target="_blank" rel="noopener">Open ↗</a>
            </div>
          </div>

          <!-- Card 5 -->
          <div class="app-card reveal reveal-stagger" style="transition-delay:0.4s;">
            <div class="app-card-top">
              <img class="app-icon" src="https://play-lh.googleusercontent.com/yvnWiqA8FUJdkPYzUTYQMMhZY3nEjlLF8s1UnEZersHNb_Q-A1__mXqIuEFatx8EvNxXm3mDTDDkRlHXJM4VE8g=s256" alt="Al-Fajar" loading="lazy" />
              <div class="app-meta">
                <h3>Al-Fajar</h3>
                <span class="app-id">com.al.alishaat</span>
              </div>
            </div>
            <span class="app-tag">Islamic Audio Library</span>
            <p class="app-desc">Free, ad-free audio library of Tafseer, Dars-e-Hadith, Bayanat, and Tilawat with offline downloads.</p>
            <div class="app-footer">
              <div class="app-stats"><span>50+ downloads</span></div>
              <a class="app-link" href="https://play.google.com/store/apps/details?id=com.al.alishaat" target="_blank" rel="noopener">Open ↗</a>
            </div>
          </div>

          <!-- Card 6 -->
          <div class="app-card reveal reveal-stagger" style="transition-delay:0.5s;">
            <div class="app-card-top">
              <img class="app-icon" src="https://play-lh.googleusercontent.com/3IIXri1UggJlQ44xIyF5ZqLNkEks1UFpG_Wod_awlURE5-qchn3Us1Lu3feFm54JFh9BIwlJ4VM4b2zR6Jih2vs=s256" alt="LudoMaster" loading="lazy" />
              <div class="app-meta">
                <h3>LudoMaster</h3>
                <span class="app-id">com.ludomaster.pk</span>
              </div>
            </div>
            <span class="app-tag">Game</span>
            <p class="app-desc">Real-time multiplayer Ludo with private rooms, global leaderboard, and glass-morphic UI.</p>
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
        <span class="section-label">About</span>
        <h2 class="section-title">Engineer first, <span class="gradient-text">developer by necessity.</span></h2>
        <div class="about-grid">
          <div class="about-text reveal">
            <p>
              I'm a <strong>mechanical engineer</strong> with a background in CNC metal spinning, turning, and milling — mandrel profiles, feed rates, blank sizing, the sine law. That process knowledge is the foundation for everything I build.
            </p>
            <p>
              When I couldn't find software that matched how machinists actually work, I started building it myself — first as calculators, then as full Android applications covering UI/UX, real-time DSP audio, and the calculation engines underneath.
            </p>
            <p>
              I currently work independently across the full stack of Android development, and I'm building <strong>Smart Spin</strong> — a professional CNC metal-spinning CAD/CAM application — alongside my published tools.
            </p>
          </div>
          <div class="reveal">
            <div class="skill-group">
              <h4>Engineering</h4>
              <div class="chip-row">
                <span class="chip">CNC Turning</span>
                <span class="chip">CNC Milling</span>
                <span class="chip">Metal Spinning</span>
                <span class="chip">G-Code</span>
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
                <span class="chip">Real-time DSP</span>
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
        <span class="section-label">Journey</span>
        <h2 class="section-title">From workshop floor to <span class="gradient-text">Play Store.</span></h2>
        <div class="timeline">
          <div class="tl-item reveal">
            <div class="tl-year">Foundation</div>
            <div class="tl-title">10+ years in CNC machining</div>
            <div class="tl-desc">Hands-on engineering experience in turning, milling, and metal spinning — the process knowledge behind every calculator I've built.</div>
          </div>
          <div class="tl-item reveal">
            <div class="tl-year">Tools</div>
            <div class="tl-title">SmartTurn, SmartMill &amp; Machinist Nexus</div>
            <div class="tl-desc">Professional-grade CNC calculators with industry-validated algorithms, exportable reports, and an AI assistant for machinists.</div>
          </div>
          <div class="tl-item reveal">
            <div class="tl-year">Faith</div>
            <div class="tl-title">Deenly &amp; Al-Fajar</div>
            <div class="tl-desc">Islamic digital products — prayer times, Hadith, Tilawat, and a free audio library of Tafseer and Bayanat, built as Sadaqah Jariyah.</div>
          </div>
          <div class="tl-item reveal">
            <div class="tl-year">Play</div>
            <div class="tl-title">LudoMaster</div>
            <div class="tl-desc">A real-time multiplayer Ludo game with private rooms, global leaderboards, and a modern glass UI.</div>
          </div>
          <div class="tl-item reveal">
            <div class="tl-year">Now</div>
            <div class="tl-title">Building Smart Spin</div>
            <div class="tl-desc">A professional CNC metal-spinning CAD/CAM application — contour editing, 3D simulation, and multi-controller G-code generation.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CONTACT ===== -->
    <section id="contact">
      <div class="container">
        <div class="contact-panel reveal">
          <h2>Let's build something <span class="gradient-text">precise.</span></h2>
          <p>Open to engineering-software collaborations, custom app development, and conversations about CNC process automation.</p>
          <div class="btn-group">
            <a href="mailto:absalamofficial@gmail.com" class="btn btn-primary">Email Me</a>
            <a href="https://play.google.com/store/apps/dev?id=7303471421479319477" target="_blank" rel="noopener" class="btn btn-outline">All Apps on Play Store ↗</a>
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
        <a href="#top">Back to Top</a>
      </div>
      <div>© 2026 Abdus Salam · Maidan Dir Lower, Pakistan</div>
    </div>
  </footer>

  <!-- ===== SCRIPTS ===== -->
  <script>
    // 1. Scroll Reveal (with stagger)
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -20px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));

    // 2. 3D Tilt Effect on Hero Image
    const tiltContainer = document.getElementById('tiltContainer');
    const tiltElement = document.getElementById('tiltElement');

    if (tiltContainer && tiltElement) {
      tiltContainer.addEventListener('mousemove', (e) => {
        const rect = tiltContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        tiltElement.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      tiltContainer.addEventListener('mouseleave', () => {
        tiltElement.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    }

    // 3. Generate Background Particles
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 20) + 's';
        particlesContainer.appendChild(particle);
      }
    }
  </script>
</body>
</html>
