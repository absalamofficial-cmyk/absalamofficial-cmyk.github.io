<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abdus Salam | Professional Android Developer</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #4361ee;
            --secondary: #3a0ca3;
            --accent: #f72585;
            --dark: #1a1a2e;
            --light: #f8f9fa;
            --gradient: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
            --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            color: #333;
            background: #0f172a;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(10px);
            padding: 20px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .logo-icon {
            width: 40px;
            height: 40px;
            background: var(--gradient);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .logo-text h1 {
            font-size: 1.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .nav-links {
            display: flex;
            gap: 30px;
        }

        .nav-links a {
            color: #cbd5e1;
            text-decoration: none;
            font-weight: 500;
            font-size: 1rem;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a:hover {
            color: #60a5fa;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--gradient);
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* Hero Section */
        .hero {
            padding: 180px 0 100px;
            position: relative;
            overflow: hidden;
        }

        .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 30% 20%, rgba(67, 97, 238, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(247, 37, 133, 0.1) 0%, transparent 50%);
            z-index: -1;
        }

        .hero-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: center;
        }

        .hero-text h2 {
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero-text p {
            font-size: 1.2rem;
            color: #94a3b8;
            margin-bottom: 30px;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 40px;
        }

        .stat-item {
            background: rgba(30, 41, 59, 0.5);
            padding: 20px;
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
        }

        .stat-item .number {
            font-size: 2rem;
            font-weight: 700;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: block;
        }

        .stat-item .label {
            color: #cbd5e1;
            font-size: 0.9rem;
        }

        .cta-buttons {
            display: flex;
            gap: 20px;
        }

        .btn {
            padding: 15px 30px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .btn-primary {
            background: var(--gradient);
            color: white;
            border: none;
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(67, 97, 238, 0.3);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-3px);
        }

        .hero-visual {
            position: relative;
        }

        .phone-mockup {
            width: 300px;
            height: 600px;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            border-radius: 40px;
            position: relative;
            margin: 0 auto;
            padding: 20px;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3),
                        inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .phone-screen {
            width: 100%;
            height: 100%;
            background: var(--gradient);
            border-radius: 25px;
            overflow: hidden;
            position: relative;
        }

        .screen-content {
            padding: 30px;
            color: white;
        }

        .app-icon-large {
            width: 80px;
            height: 80px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        /* Apps Section */
        .section-title {
            text-align: center;
            margin-bottom: 60px;
        }

        .section-title h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 15px;
            background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .section-title p {
            color: #94a3b8;
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
        }

        .apps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-bottom: 100px;
        }

        .app-card {
            background: rgba(30, 41, 59, 0.5);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            position: relative;
            backdrop-filter: blur(10px);
        }

        .app-card:hover {
            transform: translateY(-10px);
            border-color: rgba(96, 165, 250, 0.5);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .app-header {
            padding: 30px;
            background: linear-gradient(135deg, rgba(67, 97, 238, 0.2) 0%, rgba(58, 12, 163, 0.2) 100%);
            position: relative;
            overflow: hidden;
        }

        .app-badge {
            position: absolute;
            top: 20px;
            right: 20px;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .badge-live {
            background: #10b981;
            color: white;
        }

        .badge-coming {
            background: #f59e0b;
            color: white;
        }

        .badge-beta {
            background: #8b5cf6;
            color: white;
        }

        .app-icon {
            width: 60px;
            height: 60px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            color: white;
            margin-bottom: 20px;
        }

        .app-content {
            padding: 30px;
        }

        .app-content h3 {
            font-size: 1.5rem;
            color: white;
            margin-bottom: 10px;
        }

        .app-content .category {
            color: #94a3b8;
            font-size: 0.9rem;
            margin-bottom: 20px;
        }

        .app-content p {
            color: #cbd5e1;
            margin-bottom: 25px;
            font-size: 1rem;
        }

        .features {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 25px;
        }

        .feature-tag {
            background: rgba(96, 165, 250, 0.1);
            color: #60a5fa;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        .app-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin-bottom: 25px;
            padding: 15px;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 10px;
        }

        .stat {
            text-align: center;
        }

        .stat-value {
            font-size: 1.2rem;
            font-weight: 700;
            color: white;
            display: block;
        }

        .stat-label {
            font-size: 0.8rem;
            color: #94a3b8;
        }

        .app-actions {
            display: flex;
            gap: 15px;
        }

        /* Footer */
        footer {
            background: rgba(15, 23, 42, 0.95);
            padding: 60px 0 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }

        .footer-logo {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }

        .footer-logo h3 {
            color: white;
            font-size: 1.5rem;
        }

        .footer-links h4 {
            color: white;
            margin-bottom: 20px;
            font-size: 1.2rem;
        }

        .footer-links ul {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 10px;
        }

        .footer-links a {
            color: #94a3b8;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-links a:hover {
            color: #60a5fa;
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-links a {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            background: var(--gradient);
            transform: translateY(-3px);
        }

        .copyright {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: #94a3b8;
            font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 992px) {
            .hero-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
            
            .hero-text h2 {
                font-size: 2.8rem;
            }
            
            .phone-mockup {
                width: 250px;
                height: 500px;
            }
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero-text h2 {
                font-size: 2.2rem;
            }
            
            .stats {
                grid-template-columns: 1fr;
            }
            
            .cta-buttons {
                flex-direction: column;
            }
            
            .apps-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <nav class="navbar">
                <div class="logo">
                    <div class="logo-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <div class="logo-text">
                        <h1>Abdus Salam</h1>
                    </div>
                </div>
                <div class="nav-links">
                    <a href="#home">Home</a>
                    <a href="#apps">My Apps</a>
                    <a href="about-developer.html">About</a>
                    <a href="privacy-policy.html">Privacy</a>
                    <a href="mailto:absalamofficial@gmail.com">Contact</a>
                </div>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-bg"></div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h2>Professional Android Developer & Digital Creator</h2>
                    <p>Creating innovative mobile applications that bridge technology with practical needs. Specializing in industrial tools and spiritual guidance solutions.</p>
                    
                    <div class="stats">
                        <div class="stat-item">
                            <span class="number">3+</span>
                            <span class="label">Published Apps</span>
                        </div>
                        <div class="stat-item">
                            <span class="number">10K+</span>
                            <span class="label">Total Downloads</span>
                        </div>
                        <div class="stat-item">
                            <span class="number">4.7★</span>
                            <span class="label">Average Rating</span>
                        </div>
                        <div class="stat-item">
                            <span class="number">2+</span>
                            <span class="label">Years Experience</span>
                        </div>
                    </div>
                    
                    <div class="cta-buttons">
                        <a href="#apps" class="btn btn-primary">
                            <i class="fas fa-rocket"></i> View My Apps
                        </a>
                        <a href="mailto:absalamofficial@gmail.com" class="btn btn-secondary">
                            <i class="fas fa-envelope"></i> Contact Me
                        </a>
                    </div>
                </div>
                
                <div class="hero-visual">
                    <div class="phone-mockup">
                        <div class="phone-screen">
                            <div class="screen-content">
                                <div class="app-icon-large">
                                    <i class="fas fa-mobile-alt"></i>
                                </div>
                                <h3 style="color: white; margin-bottom: 10px;">Ramzan Prayer & Hadees</h3>
                                <p style="color: rgba(255,255,255,0.8); font-size: 0.9rem;">Your complete Islamic companion app</p>
                                <div style="margin-top: 20px;">
                                    <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                                        <span style="background: rgba(255,255,255,0.2); padding: 5px 10px; border-radius: 15px; font-size: 0.8rem; color: white;">Prayer Times</span>
                                        <span style="background: rgba(255,255,255,0.2); padding: 5px 10px; border-radius: 15px; font-size: 0.8rem; color: white;">3D Qibla</span>
                                    </div>
                                    <div style="display: flex; gap: 10px;">
                                        <span style="background: rgba(255,255,255,0.2); padding: 5px 10px; border-radius: 15px; font-size: 0.8rem; color: white;">Hadiths</span>
                                        <span style="background: rgba(255,255,255,0.2); padding: 5px 10px; border-radius: 15px; font-size: 0.8rem; color: white;">Ramadan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Apps Section -->
    <section id="apps" class="container">
        <div class="section-title">
            <h2>My Applications</h2>
            <p>Innovative mobile solutions designed for real-world problems and user convenience</p>
        </div>
        
        <div class="apps-grid">
            <!-- App 1: CNC Turning -->
            <div class="app-card">
                <div class="app-header">
                    <span class="app-badge badge-live">Live on Play Store</span>
                    <div class="app-icon">
                        <i class="fas fa-calculator"></i>
                    </div>
                    <h3>CNC Turning Calculator Pro</h3>
                    <p class="category">Industrial • Engineering • Tools</p>
                </div>
                <div class="app-content">
                    <p>Professional CNC machining calculator for engineers and machinists. Calculate speeds, feeds, cutting parameters with industrial-grade precision.</p>
                    
                    <div class="app-stats">
                        <div class="stat">
                            <span class="stat-value">3,200+</span>
                            <span class="stat-label">Downloads</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">4.7★</span>
                            <span class="stat-label">Rating</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">50MB</span>
                            <span class="stat-label">Size</span>
                        </div>
                    </div>
                    
                    <div class="features">
                        <span class="feature-tag">Turning Calculations</span>
                        <span class="feature-tag">Material Database</span>
                        <span class="feature-tag">Tool Selection</span>
                        <span class="feature-tag">Cost Estimation</span>
                        <span class="feature-tag">PDF Export</span>
                        <span class="feature-tag">Offline Support</span>
                    </div>
                    
                    <div class="app-actions">
                        <a href="https://play.google.com/store/apps/details?id=com.cnc.turning.calculator.pro" class="btn btn-primary" target="_blank" style="flex: 1; text-align: center;">
                            <i class="fab fa-google-play"></i> Download Now
                        </a>
                        <a href="about-app.html#cnc" class="btn btn-secondary" style="flex: 1; text-align: center;">
                            <i class="fas fa-info-circle"></i> Details
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- App 2: Ramzan Prayer -->
            <div class="app-card">
                <div class="app-header">
                    <span class="app-badge badge-coming">Coming Soon</span>
                    <div class="app-icon">
                        <i class="fas fa-mosque"></i>
                    </div>
                    <h3>Ramzan Prayer & Hadees</h3>
                    <p class="category">Islamic • Lifestyle • Religion</p>
                </div>
                <div class="app-content">
                    <p>Complete Islamic companion app with accurate prayer times, 3D Qibla finder, authentic Hadith collection, and Ramadan 2026 special features.</p>
                    
                    <div class="app-stats">
                        <div class="stat">
                            <span class="stat-value">3</span>
                            <span class="stat-label">Languages</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">10K+</span>
                            <span class="stat-label">Hadiths</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">100%</span>
                            <span class="stat-label">Offline</span>
                        </div>
                    </div>
                    
                    <div class="features">
                        <span class="feature-tag">Live Prayer Times</span>
                        <span class="feature-tag">3D Qibla Finder</span>
                        <span class="feature-tag">10K+ Hadiths</span>
                        <span class="feature-tag">Ramadan Tracker</span>
                        <span class="feature-tag">WhatsApp Status</span>
                        <span class="feature-tag">Islamic Calendar</span>
                    </div>
                    
                    <div class="app-actions">
                        <a href="about-app.html#ramzan" class="btn btn-primary" style="flex: 1; text-align: center;">
                            <i class="fas fa-eye"></i> Preview Features
                        </a>
                        <a href="mailto:absalamofficial@gmail.com?subject=Ramzan App Notify" class="btn btn-secondary" style="flex: 1; text-align: center;">
                            <i class="fas fa-bell"></i> Notify Me
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- App 3: CNC Milling -->
            <div class="app-card">
                <div class="app-header">
                    <span class="app-badge badge-beta">Beta Testing</span>
                    <div class="app-icon">
                        <i class="fas fa-industry"></i>
                    </div>
                    <h3>CNC Milling Calculator</h3>
                    <p class="category">Industrial • Advanced • Professional</p>
                </div>
                <div class="app-content">
                    <p>Advanced milling calculations for professional machinists. Featuring toolpath simulations, G-code preview, and industrial standards compliance.</p>
                    
                    <div class="app-stats">
                        <div class="stat">
                            <span class="stat-value">52</span>
                            <span class="stat-label">Testers</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">Mar '26</span>
                            <span class="stat-label">Release</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">2.1.3</span>
                            <span class="stat-label">Version</span>
                        </div>
                    </div>
                    
                    <div class="features">
                        <span class="feature-tag">Milling Calculations</span>
                        <span class="feature-tag">Toolpath Simulation</span>
                        <span class="feature-tag">G-code Preview</span>
                        <span class="feature-tag">Advanced Toolpaths</span>
                        <span class="feature-tag">Material Library</span>
                        <span class="feature-tag">Coolant Calcs</span>
                    </div>
                    
                    <div class="app-actions">
                        <a href="mailto:absalamofficial@gmail.com?subject=Beta Testing CNC Milling" class="btn btn-primary" style="flex: 1; text-align: center;">
                            <i class="fas fa-flask"></i> Join Beta
                        </a>
                        <a href="about-app.html#milling" class="btn btn-secondary" style="flex: 1; text-align: center;">
                            <i class="fas fa-road"></i> Roadmap
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-about">
                    <div class="footer-logo">
                        <div class="logo-icon" style="width: 35px; height: 35px; font-size: 1.2rem;">
                            <i class="fas fa-code"></i>
                        </div>
                        <h3>Abdus Salam</h3>
                    </div>
                    <p style="color: #94a3b8; margin-bottom: 20px;">Professional Android Developer creating innovative mobile solutions since 2022.</p>
                    <div class="social-links">
                        <a href="https://github.com/absalamofficial-cmyk" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="mailto:absalamofficial@gmail.com">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <a href="https://play.google.com/store/apps/dev?id=YOUR_DEV_ID" target="_blank">
                            <i class="fab fa-google-play"></i>
                        </a>
                    </div>
                </div>
                
                <div class="footer-links">
                    <h4>Applications</h4>
                    <ul>
                        <li><a href="about-app.html#cnc">CNC Turning Calculator Pro</a></li>
                        <li><a href="about-app.html#ramzan">Ramzan Prayer & Hadees</a></li>
                        <li><a href="about-app.html#milling">CNC Milling Calculator</a></li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="terms-conditions.html">Terms & Conditions</a></li>
                        <li><a href="app-ads.txt">AdMob Compliance</a></li>
                        <li><a href="about-developer.html">About Developer</a></li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    <h4>Contact</h4>
                    <ul>
                        <li><i class="fas fa-envelope" style="margin-right: 10px; color: #60a5fa;"></i> absalamofficial@gmail.com</li>
                        <li><i class="fas fa-globe" style="margin-right: 10px; color: #60a5fa;"></i> Pakistan</li>
                        <li><i class="fas fa-clock" style="margin-right: 10px; color: #60a5fa;"></i> 24/7 Support</li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>© 2026 Abdus Salam. All rights reserved. | Google Play and the Google Play logo are trademarks of Google LLC.</p>
                <p style="margin-top: 10px;">This website hosts app-ads.txt for Google AdMob verification and compliance.</p>
            </div>
        </div>
    </footer>

    <script>
        // Animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        // Observe all app cards
        document.querySelectorAll('.app-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>
</body>
</html>
