<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abdus Salam - Professional Android Developer | January 2026 Portfolio</title>
    <meta name="description" content="Official portfolio of Abdus Salam - Professional Android Developer specializing in CNC tools & Islamic applications. 3+ published apps with 10K+ downloads.">
    
    <!-- Fonts & Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="responsive.css">
    
    <style>
        /* Quick Color Enhancements */
        .gradient-text {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradient-shift 3s ease infinite;
        }
        
        @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        
        .floating {
            animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
            50% { transform: scale(1.05); box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3); }
            100% { transform: scale(1); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        }
        
        /* Status Badges */
        .status-badge {
            display: inline-block;
            padding: 6px 15px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-left: 10px;
            vertical-align: middle;
        }
        
        .status-live { background: #10b981; color: white; }
        .status-ready { background: #f59e0b; color: white; }
        .status-testing { background: #6366f1; color: white; }
        
        /* Feature Tags */
        .feature-tag {
            display: inline-block;
            padding: 5px 12px;
            margin: 3px;
            background: #e0f2fe;
            color: #0369a1;
            border-radius: 15px;
            font-size: 12px;
            font-weight: 500;
            border: 1px solid #bae6fd;
        }
        
        /* Download Button Animation */
        @keyframes download-pulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(37, 99, 235, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
        }
        
        .download-pulse {
            animation: download-pulse 2s infinite;
        }
    </style>
</head>
<body>
    <!-- Loading Screen -->
    <div class="loading-screen" id="loadingScreen">
        <div class="loader">
            <div class="loader-circle"></div>
            <p>Loading Portfolio...</p>
        </div>
    </div>

    <!-- Back to Top -->
    <button class="back-to-top" id="backToTop">
        <i class="fas fa-chevron-up"></i>
    </button>

    <!-- Theme Toggle -->
    <button class="theme-toggle" id="themeToggle">
        <i class="fas fa-moon"></i>
    </button>

    <div class="container">
        <!-- Header -->
        <header class="site-header">
            <nav class="navbar">
                <a href="index.html" class="logo">
                    <div class="logo-icon floating">
                        <i class="fas fa-code"></i>
                    </div>
                    <div class="logo-text">
                        <h1>Abdus Salam</h1>
                        <span class="gradient-text">Professional Android Developer</span>
                    </div>
                </a>
                
                <div class="nav-menu" id="navMenu">
                    <a href="#home" class="nav-link active"><i class="fas fa-home"></i> Home</a>
                    <a href="#apps" class="nav-link"><i class="fas fa-mobile-alt"></i> Apps</a>
                    <a href="#about" class="nav-link"><i class="fas fa-user"></i> About</a>
                    <a href="#timeline" class="nav-link"><i class="fas fa-history"></i> Timeline</a>
                    <a href="#contact" class="nav-link"><i class="fas fa-envelope"></i> Contact</a>
                    <a href="privacy-policy.html" class="nav-link"><i class="fas fa-shield-alt"></i> Privacy</a>
                </div>
                
                <button class="menu-toggle" id="menuToggle">
                    <i class="fas fa-bars"></i>
                </button>
            </nav>
        </header>

        <!-- Hero Section -->
        <section class="hero-section" id="home">
            <div class="hero-content">
                <div class="hero-text">
                    <div class="hero-badge pulse">
                        <i class="fas fa-rocket"></i> Android Developer Since 2024
                    </div>
                    <h1 class="hero-title gradient-text">
                        Transforming Ideas Into<br>
                        <span class="highlight">Digital Solutions</span>
                    </h1>
                    <p class="hero-subtitle">
                        Professional Android developer creating innovative applications that bridge technology 
                        with practical needs. Specializing in industrial tools and spiritual guidance applications 
                        with 10,000+ downloads across platforms.
                    </p>
                    
                    <div class="hero-stats">
                        <div class="stat-card">
                            <div class="stat-icon">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <div class="stat-content">
                                <h3 class="stat-number" data-count="3">0+</h3>
                                <p class="stat-label">Published Apps</p>
                            </div>
                        </div>
                        
                        <div class="stat-card">
                            <div class="stat-icon">
                                <i class="fas fa-download"></i>
                            </div>
                            <div class="stat-content">
                                <h3 class="stat-number" data-count="10000">0+</h3>
                                <p class="stat-label">Total Downloads</p>
                            </div>
                        </div>
                        
                        <div class="stat-card">
                            <div class="stat-icon">
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="stat-content">
                                <h3 class="stat-number" data-count="4.7">0★</h3>
                                <p class="stat-label">Average Rating</p>
                            </div>
                        </div>
                        
                        <div class="stat-card">
                            <div class="stat-icon">
                                <i class="fas fa-calendar-alt"></i>
                            </div>
                            <div class="stat-content">
                                <h3 class="stat-number" data-count="2">0+</h3>
                                <p class="stat-label">Years Experience</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="hero-actions">
                        <a href="#apps" class="btn btn-primary download-pulse">
                            <i class="fas fa-eye"></i> View My Apps
                        </a>
                        <a href="#contact" class="btn btn-outline">
                            <i class="fas fa-paper-plane"></i> Contact Me
                        </a>
                    </div>
                </div>
                
                <div class="hero-image">
                    <div class="phone-mockup floating">
                        <div class="phone-screen">
                            <div class="app-switcher">
                                <div class="app-screen active" data-app="ramzan">
                                    <div class="app-icon-large">
                                        <i class="fas fa-mosque"></i>
                                    </div>
                                    <h4>Ramzan Prayer</h4>
                                </div>
                                <div class="app-screen" data-app="cnc">
                                    <div class="app-icon-large">
                                        <i class="fas fa-cogs"></i>
                                    </div>
                                    <h4>CNC Calculator</h4>
                                </div>
                            </div>
                            <div class="screen-dots">
                                <span class="dot active"></span>
                                <span class="dot"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="scroll-indicator">
                <i class="fas fa-chevron-down"></i>
            </div>
        </section>

        <!-- Apps Section -->
        <section class="apps-section" id="apps">
            <div class="section-header">
                <h2 class="section-title gradient-text">My Applications</h2>
                <p class="section-subtitle">Innovative mobile solutions designed for real-world problems</p>
            </div>
            
            <div class="apps-grid">
                <!-- App 1: CNC Turning -->
                <div class="app-card">
                    <div class="app-ribbon">🔥 Most Popular</div>
                    <div class="app-header">
                        <div class="app-icon" style="background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);">
                            <i class="fas fa-cogs"></i>
                        </div>
                        <div class="app-title">
                            <h3>CNC Turning Calculator Pro</h3>
                            <span class="status-badge status-live">Live on Play Store</span>
                        </div>
                    </div>
                    
                    <div class="app-content">
                        <p class="app-description">
                            Professional CNC machining calculator for engineers and machinists. 
                            Calculate speeds, feeds, cutting parameters with industrial-grade precision.
                        </p>
                        
                        <div class="app-details">
                            <div class="detail-item">
                                <i class="fas fa-calendar"></i>
                                <strong>Published:</strong> August 2025
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-download"></i>
                                <strong>Downloads:</strong> <span class="download-counter" data-count="3200">3,200+</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-star"></i>
                                <strong>Rating:</strong> 4.7★
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-sync"></i>
                                <strong>Last Update:</strong> December 2025
                            </div>
                        </div>
                        
                        <div class="app-features">
                            <h4>Key Features:</h4>
                            <div class="features-grid">
                                <span class="feature-tag">Turning Calculations</span>
                                <span class="feature-tag">Material Database</span>
                                <span class="feature-tag">Tool Selection</span>
                                <span class="feature-tag">Cost Estimation</span>
                                <span class="feature-tag">PDF Export</span>
                                <span class="feature-tag">Offline Support</span>
                            </div>
                        </div>
                        
                        <div class="app-technical">
                            <h4>Technical Specs:</h4>
                            <ul>
                                <li><i class="fas fa-code"></i> MVVM Architecture</li>
                                <li><i class="fas fa-database"></i> Room Database</li>
                                <li><i class="fas fa-bolt"></i> <60ms Response Time</li>
                                <li><i class="fas fa-mobile"></i> <50MB APK Size</li>
                            </ul>
                        </div>
                        
                        <div class="app-actions">
                            <a href="https://play.google.com/store/apps/details?id=com.cnc.turning.calculator.pro" 
                               class="btn btn-download" target="_blank">
                                <i class="fab fa-google-play"></i> Download Now
                            </a>
                            <a href="app-details.html#cnc-turning" class="btn btn-outline">
                                <i class="fas fa-info-circle"></i> View Details
                            </a>
                        </div>
                    </div>
                </div>

                <!-- App 2: Ramzan Prayer -->
                <div class="app-card">
                    <div class="app-ribbon" style="background: #10b981;">🕌 New Release</div>
                    <div class="app-header">
                        <div class="app-icon" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                            <i class="fas fa-mosque"></i>
                        </div>
                        <div class="app-title">
                            <h3>Ramzan Prayer & Hadees</h3>
                            <span class="status-badge status-ready">Ready for Launch</span>
                        </div>
                    </div>
                    
                    <div class="app-content">
                        <p class="app-description">
                            Complete Islamic companion app with accurate prayer times, 3D Qibla finder, 
                            authentic Hadith collection, and Ramadan 2026 special features.
                        </p>
                        
                        <div class="app-details">
                            <div class="detail-item">
                                <i class="fas fa-calendar"></i>
                                <strong>Release:</strong> January 2026
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-bullseye"></i>
                                <strong>Target:</strong> Ramadan 2026
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-language"></i>
                                <strong>Languages:</strong> 3
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-wifi-slash"></i>
                                <strong>Offline:</strong> Full Support
                            </div>
                        </div>
                        
                        <div class="app-features">
                            <h4>Core Features:</h4>
                            <div class="features-grid">
                                <span class="feature-tag">Live Prayer Times</span>
                                <span class="feature-tag">3D Qibla Finder</span>
                                <span class="feature-tag">10K+ Hadiths</span>
                                <span class="feature-tag">Ramadan Tracker</span>
                                <span class="feature-tag">WhatsApp Status</span>
                                <span class="feature-tag">Islamic Calendar</span>
                            </div>
                        </div>
                        
                        <div class="app-technical">
                            <h4>Technical Specs:</h4>
                            <ul>
                                <li><i class="fas fa-paint-brush"></i> Material Design 3.0</li>
                                <li><i class="fas fa-database"></i> Efficient Caching</li>
                                <li><i class="fas fa-battery-full"></i> <1% Battery/Hour</li>
                                <li><i class="fas fa-globe"></i> Multi-language Support</li>
                            </ul>
                        </div>
                        
                        <div class="app-actions">
                            <a href="#contact" class="btn btn-download" style="background: #10b981;">
                                <i class="fas fa-rocket"></i> Coming Soon
                            </a>
                            <a href="app-details.html#ramzan" class="btn btn-outline">
                                <i class="fas fa-info-circle"></i> Preview Features
                            </a>
                        </div>
                    </div>
                </div>

                <!-- App 3: CNC Milling -->
                <div class="app-card">
                    <div class="app-ribbon" style="background: #6366f1;">🔧 In Development</div>
                    <div class="app-header">
                        <div class="app-icon" style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);">
                            <i class="fas fa-industry"></i>
                        </div>
                        <div class="app-title">
                            <h3>CNC Milling Calculator</h3>
                            <span class="status-badge status-testing">Closed Testing</span>
                        </div>
                    </div>
                    
                    <div class="app-content">
                        <p class="app-description">
                            Advanced milling calculations for professional machinists. 
                            Featuring toolpath simulations, G-code preview, and industrial standards compliance.
                        </p>
                        
                        <div class="app-details">
                            <div class="detail-item">
                                <i class="fas fa-calendar"></i>
                                <strong>Testing Since:</strong> October 2025
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-users"></i>
                                <strong>Testers:</strong> 52 Professionals
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-bullseye"></i>
                                <strong>Target Release:</strong> March 2026
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-code-branch"></i>
                                <strong>Version:</strong> 2.1.3-beta
                            </div>
                        </div>
                        
                        <div class="app-features">
                            <h4>Upcoming Features:</h4>
                            <div class="features-grid">
                                <span class="feature-tag">Milling Calculations</span>
                                <span class="feature-tag">Toolpath Simulation</span>
                                <span class="feature-tag">G-code Preview</span>
                                <span class="feature-tag">Advanced Toolpaths</span>
                                <span class="feature-tag">Material Library</span>
                                <span class="feature-tag">Coolant Calculations</span>
                            </div>
                        </div>
                        
                        <div class="app-technical">
                            <h4>Specialized Modules:</h4>
                            <ul>
                                <li><i class="fas fa-calculator"></i> End Mill Selection</li>
                                <li><i class="fas fa-weight"></i> Clamping Force Calc</li>
                                <li><i class="fas fa-wave-square"></i> Vibration Analysis</li>
                                <li><i class="fas fa-tachometer-alt"></i> Surface Finish Predictions</li>
                            </ul>
                        </div>
                        
                        <div class="app-actions">
                            <a href="#contact" class="btn btn-download" style="background: #6366f1;">
                                <i class="fas fa-flask"></i> Join Beta Testing
                            </a>
                            <a href="app-details.html#cnc-milling" class="btn btn-outline">
                                <i class="fas fa-info-circle"></i> View Roadmap
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="about-section" id="about">
            <div class="section-header">
                <h2 class="section-title gradient-text">About The Developer</h2>
                <p class="section-subtitle">Passionate about creating technology that makes a difference</p>
            </div>
            
            <div class="about-content">
                <div class="about-text">
                    <h3>Abdus Salam</h3>
                    <p class="about-description">
                        Professional Android Developer with 2+ years of experience creating innovative mobile 
                        applications that solve real-world problems. Specializing in both industrial tools and 
                        spiritual guidance applications.
                    </p>
                    
                    <div class="expertise">
                        <h4>Areas of Expertise:</h4>
                        <div class="expertise-grid">
                            <div class="expertise-item">
                                <i class="fas fa-industry"></i>
                                <span>Industrial Applications</span>
                            </div>
                            <div class="expertise-item">
                                <i class="fas fa-mosque"></i>
                                <span>Islamic Applications</span>
                            </div>
                            <div class="expertise-item">
                                <i class="fas fa-mobile-alt"></i>
                                <span>Android Development</span>
                            </div>
                            <div class="expertise-item">
                                <i class="fas fa-paint-brush"></i>
                                <span>UI/UX Design</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="development-philosophy">
                        <h4>Development Philosophy:</h4>
                        <ul>
                            <li><i class="fas fa-check-circle"></i> <strong>User-Centric Design:</strong> Clean, intuitive interfaces</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Performance First:</strong> Optimized for speed and efficiency</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Privacy Focused:</strong> Minimal data collection</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Regular Updates:</strong> Continuous improvement</li>
                        </ul>
                    </div>
                </div>
                
                <div class="about-stats">
                    <div class="stats-card">
                        <h4>Development Stack</h4>
                        <div class="tech-stack">
                            <span class="tech-tag">Java 80%</span>
                            <span class="tech-tag">Kotlin 20%</span>
                            <span class="tech-tag">MVVM Architecture</span>
                            <span class="tech-tag">Room Database</span>
                            <span class="tech-tag">Material Design 3</span>
                            <span class="tech-tag">Firebase</span>
                            <span class="tech-tag">Retrofit</span>
                            <span class="tech-tag">Git</span>
                        </div>
                    </div>
                    
                    <div class="stats-card">
                        <h4>Quality Standards</h4>
                        <div class="quality-metrics">
                            <div class="metric">
                                <span class="metric-value">99.8%</span>
                                <span class="metric-label">Crash-Free Sessions</span>
                            </div>
                            <div class="metric">
                                <span class="metric-value">24h</span>
                                <span class="metric-label">Support Response</span>
                            </div>
                            <div class="metric">
                                <span class="metric-value">Monthly</span>
                                <span class="metric-label">Feature Updates</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Timeline Section -->
        <section class="timeline-section" id="timeline">
            <div class="section-header">
                <h2 class="section-title gradient-text">Development Timeline</h2>
                <p class="section-subtitle">Milestones and achievements in my development journey</p>
            </div>
            
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">August 2025</div>
                    <div class="timeline-content">
                        <h4>CNC Turning Calculator Pro Launch</h4>
                        <p>First app published on Google Play Store. Reached 3,200+ downloads with 4.7★ rating within 5 months.</p>
                        <div class="timeline-tags">
                            <span class="tag">Play Store</span>
                            <span class="tag">Engineering</span>
                            <span class="tag">Industrial</span>
                        </div>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-date">October 2025</div>
                    <div class="timeline-content">
                        <h4>CNC Milling Calculator Development</h4>
                        <p>Started closed beta testing with 50+ professional machinists. Currently in final testing phase.</p>
                        <div class="timeline-tags">
                            <span class="tag">Beta Testing</span>
                            <span class="tag">Advanced Features</span>
                            <span class="tag">Professional</span>
                        </div>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-date">January 2026</div>
                    <div class="timeline-content">
                        <h4>Ramzan Prayer & Hadees Completion</h4>
                        <p>3rd application completed and ready for Play Store upload. Optimized for Ramadan 2026 season.</p>
                        <div class="timeline-tags">
                            <span class="tag">Islamic App</span>
                            <span class="tag">Ready for Launch</span>
                            <span class="tag">Ramadan 2026</span>
                        </div>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-date">March 2026</div>
                    <div class="timeline-content">
                        <h4>CNC Milling Calculator Launch</h4>
                        <p>Planned public release of CNC Milling Calculator with advanced features and professional tools.</p>
                        <div class="timeline-tags">
                            <span class="tag">Upcoming Release</span>
                            <span class="tag">Professional Tools</span>
                            <span class="tag">Industrial Grade</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="contact-section" id="contact">
            <div class="section-header">
                <h2 class="section-title gradient-text">Get In Touch</h2>
                <p class="section-subtitle">Let's create something amazing together</p>
            </div>
            
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <h4>Email</h4>
                        <p>absalamofficial@gmail.com</p>
                        <a href="mailto:absalamofficial@gmail.com" class="contact-link">Send Email</a>
                    </div>
                    
                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-globe"></i>
                        </div>
                        <h4>Website</h4>
                        <p>https://absalamofficial-cmyk.github.io</p>
                        <a href="https://absalamofficial-cmyk.github.io" class="contact-link" target="_blank">Visit Site</a>
                    </div>
                    
                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <h4>Location</h4>
                        <p>Pakistan</p>
                        <span class="contact-link">Available Worldwide</span>
                    </div>
                </div>
                
                <div class="quick-links">
                    <h4>Quick Links</h4>
                    <div class="links-grid">
                        <a href="privacy-policy.html" class="link-item">
                            <i class="fas fa-shield-alt"></i>
                            <span>Privacy Policy</span>
                        </a>
                        <a href="terms-conditions.html" class="link-item">
                            <i class="fas fa-file-contract"></i>
                            <span>Terms & Conditions</span>
                        </a>
                        <a href="about-developer.html" class="link-item">
                            <i class="fas fa-user"></i>
                            <span>About Developer</span>
                        </a>
                        <a href="app-ads.txt" class="link-item">
                            <i class="fas fa-code"></i>
                            <span>app-ads.txt</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="site-footer">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>Abdus Salam</h3>
                    <p>Professional Android Developer & Digital Creator</p>
                    <div class="social-links">
                        <a href="mailto:absalamofficial@gmail.com" class="social-icon">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <a href="https://github.com/absalamofficial-cmyk" class="social-icon" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                
                <div class="footer-links">
                    <h4>Applications</h4>
                    <ul>
                        <li><a href="app-details.html#cnc-turning">CNC Turning Calculator Pro</a></li>
                        <li><a href="app-details.html#ramzan">Ramzan Prayer & Hadees</a></li>
                        <li><a href="app-details.html#cnc-milling">CNC Milling Calculator</a></li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="terms-conditions.html">Terms & Conditions</a></li>
                        <li><a href="app-ads.txt">AdMob Compliance</a></li>
                    </ul>
                </div>
                
                <div class="footer-newsletter">
                    <h4>Stay Updated</h4>
                    <p>Get notified about new app releases and updates</p>
                    <div class="newsletter-form">
                        <input type="email" placeholder="Your email" id="newsletterEmail">
                        <button class="btn-subscribe">Subscribe</button>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <span class="current-year">2026</span> Abdus Salam. All rights reserved.</p>
                <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
                <p class="footer-note">Transforming ideas into elegant mobile solutions since 2024</p>
            </div>
        </footer>
    </div>

    <!-- JavaScript -->
    <script src="script.js"></script>
    <script>
        // Animated Counters
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-count'));
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        if (counter.textContent.includes('★')) {
                            counter.textContent = current.toFixed(1) + '★';
                        } else {
                            counter.textContent = Math.floor(current) + '+';
                        }
                        setTimeout(updateCounter, 20);
                    } else {
                        if (counter.textContent.includes('★')) {
                            counter.textContent = target.toFixed(1) + '★';
                        } else {
                            counter.textContent = target + '+';
                        }
                    }
                };
                updateCounter();
            });
        }

        // Initialize animations when in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(document.querySelector('.hero-stats'));

        // Loading screen
        window.addEventListener('load', function() {
            setTimeout(() => {
                document.getElementById('loadingScreen').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('loadingScreen').style.display = 'none';
                }, 500);
            }, 1000);
        });

        // Back to top
        const backToTop = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('dark-theme')) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        // Update current year
        document.querySelector('.current-year').textContent = new Date().getFullYear();
    </script>
</body>
</html>
