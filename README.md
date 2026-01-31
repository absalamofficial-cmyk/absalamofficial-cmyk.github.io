<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abdus Salam - Professional Android Developer | 2026 Portfolio</title>
    <meta name="description" content="Official portfolio of Abdus Salam - Android developer specializing in CNC tools & Islamic applications. Download apps from Play Store.">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- External CSS -->
    <link rel="stylesheet" href="style.css">
    
    <!-- Internal CSS for quick enhancements -->
    <style>
        /* Quick Color Enhancements */
        .gradient-text {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .floating { animation: float 6s ease-in-out infinite; }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .pulse { animation: pulse 2s infinite; }
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .glow {
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
        }
        
        /* Enhanced App Cards */
        .app-card:nth-child(1) {
            border-top: 5px solid #FF6B6B;
        }
        .app-card:nth-child(2) {
            border-top: 5px solid #4ECDC4;
        }
        .app-card:nth-child(3) {
            border-top: 5px solid #FFD166;
        }
        
        /* Rainbow effect on hover */
        .app-card:hover {
            background: linear-gradient(45deg, 
                rgba(255, 107, 107, 0.05),
                rgba(78, 205, 196, 0.05),
                rgba(255, 209, 102, 0.05)
            );
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

    <!-- Back to Top Button -->
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
                        <i class="fas fa-rocket"></i>
                    </div>
                    <div class="logo-text">
                        <h1>Abdus Salam</h1>
                        <span class="gradient-text">Android Developer</span>
                    </div>
                </a>
                <div class="nav-links">
                    <a href="#home" class="nav-link"><i class="fas fa-home"></i> Home</a>
                    <a href="#apps" class="nav-link"><i class="fas fa-mobile-alt"></i> Apps</a>
                    <a href="#timeline" class="nav-link"><i class="fas fa-history"></i> Timeline</a>
                    <a href="about-developer.html" class="nav-link"><i class="fas fa-user"></i> About</a>
                    <a href="#contact" class="nav-link"><i class="fas fa-envelope"></i> Contact</a>
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
                    <h1 class="hero-title gradient-text">Crafting Digital Excellence</h1>
                    <p class="hero-subtitle">Professional Android Developer creating innovative applications that combine cutting-edge technology with practical utility. Specializing in industrial tools and spiritual guidance apps.</p>
                    
                    <div class="hero-stats">
                        <div class="stat-card pulse">
                            <div class="stat-number" data-count="3">0+</div>
                            <div class="stat-label">Published Apps</div>
                        </div>
                        <div class="stat-card pulse">
                            <div class="stat-number" data-count="10000">0+</div>
                            <div class="stat-label">Downloads</div>
                        </div>
                        <div class="stat-card pulse">
                            <div class="stat-number" data-count="4.7">0★</div>
                            <div class="stat-label">Avg Rating</div>
                        </div>
                        <div class="stat-card pulse">
                            <div class="stat-number" data-count="2">0+</div>
                            <div class="stat-label">Years Exp</div>
                        </div>
                    </div>
                    
                    <div class="hero-actions">
                        <a href="#apps" class="btn btn-primary glow">
                            <i class="fas fa-eye"></i> View Apps
                        </a>
                        <a href="#contact" class="btn btn-secondary">
                            <i class="fas fa-paper-plane"></i> Contact Me
                        </a>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="floating-phone">
                        <div class="phone-screen">
                            <div class="app-preview">
                                <div class="app-icon-large">
                                    <i class="fas fa-mobile-alt"></i>
                                </div>
                                <div class="app-switcher">
                                    <span class="app-dot active"></span>
                                    <span class="app-dot"></span>
                                    <span class="app-dot"></span>
                                </div>
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
                <p class="section-subtitle">Innovative mobile solutions for diverse needs</p>
            </div>
            
            <div class="apps-grid">
                <!-- App 1: CNC Turning -->
                <div class="app-card">
                    <div class="app-badge">🔥 Trending</div>
                    <div class="app-header" style="background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);">
                        <div class="app-icon">
                            <i class="fas fa-cogs"></i>
                        </div>
                        <div class="app-title">
                            <h3>CNC Turning Calculator Pro</h3>
                            <span class="app-status status-live">Live on Play Store</span>
                        </div>
                    </div>
                    <div class="app-content">
                        <p class="app-description">Professional CNC machining calculator for engineers and machinists. Calculate speeds, feeds, cutting parameters with industrial-grade precision.</p>
                        
                        <div class="app-meta">
                            <div class="meta-item">
                                <i class="fas fa-calendar"></i>
                                <span>Published: Aug 2025</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-download"></i>
                                <span class="download-counter" data-count="3200">0+</span> Downloads
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-star"></i>
                                <span>4.7★ Rating</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-sync"></i>
                                <span>Last Update: Dec 2025</span>
                            </div>
                        </div>
                        
                        <div class="app-features">
                            <span class="feature-tag">Engineering</span>
                            <span class="feature-tag">Calculator</span>
                            <span class="feature-tag">Professional</span>
                            <span class="feature-tag">Industrial</span>
                            <span class="feature-tag">Tools</span>
                        </div>
                        
                        <div class="app-actions">
                            <a href="https://play.google.com/store/apps/details?id=com.cnc.turning.calculator.pro" class="btn btn-download" target="_blank">
                                <i class="fab fa-google-play"></i> Download Now
                            </a>
                            <a href="about-app.html#turning" class="btn btn-details">
                                <i class="fas fa-info-circle"></i> Details
                            </a>
                        </div>
                    </div>
                </div>

                <!-- App 2: Ramzan Prayer -->
                <div class="app-card">
                    <div class="app-badge" style="background: #4ECDC4;">🕌 New</div>
                    <div class="app-header" style="background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%);">
                        <div class="app-icon">
                            <i class="fas fa-mosque"></i>
                        </div>
                        <div class="app-title">
                            <h3>Ramzan Prayer & Hadees</h3>
                            <span class="app-status status-ready">Ready for Launch</span>
                        </div>
                    </div>
                    <div class="app-content">
                        <p class="app-description">Complete Islamic companion app with accurate prayer times, 3D Qibla finder, authentic Hadith collection, and Ramadan 2026 special features.</p>
                        
                        <div class="app-meta">
                            <div class="meta-item">
                                <i class="fas fa-calendar"></i>
                                <span>Release: Jan 2026</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-bullseye"></i>
                                <span>Ramadan 2026 Ready</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-language"></i>
                                <span>3 Languages</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-wifi-slash"></i>
                                <span>Offline Support</span>
                            </div>
                        </div>
                        
                        <div class="app-features">
                            <span class="feature-tag">Prayer Times</span>
                            <span class="feature-tag">3D Qibla</span>
                            <span class="feature-tag">Hadith Library</span>
                            <span class="feature-tag">Ramadan</span>
                            <span class="feature-tag">Islamic</span>
                        </div>
                        
                        <div class="app-actions">
                            <a href="#contact" class="btn btn-download" style="background: #4ECDC4;">
                                <i class="fas fa-rocket"></i> Coming Soon
                            </a>
                            <a href="about-app.html#ramzan" class="btn btn-details">
                                <i class="fas fa-info-circle"></i> Preview
                            </a>
                        </div>
                    </div>
                </div>

                <!-- App 3: CNC Milling -->
                <div class="app-card">
                    <div class="app-badge" style="background: #FFD166;">🔧 Beta</div>
                    <div class="app-header" style="background: linear-gradient(135deg, #FFD166 0%, #FF9E6D 100%);">
                        <div class="app-icon">
                            <i class="fas fa-industry"></i>
                        </div>
                        <div class="app-title">
                            <h3>CNC Milling Calculator</h3>
                            <span class="app-status status-beta">Closed Testing</span>
                        </div>
                    </div>
                    <div class="app-content">
                        <p class="app-description">Advanced milling calculations for professional machinists. Featuring toolpath simulations, G-code preview, and industrial standards compliance.</p>
                        
                        <div class="app-meta">
                            <div class="meta-item">
                                <i class="fas fa-calendar"></i>
                                <span>Testing Since: Oct 2025</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-users"></i>
                                <span>52 Beta Testers</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-bullseye"></i>
                                <span>Target: Mar 2026</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-code-branch"></i>
                                <span>Version: 2.1.3-beta</span>
                            </div>
                        </div>
                        
                        <div class="app-features">
                            <span class="feature-tag">Milling</span>
                            <span class="feature-tag">Simulation</span>
                            <span class="feature-tag">G-code</span>
                            <span class="feature-tag">Professional</span>
                            <span class="feature-tag">Precision</span>
                        </div>
                        
                        <div class="app-actions">
                            <a href="#contact" class="btn btn-download" style="background: #FFD166; color: #333;">
                                <i class="fas fa-flask"></i> Join Beta
                            </a>
                            <a href="about-app.html#milling" class="btn btn-details">
                                <i class="fas fa-info-circle"></i> Features
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Timeline Section -->
        <section class="timeline-section" id="timeline">
            <div class="section-header">
                <h2 class="section-title gradient-text">Development Journey</h2>
                <p class="section-subtitle">Milestones and achievements over the years</p>
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
                            <span class="tag">Success</span>
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
                            <span class="tag">Industrial</span>
                            <span class="tag">Advanced</span>
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
                            <span class="tag">Ready</span>
                            <span class="tag">Ramadan</span>
                        </div>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-date">March 2026</div>
                    <div class="timeline-content">
                        <h4>CNC Milling Calculator Launch</h4>
                        <p>Planned public release of CNC Milling Calculator with advanced features and professional tools.</p>
                        <div class="timeline-tags">
                            <span class="tag">Upcoming</span>
                            <span class="tag">Release</span>
                            <span class="tag">Professional</span>
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
            
            <div class="contact-grid">
                <div class="contact-info">
                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <h3>Email</h3>
                        <p>absalamofficial@gmail.com</p>
                        <a href="mailto:absalamofficial@gmail.com" class="contact-link">Send Email</a>
                    </div>
                    
                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-globe"></i>
                        </div>
                        <h3>Website</h3>
                        <p>https://absalamofficial-cmyk.github.io</p>
                        <a href="https://absalamofficial-cmyk.github.io" class="contact-link" target="_blank">Visit Site</a>
                    </div>
                    
                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <h3>Location</h3>
                        <p>Pakistan</p>
                        <span class="contact-link">Remote Available</span>
                    </div>
                </div>
                
                <div class="quick-links">
                    <h3>Quick Links</h3>
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
                        <a href="about-app.html" class="link-item">
                            <i class="fas fa-info-circle"></i>
                            <span>App Details</span>
                        </a>
                        <a href="#apps" class="link-item">
                            <i class="fas fa-download"></i>
                            <span>Download Apps</span>
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
                        <a href="#" class="social-icon">
                            <i class="fab fa-google-play"></i>
                        </a>
                    </div>
                </div>
                
                <div class="footer-links">
                    <h4>Applications</h4>
                    <ul>
                        <li><a href="about-app.html#turning">CNC Turning Calculator Pro</a></li>
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
                <p class="footer-note">This website hosts compliance files for Google Play Store requirements.</p>
            </div>
        </footer>
    </div>

    <!-- JavaScript Files -->
    <script src="script.js"></script>
    
    <!-- Additional Script for Enhanced Effects -->
    <script>
        // Loading Screen
        window.addEventListener('load', function() {
            setTimeout(() => {
                document.getElementById('loadingScreen').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('loadingScreen').style.display = 'none';
                }, 500);
            }, 1000);
        });

        // Animated Counter
        function animateCounter() {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        if (counter.innerHTML.includes('★')) {
                            counter.innerHTML = current.toFixed(1) + '★';
                        } else {
                            counter.innerHTML = Math.floor(current) + '+';
                        }
                        setTimeout(updateCounter, 20);
                    } else {
                        if (counter.innerHTML.includes('★')) {
                            counter.innerHTML = target.toFixed(1) + '★';
                        } else {
                            counter.innerHTML = target + '+';
                        }
                    }
                };
                updateCounter();
            });
        }

        // Initialize when in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(document.querySelector('.hero-stats'));

        // Download Counter Animation
        document.querySelectorAll('.download-counter').forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            let current = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current) + '+';
            }, 30);
        });
    </script>
</body>
</html>
