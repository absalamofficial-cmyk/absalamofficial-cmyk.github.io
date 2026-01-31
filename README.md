<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abdus Salam - Android Developer</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #2D5BFF;
            --secondary: #6C63FF;
            --accent: #FF6584;
            --dark: #1A1A2E;
            --light: #F8F9FA;
            --gradient: linear-gradient(135deg, #2D5BFF 0%, #6C63FF 100%);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
            border-radius: 15px;
            margin-bottom: 30px;
        }
        
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 30px;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .logo i {
            font-size: 2.5rem;
            color: var(--primary);
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .logo h1 {
            font-size: 1.8rem;
            font-weight: 700;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .nav-links {
            display: flex;
            gap: 30px;
        }
        
        .nav-links a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            padding: 8px 15px;
            border-radius: 25px;
        }
        
        .nav-links a:hover {
            background: var(--gradient);
            color: white;
            transform: translateY(-3px);
        }
        
        .hero {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 60px;
            margin-bottom: 40px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        
        .hero h2 {
            font-size: 3rem;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .hero p {
            font-size: 1.3rem;
            color: #555;
            margin-bottom: 30px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .cta-button {
            display: inline-block;
            padding: 15px 40px;
            background: var(--gradient);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.2rem;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(45, 91, 255, 0.3);
        }
        
        .cta-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(45, 91, 255, 0.4);
        }
        
        .apps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-bottom: 50px;
        }
        
        .app-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
        
        .app-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .app-icon {
            height: 200px;
            background: linear-gradient(135deg, #2D5BFF 0%, #6C63FF 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 4rem;
        }
        
        .app-content {
            padding: 30px;
        }
        
        .app-content h3 {
            font-size: 1.8rem;
            margin-bottom: 15px;
            color: var(--dark);
        }
        
        .app-content p {
            color: #666;
            margin-bottom: 20px;
            font-size: 1.1rem;
        }
        
        .features {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .feature-tag {
            background: rgba(45, 91, 255, 0.1);
            color: var(--primary);
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .app-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        
        .app-link {
            flex: 1;
            padding: 12px;
            text-align: center;
            background: var(--gradient);
            color: white;
            text-decoration: none;
            border-radius: 10px;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .app-link:hover {
            opacity: 0.9;
            transform: translateY(-3px);
        }
        
        .developer-info {
            background: white;
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 50px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .developer-info h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: var(--dark);
            text-align: center;
        }
        
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 30px;
        }
        
        .contact-item {
            background: rgba(45, 91, 255, 0.05);
            padding: 25px;
            border-radius: 15px;
            text-align: center;
            transition: all 0.3s ease;
        }
        
        .contact-item:hover {
            background: rgba(45, 91, 255, 0.1);
            transform: translateY(-5px);
        }
        
        .contact-item i {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 15px;
        }
        
        .contact-item h3 {
            font-size: 1.3rem;
            margin-bottom: 10px;
            color: var(--dark);
        }
        
        footer {
            background: var(--dark);
            color: white;
            padding: 40px 0;
            text-align: center;
            border-radius: 15px;
            margin-top: 50px;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 20px 0;
        }
        
        .footer-links a {
            color: white;
            text-decoration: none;
            font-size: 1.1rem;
            transition: all 0.3s ease;
        }
        
        .footer-links a:hover {
            color: var(--accent);
            transform: translateY(-3px);
        }
        
        .copyright {
            margin-top: 20px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 1rem;
        }
        
        @media (max-width: 768px) {
            .navbar {
                flex-direction: column;
                gap: 20px;
            }
            
            .nav-links {
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .hero h2 {
                font-size: 2.2rem;
            }
            
            .hero p {
                font-size: 1.1rem;
            }
            
            .apps-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <nav class="navbar">
                <div class="logo">
                    <i class="fas fa-code"></i>
                    <h1>Abdus Salam</h1>
                </div>
                <div class="nav-links">
                    <a href="index.html">Home</a>
                    <a href="about-developer.html">About Developer</a>
                    <a href="privacy-policy.html">Privacy Policy</a>
                    <a href="terms-conditions.html">Terms & Conditions</a>
                    <a href="about-app.html">About Apps</a>
                </div>
            </nav>
        </header>
        
        <section class="hero">
            <h2>Android Developer & Digital Creator</h2>
            <p>Creating innovative, user-friendly mobile applications that solve real-world problems and enhance daily life with cutting-edge technology and beautiful design.</p>
            <a href="#apps" class="cta-button">Explore My Apps</a>
        </section>
        
        <section id="apps">
            <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 40px; color: white;">My Published Applications</h2>
            <div class="apps-grid">
                
                <!-- App 1: Ramzan Prayer & Hadees -->
                <div class="app-card">
                    <div class="app-icon">
                        <i class="fas fa-mosque"></i>
                    </div>
                    <div class="app-content">
                        <h3>Ramzan Prayer & Hadees</h3>
                        <p>Your ultimate Islamic companion app with accurate prayer timings, 3D Qibla finder, and authentic Hadith collection. Perfect for Ramadan and daily prayers.</p>
                        
                        <div class="features">
                            <span class="feature-tag">Prayer Times</span>
                            <span class="feature-tag">3D Qibla</span>
                            <span class="feature-tag">Hadith Library</span>
                            <span class="feature-tag">Ramadan 2024</span>
                            <span class="feature-tag">Islamic Calendar</span>
                            <span class="feature-tag">Offline Support</span>
                        </div>
                        
                        <div class="app-links">
                            <a href="https://play.google.com/store/apps/details?id=com.ramzan.prayer.hadees" class="app-link" target="_blank">
                                <i class="fab fa-google-play"></i> Download
                            </a>
                            <a href="about-app.html" class="app-link" style="background: #6C63FF;">
                                <i class="fas fa-info-circle"></i> Details
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- App 2: CNC Turning Calculator Pro -->
                <div class="app-card">
                    <div class="app-icon">
                        <i class="fas fa-calculator"></i>
                    </div>
                    <div class="app-content">
                        <h3>CNC Turning Calculator Pro</h3>
                        <p>Professional CNC machining calculator for engineers and machinists. Calculate speeds, feeds, cutting parameters with precision and accuracy.</p>
                        
                        <div class="features">
                            <span class="feature-tag">CNC Machining</span>
                            <span class="feature-tag">Engineering</span>
                            <span class="feature-tag">Calculator</span>
                            <span class="feature-tag">Professional</span>
                            <span class="feature-tag">Industrial</span>
                            <span class="feature-tag">Tools</span>
                        </div>
                        
                        <div class="app-links">
                            <a href="https://play.google.com/store/apps/details?id=com.cnc.turning.calculator.pro" class="app-link" target="_blank">
                                <i class="fab fa-google-play"></i> Download
                            </a>
                            <a href="about-app.html#cnc" class="app-link" style="background: #6C63FF;">
                                <i class="fas fa-info-circle"></i> Details
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- App 3: Coming Soon -->
                <div class="app-card">
                    <div class="app-icon">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <div class="app-content">
                        <h3>More Apps Coming Soon</h3>
                        <p>Working on innovative Android applications in various domains including education, productivity, and lifestyle. Stay tuned for updates!</p>
                        
                        <div class="features">
                            <span class="feature-tag">Coming Soon</span>
                            <span class="feature-tag">Android Apps</span>
                            <span class="feature-tag">Innovative</span>
                            <span class="feature-tag">Productivity</span>
                            <span class="feature-tag">Education</span>
                            <span class="feature-tag">Lifestyle</span>
                        </div>
                        
                        <div class="app-links">
                            <a href="#contact" class="app-link" style="background: #FF6584;">
                                <i class="fas fa-envelope"></i> Contact
                            </a>
                            <a href="about-developer.html" class="app-link" style="background: #6C63FF;">
                                <i class="fas fa-user"></i> About Me
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        
        <section class="developer-info" id="contact">
            <h2>Contact & Support</h2>
            <p style="text-align: center; font-size: 1.2rem; color: #555; margin-bottom: 30px;">
                Get in touch for app support, collaboration opportunities, or custom development projects.
            </p>
            
            <div class="contact-grid">
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <h3>Email Support</h3>
                    <p>absalamofficial@gmail.com</p>
                    <p>Fast response within 24 hours</p>
                </div>
                
                <div class="contact-item">
                    <i class="fas fa-mobile-alt"></i>
                    <h3>App Support</h3>
                    <p>In-app feedback system</p>
                    <p>Regular updates & bug fixes</p>
                </div>
                
                <div class="contact-item">
                    <i class="fas fa-code-branch"></i>
                    <h3>Development</h3>
                    <p>Custom app development</p>
                    <p>Android & cross-platform</p>
                </div>
                
                <div class="contact-item">
                    <i class="fas fa-shield-alt"></i>
                    <h3>Privacy & Terms</h3>
                    <p>Transparent policies</p>
                    <p>User data protection</p>
                </div>
            </div>
        </section>
        
        <footer>
            <h3 style="font-size: 2rem; margin-bottom: 20px;">Abdus Salam</h3>
            <p style="font-size: 1.2rem; opacity: 0.9;">Professional Android Developer & Digital Creator</p>
            
            <div class="footer-links">
                <a href="privacy-policy.html">Privacy Policy</a>
                <a href="terms-conditions.html">Terms & Conditions</a>
                <a href="about-developer.html">About Developer</a>
                <a href="https://github.com/absalamofficial-cmyk" target="_blank">GitHub</a>
                <a href="mailto:absalamofficial@gmail.com">Contact</a>
            </div>
            
            <div class="copyright">
                <p>© 2024 Abdus Salam. All rights reserved. | Google Play and the Google Play logo are trademarks of Google LLC.</p>
                <p style="margin-top: 10px; font-size: 0.9rem;">
                    This website hosts app-ads.txt for Google AdMob verification and compliance.
                    <a href="app-ads.txt" style="color: #FF6584;">View app-ads.txt</a>
                </p>
            </div>
        </footer>
    </div>
    
    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Animate app cards on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe all app cards
        document.querySelectorAll('.app-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    </script>
</body>
</html>
