<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms & Conditions - Ramzan Prayer & Hadees</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Amiri:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --primary: #1e3c72;
            --secondary: #2a5298;
            --accent: #00d4ff;
            --gold: #ffd700;
            --glass: rgba(255, 255, 255, 0.1);
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #1e3c72);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
            color: #fff;
            line-height: 1.6;
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }
        
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        /* Floating Particles */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 0;
        }
        
        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--accent);
            border-radius: 50%;
            opacity: 0.5;
            animation: float 20s infinite linear;
            box-shadow: 0 0 10px var(--accent);
        }
        
        @keyframes float {
            from {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% { opacity: 1; }
            90% { opacity: 1; }
            to {
                transform: translateY(-100vh) rotate(720deg);
                opacity: 0;
            }
        }
        
        .container {
            max-width: 1000px;
            margin: 40px auto;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border-radius: 30px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px rgba(0,0,0,0.5), 
                        inset 0 0 0 1px rgba(255,255,255,0.1);
            overflow: hidden;
            position: relative;
            z-index: 1;
            transform-style: preserve-3d;
            perspective: 1000px;
        }
        
        /* Animated Border */
        .container::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, var(--accent), var(--gold), var(--accent), var(--secondary));
            background-size: 400%;
            z-index: -1;
            border-radius: 32px;
            opacity: 0;
            transition: opacity 0.3s;
            animation: borderGlow 3s linear infinite;
        }
        
        .container:hover::before {
            opacity: 1;
        }
        
        @keyframes borderGlow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        
        .header {
            background: linear-gradient(135deg, rgba(30,60,114,0.9) 0%, rgba(42,82,152,0.9) 100%);
            color: white;
            padding: 60px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 20px 20px;
            opacity: 0.3;
            animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
            0% { transform: translate(0,0); }
            100% { transform: translate(20px,20px); }
        }
        
        .header h1 {
            font-size: 3.5rem;
            margin-bottom: 15px;
            font-weight: 800;
            background: linear-gradient(135deg, #fff 0%, var(--accent) 50%, var(--gold) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 0 30px rgba(0,212,255,0.3);
            animation: titleGlow 2s ease-in-out infinite alternate;
            position: relative;
            z-index: 1;
        }
        
        @keyframes titleGlow {
            from { filter: drop-shadow(0 0 20px rgba(0,212,255,0.5)); }
            to { filter: drop-shadow(0 0 30px rgba(255,215,0,0.5)); }
        }
        
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
            position: relative;
            z-index: 1;
            text-transform: uppercase;
            letter-spacing: 3px;
        }
        
        .last-updated {
            opacity: 0.8;
            font-size: 0.9rem;
            margin-top: 15px;
            color: var(--accent);
            font-weight: 300;
            letter-spacing: 2px;
        }
        
        .content {
            padding: 50px;
            max-height: 700px;
            overflow-y: auto;
            position: relative;
        }
        
        /* Custom Scrollbar */
        .content::-webkit-scrollbar {
            width: 10px;
        }
        
        .content::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.05);
            border-radius: 10px;
        }
        
        .content::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            border-radius: 10px;
            border: 2px solid transparent;
            background-clip: content-box;
        }
        
        .section {
            margin-bottom: 40px;
            padding: 30px;
            background: rgba(255,255,255,0.03);
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.05);
            transform: translateZ(0);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
        }
        
        .section::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transition: left 0.5s;
        }
        
        .section:hover::before {
            left: 100%;
        }
        
        .section:hover {
            transform: translateY(-5px) scale(1.02);
            background: rgba(255,255,255,0.08);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3),
                        0 0 20px rgba(0,212,255,0.1);
            border-color: rgba(0,212,255,0.3);
        }
        
        .section h2 {
            color: var(--accent);
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid transparent;
            border-image: linear-gradient(90deg, var(--accent), transparent) 1;
            font-size: 1.5rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .section h2::before {
            content: '▹';
            color: var(--gold);
            font-size: 1.2rem;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        .section p, .section ul {
            margin-bottom: 15px;
            color: rgba(255,255,255,0.85);
            font-weight: 300;
            line-height: 1.8;
        }
        
        .section ul {
            padding-left: 25px;
            list-style: none;
        }
        
        .section li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 25px;
            transition: all 0.3s;
        }
        
        .section li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--gold);
            font-weight: bold;
            transition: all 0.3s;
        }
        
        .section li:hover {
            color: var(--accent);
            transform: translateX(10px);
        }
        
        .section li:hover::before {
            color: var(--accent);
            transform: translateX(5px);
        }
        
        .important-note {
            background: linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,215,0,0.05) 100%);
            border-left: 4px solid var(--gold);
            padding: 25px;
            margin: 25px 0;
            border-radius: 15px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(255,215,0,0.1);
        }
        
        .important-note::before {
            content: '⚠';
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 3rem;
            opacity: 0.1;
            animation: rotate 10s linear infinite;
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .important-note p {
            color: #fff;
            font-weight: 400;
        }
        
        .important-note strong {
            color: var(--gold);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .footer {
            background: rgba(0,0,0,0.3);
            padding: 40px;
            text-align: center;
            border-top: 1px solid rgba(255,255,255,0.1);
            position: relative;
        }
        
        .copy-btn {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            border: none;
            padding: 15px 40px;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            margin: 0 auto;
            transition: all 0.4s;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(30,60,114,0.4);
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        
        .copy-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.5s;
        }
        
        .copy-btn:hover::before {
            left: 100%;
        }
        
        .copy-btn:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 20px 40px rgba(0,212,255,0.4),
                        0 0 30px rgba(0,212,255,0.2);
            background: linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%);
        }
        
        .copy-btn:active {
            transform: translateY(-1px) scale(1.02);
        }
        
        .copied-message {
            color: #00ff88;
            margin-top: 15px;
            display: none;
            font-weight: 600;
            animation: fadeInUp 0.5s;
            text-shadow: 0 0 10px rgba(0,255,136,0.5);
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .footer p {
            margin-top: 25px;
            color: rgba(255,255,255,0.6);
            font-size: 0.9rem;
        }
        
        .footer a {
            color: var(--accent);
            text-decoration: none;
            position: relative;
            transition: all 0.3s;
        }
        
        .footer a::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--gold);
            transition: width 0.3s;
        }
        
        .footer a:hover {
            color: var(--gold);
            text-shadow: 0 0 10px rgba(255,215,0,0.5);
        }
        
        .footer a:hover::after {
            width: 100%;
        }
        
        /* Loading Animation */
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #0f0c29;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s, visibility 0.5s;
        }
        
        .loader.hidden {
            opacity: 0;
            visibility: hidden;
        }
        
        .loader-circle {
            width: 80px;
            height: 80px;
            border: 4px solid rgba(255,255,255,0.1);
            border-top-color: var(--accent);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            box-shadow: 0 0 20px var(--accent);
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .container {
                margin: 20px;
                border-radius: 20px;
            }
            
            .header {
                padding: 40px 20px;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .content {
                padding: 30px 20px;
                max-height: 500px;
            }
            
            .section {
                padding: 20px;
            }
            
            .section h2 {
                font-size: 1.2rem;
            }
        }
        
        /* 3D Tilt Effect Classes */
        .tilt-card {
            transform-style: preserve-3d;
            transform: perspective(1000px);
        }
        
        .tilt-content {
            transform: translateZ(20px);
        }
    </style>
</head>
<body>
    <!-- Loading Screen -->
    <div class="loader" id="loader">
        <div class="loader-circle"></div>
    </div>
    
    <!-- Floating Particles -->
    <div class="particles" id="particles"></div>
    
    <div class="container" id="mainContainer">
        <div class="header">
            <h1>Terms & Conditions</h1>
            <p>Ramzan Prayer & Hadees Mobile Application</p>
            <p class="last-updated">Last Updated: January 31, 2026</p>
        </div>
        
        <div class="content" id="termsContent">
            <!-- Section 1 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>1. ACCEPTANCE OF TERMS</h2>
                    <p>By downloading, installing, or using the Ramzan Prayer & Hadees mobile application ("the App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.</p>
                </div>
            </div>
            
            <!-- Section 2 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>2. ELIGIBILITY</h2>
                    <p>2.1 You must be at least 13 years old to use this App.</p>
                    <p>2.2 By using the App, you represent that you have the legal capacity to enter into this agreement.</p>
                </div>
            </div>
            
            <!-- Section 3 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>3. APP LICENSE</h2>
                    <p>3.1 We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes.</p>
                    <p>3.2 This license is for use on Android devices that you own or control.</p>
                    <p>3.3 You may not:</p>
                    <ul>
                        <li>Copy, modify, or create derivative works of the App</li>
                        <li>Reverse engineer, decompile, or attempt to extract source code</li>
                        <li>Remove any copyright or proprietary notices</li>
                        <li>Use the App for any illegal purpose</li>
                        <li>Resell, lease, or distribute the App</li>
                    </ul>
                </div>
            </div>
            
            <!-- Section 4 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>4. USER RESPONSIBILITIES</h2>
                    <p>4.1 <strong style="color: var(--gold);">Accurate Information:</strong> You must provide accurate location information for prayer time calculations.</p>
                    <p>4.2 <strong style="color: var(--gold);">Device Security:</strong> You are responsible for maintaining the security of your device.</p>
                    <p>4.3 <strong style="color: var(--gold);">Prohibited Activities:</strong></p>
                    <ul>
                        <li>Attempting to disrupt App functionality</li>
                        <li>Using automated systems to access the App</li>
                        <li>Violating any laws through App usage</li>
                    </ul>
                </div>
            </div>
            
            <!-- Section 5 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>5. PRAYER TIME ACCURACY DISCLAIMER</h2>
                    <p>5.1 The App provides prayer time calculations based on established Islamic methodologies.</p>
                    <p>5.2 <strong style="color: #ff6b6b;">Important:</strong> These are calculated times and may differ from local mosque announcements.</p>
                    <p>5.3 <strong style="color: var(--gold);">You are responsible for:</strong></p>
                    <ul>
                        <li>Verifying prayer times with local Islamic authorities</li>
                        <li>Following moon sighting announcements for Ramadan/Eid</li>
                        <li>Adjusting times based on local customs</li>
                    </ul>
                    <p>5.4 We are not liable for any missed prayers due to time discrepancies.</p>
                </div>
            </div>
            
            <!-- Section 6 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>6. QIBLA DIRECTION DISCLAIMER</h2>
                    <p>6.1 Qibla direction is calculated using mathematical formulas.</p>
                    <p>6.2 Accuracy may vary due to:</p>
                    <ul>
                        <li>Device sensor calibration</li>
                        <li>Magnetic interference</li>
                        <li>Building structures</li>
                        <li>Geographical location</li>
                    </ul>
                    <p>6.3 For precise Qibla direction, consult with local Islamic centers.</p>
                    <p>6.4 The 3D visualization is for guidance only.</p>
                </div>
            </div>
            
            <!-- Section 7 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>7. HADITH CONTENT DISCLAIMER</h2>
                    <div class="important-note">
                        <p><strong>IMPORTANT LEGAL NOTICE:</strong></p>
                        <p>7.1 All Hadith texts are sourced from widely accepted Islamic collections.</p>
                        <p>7.2 Translations may contain errors or limitations - Arabic text is primary.</p>
                        <p>7.3 <strong>This App is NOT a religious authority.</strong> Consult qualified Islamic scholars for religious rulings.</p>
                        <p>7.4 The developer is a software engineer, NOT an Islamic scholar.</p>
                        <p>7.5 Any errors in text or translation are <strong>UNINTENTIONAL technical errors</strong>.</p>
                        <p>7.6 You must verify important religious content with authentic sources.</p>
                        <p>7.7 Report any content errors to: <strong style="color: var(--accent);">absalamofficial@gmail.com</strong></p>
                    </div>
                </div>
            </div>
            
            <!-- Section 8 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>8. RAMADAN FEATURES</h2>
                    <p>8.1 Sehri/Iftar times are calculated, not confirmed by moon sighting.</p>
                    <p>8.2 You must verify Ramadan start/end dates with local moon sighting committees.</p>
                    <p>8.3 Taraweeh calculations are approximate.</p>
                    <p>8.4 Fasting is a religious obligation; the App only provides assistance.</p>
                </div>
            </div>
            
            <!-- Section 9 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>9. INTELLECTUAL PROPERTY</h2>
                    <p>9.1 All App content including code, design, and graphics are property of Abdus Salam (developer).</p>
                    <p>9.2 Hadith texts are Islamic heritage; arrangement is proprietary.</p>
                    <p>9.3 "Ramzan Prayer & Hadees" is a trademark.</p>
                </div>
            </div>
            
            <!-- Section 10 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>10. PRIVACY</h2>
                    <p>10.1 Our Privacy Policy is incorporated into these Terms.</p>
                    <p>10.2 Location data is processed locally only.</p>
                    <p>10.3 No personal data is collected or shared.</p>
                </div>
            </div>
            
            <!-- Section 11 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>11. DISCLAIMER OF WARRANTIES</h2>
                    <p>11.1 THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE."</p>
                    <p>11.2 WE MAKE NO WARRANTIES about accuracy or uninterrupted access.</p>
                </div>
            </div>
            
            <!-- Section 12 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>12. LIMITATION OF LIABILITY</h2>
                    <p>12.1 We are not liable for any indirect, incidental damages.</p>
                    <p>12.2 Not liable for religious consequences of missed prayers.</p>
                    <p>12.3 Total liability limited to amount you paid for App (currently $0).</p>
                </div>
            </div>
            
            <!-- Section 13 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>13. INDEMNIFICATION</h2>
                    <p>You agree to indemnify and hold harmless the developer from any claims arising from:</p>
                    <ul>
                        <li>Your violation of these Terms</li>
                        <li>Your misuse of the App</li>
                        <li>Your violation of any laws</li>
                        <li>Any content you share through the App</li>
                    </ul>
                </div>
            </div>
            
            <!-- Section 14 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>14. TERMINATION</h2>
                    <p>14.1 We may terminate your access if you violate these Terms.</p>
                    <p>14.2 You may terminate by uninstalling the App.</p>
                </div>
            </div>
            
            <!-- Section 15 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>15. MODIFICATIONS TO TERMS</h2>
                    <p>15.1 We may modify these Terms at any time.</p>
                    <p>15.2 Continued use after modifications constitutes acceptance.</p>
                    <p>15.3 We will notify users of significant changes.</p>
                </div>
            </div>
            
            <!-- Section 16 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>16. GOVERNING LAW</h2>
                    <p>16.1 These Terms are governed by laws of Pakistan.</p>
                    <p>16.2 Any disputes shall be resolved in courts of Pakistan.</p>
                </div>
            </div>
            
            <!-- Section 17 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>17. CONTACT INFORMATION</h2>
                    <p><strong style="color: var(--gold);">Developer:</strong> Abdus Salam</p>
                    <p><strong style="color: var(--gold);">Email:</strong> <span style="color: var(--accent);">absalamofficial@gmail.com</span></p>
                    <p><strong style="color: var(--gold);">Response Time:</strong> 3-5 business days</p>
                </div>
            </div>
            
            <!-- Section 18 -->
            <div class="section tilt-card">
                <div class="tilt-content">
                    <h2>18. USER ACKNOWLEDGEMENTS</h2>
                    <p>By using the App, you acknowledge that:</p>
                    <ul>
                        <li>This is a tool, not a religious authority</li>
                        <li>Final religious decisions rest with you</li>
                        <li>Technology has limitations in religious matters</li>
                        <li>You use the App at your own discretion</li>
                        <li>You will verify important matters with Islamic scholars</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <button class="copy-btn" onclick="copyTerms()">
                <i class="fas fa-copy"></i> Copy Terms & Conditions
            </button>
            <div class="copied-message" id="copiedMessage">
                <i class="fas fa-check-circle"></i> Copied to clipboard successfully!
            </div>
            
            <p>
                These Terms are also available at:<br>
                <a href="https://absalamofficial-cmyk.github.io/terms-conditions.html">
                    https://absalamofficial-cmyk.github.io/terms-conditions.html
                </a>
            </p>
        </div>
    </div>

    <script>
        // Hide loader after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 1000);
        });
        
        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.opacity = Math.random() * 0.5 + 0.1;
                particlesContainer.appendChild(particle);
            }
        }
        
        createParticles();
        
        // 3D Tilt Effect
        const container = document.getElementById('mainContainer');
        const sections = document.querySelectorAll('.tilt-card');
        
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            
            sections.forEach((section, index) => {
                const speed = (index + 1) * 0.5;
                section.style.transform = `rotateY(${x * speed}deg) rotateX(${y * speed}deg) translateZ(0)`;
            });
        });
        
        // Reset on mouse leave
        document.addEventListener('mouseleave', () => {
            sections.forEach(section => {
                section.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
            });
        });
        
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px) scale(0.95)';
            section.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            observer.observe(section);
        });
        
        // Copy function with enhanced animation
        function copyTerms() {
            const termsContent = document.getElementById('termsContent');
            const range = document.createRange();
            range.selectNode(termsContent);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            
            try {
                document.execCommand('copy');
                const message = document.getElementById('copiedMessage');
                const btn = document.querySelector('.copy-btn');
                
                message.style.display = 'block';
                btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                btn.style.background = 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)';
                
                // Create ripple effect
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255,255,255,0.6)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.left = '50%';
                ripple.style.top = '50%';
                ripple.style.width = '20px';
                ripple.style.height = '20px';
                ripple.style.marginLeft = '-10px';
                ripple.style.marginTop = '-10px';
                
                btn.style.position = 'relative';
                btn.style.overflow = 'hidden';
                btn.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
                
                setTimeout(() => {
                    message.style.display = 'none';
                    btn.innerHTML = '<i class="fas fa-copy"></i> Copy Terms & Conditions';
                    btn.style.background = '';
                }, 3000);
                
            } catch (err) {
                console.error('Failed to copy: ', err);
                alert('Failed to copy text. Please select and copy manually.');
            }
            
            window.getSelection().removeAllRanges();
        }
        
        // Add ripple animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Smooth scroll for content
        document.querySelector('.content').addEventListener('scroll', (e) => {
            const scrolled = e.target.scrollTop;
            const parallax = document.querySelector('.header');
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    </script>
</body>
</html>
