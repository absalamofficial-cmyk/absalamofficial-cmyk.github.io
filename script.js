// script.js - Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
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
                
                // Update URL without page reload
                history.pushState(null, null, targetId);
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animation for child elements
                if(entry.target.classList.contains('features-container')) {
                    const tags = entry.target.querySelectorAll('.feature-tag');
                    tags.forEach((tag, index) => {
                        setTimeout(() => {
                            tag.classList.add('pop-in');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.app-card, .section-title, .features-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // Add animation classes
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: slideUp 0.6s ease forwards;
        }
        
        .pop-in {
            animation: popIn 0.4s ease forwards;
        }
        
        @keyframes slideUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes popIn {
            0% {
                opacity: 0;
                transform: scale(0.8);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);

    // Current year in footer
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });

    // App download counter animation
    function animateCounter(element, finalValue, duration = 2000) {
        const startValue = 0;
        const increment = finalValue / (duration / 16);
        let current = startValue;
        
        const timer = setInterval(() => {
            current += increment;
            if(current >= finalValue) {
                clearInterval(timer);
                current = finalValue;
            }
            element.textContent = Math.floor(current).toLocaleString() + '+';
        }, 16);
    }

    // Initialize counters if they exist
    const downloadCounters = document.querySelectorAll('.download-counter');
    downloadCounters.forEach(counter => {
        const targetValue = parseInt(counter.getAttribute('data-count')) || 3200;
        animateCounter(counter, targetValue);
    });

    // Theme toggle (optional)
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--gradient-primary);
        color: white;
        border: none;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        font-size: 20px;
    `;
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.innerHTML = document.body.classList.contains('dark-mode') 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    });
    
    document.body.appendChild(themeToggle);

    // Add dark mode styles
    const darkModeStyles = `
        .dark-mode {
            background: #121212;
            color: #e0e0e0;
        }
        
        .dark-mode .app-card {
            background: #1e1e1e;
            color: #e0e0e0;
        }
        
        .dark-mode .nav-links a {
            color: #e0e0e0;
        }
    `;
    
    const darkStyle = document.createElement('style');
    darkStyle.textContent = darkModeStyles;
    document.head.appendChild(darkStyle);
});
