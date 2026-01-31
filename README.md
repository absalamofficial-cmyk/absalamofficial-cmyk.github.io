<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abdus Salam - Professional Android Developer | 2026 Portfolio</title>
    <meta name="description" content="Official portfolio of Abdus Salam - Android developer specializing in CNC tools & Islamic applications. Download apps from Play Store.">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #2563eb;
            --secondary: #7c3aed;
            --accent: #f59e0b;
            --dark: #1e293b;
            --light: #f8fafc;
            --success: #10b981;
            --warning: #f59e0b;
            --danger: #ef4444;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            color: #334155;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        /* Header Styles */
        header {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 3px solid var(--primary);
        }
        
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 15px;
            text-decoration: none;
        }
        
        .logo-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.8rem;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }
        
        .logo-text h1 {
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.2;
        }
        
        .logo-text span {
            font-size: 0.9rem;
            color: #64748b;
            font-weight: 500;
        }
        
        .nav-links {
            display: flex;
            gap: 25px;
        }
        
        .nav-links a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            font-size: 1.1rem;
            padding: 8px 16px;
            border-radius: 8px;
            transition: all 0.3s ease;
        }
        
        .nav-links a:hover {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            transform: translateY(-2px);
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-radius: 20px;
            padding: 80px 60px;
            margin: 40px 0;
            color: white;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="white" stroke-width="0.5" opacity="0.1"/></svg>');
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            font-weight: 700;
        }
        
        .hero p {
            font-size: 1.3rem;
            max-width: 800px;
            margin: 0 auto 30px;
            opacity: 0.95;
        }
        
        .stats {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-top: 40px;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 5px;
        }
        
        .stat-label {
            font-size: 1rem;
            opacity: 0.9;
        }
        
        /* Apps Section */
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin: 60px 0 40px;
            color: var(--dark);
            position: relative;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            border-radius: 2px;
        }
        
        .apps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-bottom: 60px;
        }
        
        .app-card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
        }
        
        .app-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }
        
        .app-header {
            padding: 25px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            display: flex;
            align-items: center;
            gap: 20px;
        }
        
        .app-icon {
            width: 70px;
            height: 70px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            backdrop-filter: blur(10px);
        }
        
        .app-title h3 {
            font-size: 1.8rem;
            margin-bottom: 5px;
        }
        
        .app-title .status {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
        }
        
        .status-live {
            background: var(--success);
            color: white;
        }
        
        .status-ready {
            background: var(--warning);
            color: white;
        }
        
        .status-testing {
            background: #6366f1;
            color: white;
        }
        
        .app-content {
            padding: 25px;
        }
        
        .app-description {
            color: #64748b;
            margin-bottom: 20px;
            line-height: 1.7;
        }
        
        .app-details {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .detail-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .detail-item i {
            color: var(--primary);
            font-size: 1.2rem;
        }
        
        .features {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 25px;
        }
        
        .feature-tag {
            background: #e0f2fe;
            color: var(--primary);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
        }
        
        .app-actions {
            display: flex;
            gap: 15px;
        }
        
        .btn {
            flex: 1;
            padding: 12px 20px;
            text-align: center;
            text-decoration: none;
            border-radius: 10px;
            font-weight: 600;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
        }
        
        .btn-secondary {
            background: #f1f5f9;
            color: var(--dark);
            border: 2px solid #cbd5e1;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        /* Timeline */
        .timeline {
            position: relative;
            max-width: 800px;
            margin: 60px auto;
        }
        
        .timeline::before {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 100%;
            background: linear-gradient(to bottom, var(--primary), var(--secondary));
            border-radius: 2px;
        }
        
        .timeline-item {
            margin-bottom: 40px;
            position: relative;
            width: 45%;
        }
        
        .timeline-item:nth-child(odd) {
            left: 0;
        }
        
        .timeline-item:nth-child(even) {
            left: 55%;
        }
        
        .timeline-content {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
            border-left: 4px solid var(--primary);
        }
        
        .timeline-date {
            display: inline-block;
            padding: 6px 15px;
            background: var(--primary);
            color: white;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 15px;
        }
        
        /* Footer */
        footer {
            background: var(--dark);
            color: white;
            padding: 60px 0 30px;
            margin-top: 80px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .footer-section h3 {
            font-size: 1.5rem;
            margin-bottom: 20px;
            color: #e2e8f0;
        }
        
        .footer-section p {
            color: #94a3b8;
            line-height: 1.7;
        }
        
        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .contact-item i {
            color: var(--accent);
            font-size: 1.2rem;
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid #334155;
            color: #94a3b8;
            font-size: 0.95rem;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .navbar {
                flex-direction: column;
                gap: 20px;
            }
            
            .nav-links {
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 1.1rem;
            }
            
            .stats {
                flex-direction: column;
                gap: 20px;
            }
            
            .timeline::before {
                left: 30px;
            }
            
            .timeline-item {
                width: 100%;
                left: 0 !important;
                padding-left: 60px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header>
            <nav class="navbar">
                <a href="index.html" class="logo">
                    <div class="logo-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <div class="logo-text">
                        <h1>Abdus Salam</h1>
                        <span>Android Developer Since 2024</span>
                    </div>
                </a>
                <div class="nav-links">
                    <a href="#apps">My Apps</a>
                    <a href="about-developer.html">About Me</a>
                    <a href="privacy-policy.html">Privacy Policy</a>
                    <a href="terms-conditions.html">Terms</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </header>

        <!-- Hero Section -->
        <section class="hero">
            <h1>Crafting Digital Experiences</h1>
            <p>Professional Android developer creating innovative applications for industrial tools and spiritual guidance. Combining technical excellence with user-centric design since 2024.</p>
            
            <div class="stats">
                <div class="stat-item">
                    <div class="stat-number">3+</div>
                    <div class="stat-label">Applications</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">10K+</div>
                    <div class="stat-label">Downloads</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">4.7★</div>
                    <div class="stat-label">Average Rating</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">2 Years</div>
                    <div class="stat-label">Experience</div>
                </div>
            </div>
        </section>

        <!-- Apps Section -->
        <h2 class="section-title" id="apps">My Applications</h2>
        
        <div class="apps-grid">
            <!-- App 1: CNC Turning -->
            <div class="app-card">
                <div class="app-header">
                    <div class="app-icon">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <div class="app-title">
                        <h3>CNC Turning Calculator Pro</h3>
                        <span class="status status-live">Live on Play Store</span>
                    </div>
                </div>
                <div class="app-content">
                    <p class="app-description">Professional CNC machining calculator for engineers and machinists. Calculate speeds, feeds, cutting parameters with industrial-grade precision.</p>
                    
                    <div class="app-details">
                        <div class="detail-item">
                            <i class="fas fa-calendar"></i>
                            <span>Published: Aug 2025</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-download"></i>
                            <span>3,200+ Downloads</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-star"></i>
                            <span>4.7★ Rating</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-sync"></i>
                            <span>Last Update: Dec 2025</span>
                        </div>
                    </div>
                    
                    <div class="features">
                        <span class="feature-tag">Engineering</span>
                        <span class="feature-tag">Calculator</span>
                        <span class="feature-tag">Professional</span>
                        <span class="feature-tag">Industrial</span>
                        <span class="feature-tag">Tools</span>
                    </div>
                    
                    <div class="app-actions">
                        <a href="https://play.google.com/store/apps/details?id=com.cnc.turning.calculator.pro" class="btn btn-primary" target="_blank">
                            <i class="fab fa-google-play"></i> Download Now
                        </a>
                        <a href="about-app.html#turning" class="btn btn-secondary">
                            <i class="fas fa-info-circle"></i> Details
                        </a>
                    </div>
                </div>
            </div>

            <!-- App 2: Ramzan Prayer -->
            <div class="app-card">
                <div class="app-header">
                    <div class="app-icon">
                        <i class="fas fa-mosque"></i>
                    </div>
                    <div class="app-title">
                        <h3>Ramzan Prayer & Hadees</h3>
                        <span class="status status-ready">Ready for Launch</span>
                    </div>
                </div>
                <div class="app-content">
                    <p class="app-description">Complete Islamic companion app with accurate prayer times, 3D Qibla finder, authentic Hadith collection, and Ramadan 2026 special features.</p>
                    
                    <div class="app-details">
                        <div class="detail-item">
                            <i class="fas fa-calendar"></i>
                            <span>Release: Jan 2026</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-bullseye"></i>
                            <span>Ramadan 2026 Ready</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-language"></i>
                            <span>3 Languages</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-wifi-slash"></i>
                            <span>Offline Support</span>
                        </div>
                    </div>
                    
                    <div class="features">
                        <span class="feature-tag">Prayer Times</span>
                        <span class="feature-tag">3D Qibla</span>
                        <span class="feature-tag">Hadith Library</span>
                        <span class="feature-tag">Ramadan</span>
                        <span class="feature-tag">Islamic</span>
                    </div>
                    
                    <div class="app-actions">
                        <a href="#contact" class="btn btn-primary">
                            <i class="fas fa-rocket"></i> Coming Soon
                        </a>
                        <a href="about-app.html#ramzan" class="btn btn-secondary">
                            <i class="fas fa-info-circle"></i> Preview
                        </a>
                    </div>
                </div>
            </div>

            <!-- App 3: CNC Milling -->
            <div class="app-card">
                <div class="app-header">
                    <div class="app-icon">
                        <i class="fas fa-industry"></i>
                    </div>
                    <div class="app-title">
                        <h3>CNC Milling Calculator</h3>
                        <span class="status status-testing">Closed Testing</span>
                    </div>
                </div>
                <div class="app-content">
                    <p class="app-description">Advanced milling calculations for professional machinists. Featuring toolpath simulations, G-code preview, and industrial standards compliance.</p>
                    
                    <div class="app-details">
                        <div class="detail-item">
                            <i class="fas fa-calendar"></i>
                            <span>Testing Since: Oct 2025</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-users"></i>
                            <span>52 Beta Testers</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-bullseye"></i>
                            <span>Target: Mar 2026</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-code-branch"></i>
                            <span>Version: 2.1.3-beta</span>
                        </div>
                    </div>
                    
                    <div class="features">
                        <span class="feature-tag">Milling</span>
                        <span class="feature-tag">Simulation</span>
                        <span class="feature-tag">G-code</span>
                        <span class="feature-tag">Professional</span>
                        <span class="feature-tag">Precision</span>
                    </div>
                    
                    <div class="app-actions">
                        <a href="#contact" class="btn btn-primary">
                            <i class="fas fa-flask"></i> Join Beta
                        </a>
                        <a href="about-app.html#milling" class="btn btn-secondary">
                            <i class="fas fa-info-circle"></i> Features
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Development Timeline -->
        <h2 class="section-title">Development Timeline</h2>
        
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="timeline-date">August 2025</span>
                    <h4>CNC Turning Calculator Pro</h4>
                    <p>First app published on Google Play Store. Reached 3,200+ downloads with 4.7★ rating within 5 months.</p>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="timeline-date">October 2025</span>
                    <h4>CNC Milling Calculator Development</h4>
                    <p>Started closed beta testing with 50+ professional machinists. Currently in final testing phase.</p>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="timeline-date">January 2026</span>
                    <h4>Ramzan Prayer & Hadees</h4>
                    <p>3rd application completed and ready for Play Store upload. Optimized for Ramadan 2026 season.</p>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="timeline-date">March 2026</span>
                    <h4>CNC Milling Calculator Launch</h4>
                    <p>Planned public release of CNC Milling Calculator with advanced features and professional tools.</p>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer id="contact">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Abdus Salam</h3>
                    <p>Professional Android developer creating innovative applications that combine technical excellence with practical utility.</p>
                    <p>Specializing in industrial tools and spiritual guidance applications since 2024.</p>
                </div>
                
                <div class="footer-section">
                    <h3>Contact Information</h3>
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>absalamofficial@gmail.com</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-globe"></i>
                            <span>https://absalamofficial-cmyk.github.io</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Pakistan</span>
                        </div>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-shield-alt"></i>
                            <a href="privacy-policy.html" style="color: #94a3b8; text-decoration: none;">Privacy Policy</a>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-file-contract"></i>
                            <a href="terms-conditions.html" style="color: #94a3b8; text-decoration: none;">Terms & Conditions</a>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-user"></i>
                            <a href="about-developer.html" style="color: #94a3b8; text-decoration: none;">About Developer</a>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-code"></i>
                            <a href="app-ads.txt" style="color: #94a3b8; text-decoration: none;">app-ads.txt</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024-2026 Abdus Salam. All rights reserved. | Google Play and the Google Play logo are trademarks of Google LLC.</p>
                <p style="margin-top: 10px;">This website hosts compliance files for Google Play Store and provides information about published applications.</p>
            </div>
        </footer>
    </div>

    <script>
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Animate elements on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        // Observe app cards
        document.querySelectorAll('.app-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Update year dynamically
        document.addEventListener('DOMContentLoaded', function() {
            const yearSpan = document.querySelector('.footer-bottom p');
            if(yearSpan) {
                yearSpan.innerHTML = yearSpan.innerHTML.replace('2026', new Date().getFullYear());
            }
        });
    </script>
</body>
</html>
