:root {
    --primary: #1e3c72;
    --secondary: #2a5298;
    --accent: #00d4ff;
    --gold: #ffd700;
    --hot-pink: #ff00ff;
    --neon-green: #00ff88;
    --purple: #9d00ff;
    --orange: #ff6600;
    --glass: rgba(255, 255, 255, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #1e3c72, #2d1b4e, #1a1a2e);
    background-size: 600% 600%;
    animation: gradientShift 10s ease infinite;
    color: #fff;
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    perspective: 1000px;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    25% { background-position: 50% 100%; }
    50% { background-position: 100% 50%; }
    75% { background-position: 50% 0%; }
    100% { background-position: 0% 50%; }
}

/* Floating Particles with Colors */
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
    width: 6px;
    height: 6px;
    border-radius: 50%;
    opacity: 0.6;
    animation: float 15s infinite linear;
    box-shadow: 0 0 15px currentColor;
}

.particle:nth-child(3n) {
    background: var(--accent);
    color: var(--accent);
    animation-duration: 12s;
}

.particle:nth-child(3n+1) {
    background: var(--hot-pink);
    color: var(--hot-pink);
    animation-duration: 18s;
}

.particle:nth-child(3n+2) {
    background: var(--neon-green);
    color: var(--neon-green);
    animation-duration: 15s;
}

@keyframes float {
    from {
        transform: translateY(100vh) rotate(0deg) scale(0);
        opacity: 0;
    }
    10% { 
        opacity: 0.8; 
        transform: scale(1);
    }
    90% { 
        opacity: 0.8; 
    }
    to {
        transform: translateY(-100vh) rotate(1080deg) scale(0.5);
        opacity: 0;
    }
}

/* 3D Container with Holographic Effect */
.container {
    max-width: 1000px;
    margin: 40px auto;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
    backdrop-filter: blur(30px) saturate(180%);
    border-radius: 30px;
    border: 2px solid transparent;
    background-clip: padding-box;
    overflow: hidden;
    position: relative;
    z-index: 1;
    transform-style: preserve-3d;
    animation: containerFloat 6s ease-in-out infinite;
    box-shadow: 
        0 25px 50px rgba(0,0,0,0.5),
        0 0 100px rgba(0,212,255,0.1),
        inset 0 0 0 1px rgba(255,255,255,0.2);
}

@keyframes containerFloat {
    0%, 100% { transform: translateY(0px) rotateX(0deg); }
    50% { transform: translateY(-10px) rotateX(2deg); }
}

/* Animated Rainbow Border */
.container::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(45deg, 
        #ff0000, #ff7300, #fffb00, #48ff00, 
        #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    background-size: 400%;
    z-index: -1;
    border-radius: 32px;
    animation: rainbowGlow 3s linear infinite;
    opacity: 0.8;
}

.container::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, 
        transparent 30%, 
        rgba(255,255,255,0.1) 50%, 
        transparent 70%);
    background-size: 200% 200%;
    animation: shine 3s infinite;
    pointer-events: none;
}

@keyframes rainbowGlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes shine {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

/* 3D Header with Depth */
.header {
    background: linear-gradient(135deg, 
        rgba(30,60,114,0.9) 0%, 
        rgba(42,82,152,0.8) 50%,
        rgba(157,0,255,0.3) 100%);
    color: white;
    padding: 60px 40px;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-bottom: 2px solid rgba(255,255,255,0.1);
    transform-style: preserve-3d;
    transform: translateZ(50px);
}

.header::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
        radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(45deg, transparent 48%, rgba(0,212,255,0.1) 50%, transparent 52%);
    background-size: 30px 30px, 100% 100%;
    opacity: 0.4;
    animation: gridMove 15s linear infinite, hologram 5s ease-in-out infinite;
}

@keyframes hologram {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
}

@keyframes gridMove {
    0% { transform: translate(0,0) rotate(0deg); }
    100% { transform: translate(30px,30px) rotate(5deg); }
}

/* 3D Text with Multiple Shadows */
.header h1 {
    font-size: 4rem;
    margin-bottom: 15px;
    font-weight: 900;
    background: linear-gradient(135deg, 
        #fff 0%, 
        var(--accent) 25%, 
        var(--gold) 50%, 
        var(--hot-pink) 75%, 
        #fff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: textShine 3s linear infinite, titleFloat 3s ease-in-out infinite;
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    letter-spacing: 3px;
    filter: drop-shadow(0 0 30px rgba(0,212,255,0.5));
    transform-style: preserve-3d;
}

.header h1::after {
    content: 'Terms & Conditions';
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background: linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.3) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: translateZ(-10px) translateY(5px);
    filter: blur(5px);
}

@keyframes textShine {
    to { background-position: 200% center; }
}

@keyframes titleFloat {
    0%, 100% { transform: translateY(0) rotateX(0); }
    50% { transform: translateY(-10px) rotateX(5deg); }
}

.header p {
    font-size: 1.3rem;
    opacity: 0.95;
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: var(--accent);
    text-shadow: 0 0 20px rgba(0,212,255,0.5);
    animation: glowPulse 2s ease-in-out infinite;
}

@keyframes glowPulse {
    0%, 100% { text-shadow: 0 0 20px rgba(0,212,255,0.5); }
    50% { text-shadow: 0 0 40px rgba(0,212,255,0.8), 0 0 60px rgba(0,212,255,0.4); }
}

.last-updated {
    opacity: 0.9;
    font-size: 1rem;
    margin-top: 20px;
    color: var(--gold);
    font-weight: 400;
    letter-spacing: 3px;
    animation: fadeInOut 3s ease-in-out infinite;
}

@keyframes fadeInOut {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
}

/* 3D Content Area */
.content {
    padding: 50px;
    max-height: 700px;
    overflow-y: auto;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
}

/* Glowing Scrollbar */
.content::-webkit-scrollbar {
    width: 12px;
}

.content::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.3);
    border-radius: 10px;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
}

.content::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--accent), var(--hot-pink), var(--gold));
    border-radius: 10px;
    border: 3px solid transparent;
    background-clip: content-box;
    animation: scrollbarGlow 2s ease-in-out infinite;
}

@keyframes scrollbarGlow {
    0%, 100% { box-shadow: 0 0 10px var(--accent); }
    50% { box-shadow: 0 0 20px var(--hot-pink); }
}

/* 3D Flip Cards for Sections */
.section {
    margin-bottom: 40px;
    padding: 35px;
    background: linear-gradient(135deg, 
        rgba(255,255,255,0.08) 0%, 
        rgba(255,255,255,0.03) 100%);
    border-radius: 25px;
    border: 1px solid rgba(255,255,255,0.1);
    transform-style: preserve-3d;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 10px 30px rgba(0,0,0,0.3),
        inset 0 1px 0 rgba(255,255,255,0.1);
    animation: sectionFloat 5s ease-in-out infinite;
    animation-delay: calc(var(--i, 0) * 0.5s);
}

.section:nth-child(1) { --i: 1; }
.section:nth-child(2) { --i: 2; }
.section:nth-child(3) { --i: 3; }
.section:nth-child(4) { --i: 4; }
.section:nth-child(5) { --i: 5; }

@keyframes sectionFloat {
    0%, 100% { transform: translateY(0) rotateX(0); }
    50% { transform: translateY(-8px) rotateX(2deg); }
}

/* Holographic Shine Effect */
.section::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg,
        transparent 30%,
        rgba(255,255,255,0.1) 50%,
        transparent 70%
    );
    transform: rotate(45deg);
    animation: holographicShine 4s infinite;
    pointer-events: none;
}

@keyframes holographicShine {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

/* Neon Border on Hover */
.section::after {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, var(--accent), var(--hot-pink), var(--gold), var(--neon-green));
    border-radius: 27px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s;
    filter: blur(10px);
}

.section:hover::after {
    opacity: 0.7;
    animation: borderRotate 3s linear infinite;
}

@keyframes borderRotate {
    0% { filter: blur(10px) hue-rotate(0deg); }
    100% { filter: blur(10px) hue-rotate(360deg); }
}

.section:hover {
    transform: translateY(-15px) rotateX(5deg) scale(1.03);
    background: rgba(255,255,255,0.12);
    box-shadow: 
        0 30px 60px rgba(0,0,0,0.4),
        0 0 40px rgba(0,212,255,0.2),
        inset 0 0 20px rgba(255,255,255,0.05);
    border-color: rgba(0,212,255,0.5);
}

/* 3D Heading with Icon */
.section h2 {
    color: var(--accent);
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 3px solid transparent;
    border-image: linear-gradient(90deg, var(--accent), var(--hot-pink), transparent) 1;
    font-size: 1.6rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    transform: translateZ(30px);
    text-shadow: 0 0 20px rgba(0,212,255,0.3);
}

.section h2::before {
    content: '◆';
    color: var(--gold);
    font-size: 1.4rem;
    animation: iconSpin 4s linear infinite, iconPulse 2s ease-in-out infinite;
    display: inline-block;
    text-shadow: 0 0 20px var(--gold);
}

@keyframes iconSpin {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
}

@keyframes iconPulse {
    0%, 100% { transform: scale(1) rotateY(0deg); }
    50% { transform: scale(1.3) rotateY(180deg); }
}

.section p, .section ul {
    margin-bottom: 18px;
    color: rgba(255,255,255,0.9);
    font-weight: 300;
    line-height: 1.9;
    font-size: 1.05rem;
    transform: translateZ(20px);
}

.section ul {
    padding-left: 0;
    list-style: none;
}

/* 3D List Items */
.section li {
    margin-bottom: 15px;
    position: relative;
    padding-left: 35px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
}

.section li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--hot-pink);
    font-weight: bold;
    font-size: 1.4rem;
    transition: all 0.3s;
    text-shadow: 0 0 10px var(--hot-pink);
    animation: arrowPulse 2s ease-in-out infinite;
}

@keyframes arrowPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.2); }
}

.section li:hover {
    color: var(--neon-green);
    transform: translateX(20px) translateZ(10px);
    text-shadow: 0 0 10px rgba(0,255,136,0.3);
}

.section li:hover::before {
    color: var(--neon-green);
    transform: translateX(10px) scale(1.3);
    text-shadow: 0 0 20px var(--neon-green);
}

/* 3D Important Note with Warning Glow */
.important-note {
    background: linear-gradient(135deg, 
        rgba(255,193,7,0.15) 0%, 
        rgba(255,0,255,0.1) 50%,
        rgba(255,215,0,0.1) 100%);
    border: 2px solid transparent;
    border-image: linear-gradient(45deg, var(--gold), var(--hot-pink), var(--gold)) 1;
    padding: 30px;
    margin: 30px 0;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 0 30px rgba(255,215,0,0.2),
        inset 0 0 20px rgba(255,215,0,0.05);
    animation: warningPulse 3s ease-in-out infinite;
    transform-style: preserve-3d;
    transform: translateZ(40px);
}

@keyframes warningPulse {
    0%, 100% { box-shadow: 0 0 30px rgba(255,215,0,0.2); }
    50% { box-shadow: 0 0 50px rgba(255,215,0,0.4), 0 0 70px rgba(255,0,255,0.2); }
}

.important-note::before {
    content: '⚠';
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 4rem;
    opacity: 0.15;
    animation: warningSpin 10s linear infinite, warningGlow 2s ease-in-out infinite;
    text-shadow: 0 0 30px var(--gold);
}

@keyframes warningSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes warningGlow {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
}

.important-note p {
    color: #fff;
    font-weight: 400;
    position: relative;
    z-index: 1;
}

.important-note strong {
    color: var(--gold);
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(255,215,0,0.5);
    font-weight: 700;
}

/* 3D Footer with Depth */
.footer {
    background: linear-gradient(180deg, 
        rgba(0,0,0,0.4) 0%, 
        rgba(30,60,114,0.4) 100%);
    padding: 50px;
    text-align: center;
    border-top: 2px solid rgba(255,255,255,0.1);
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(30px);
    box-shadow: 0 -10px 30px rgba(0,0,0,0.3);
}

/* 3D Button with Press Effect */
.copy-btn {
    background: linear-gradient(135deg, 
        var(--primary) 0%, 
        var(--secondary) 50%,
        var(--purple) 100%);
    color: white;
    border: none;
    padding: 18px 50px;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 15px;
    margin: 0 auto;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 10px 30px rgba(30,60,114,0.5),
        0 0 0 0 rgba(0,212,255,0.7);
    text-transform: uppercase;
    letter-spacing: 3px;
    transform-style: preserve-3d;
    transform: translateZ(50px);
    animation: buttonFloat 3s ease-in-out infinite;
}

@keyframes buttonFloat {
    0%, 100% { transform: translateZ(50px) translateY(0); }
    50% { transform: translateZ(60px) translateY(-5px); }
}

/* Button Shine Effect */
.copy-btn::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg,
        transparent 30%,
        rgba(255,255,255,0.3) 50%,
        transparent 70%
    );
    transform: rotate(45deg);
    animation: buttonShine 3s infinite;
}

@keyframes buttonShine {
    0% { transform: translateX(-100%) rotate(45deg); }
    100% { transform: translateX(100%) rotate(45deg); }
}

/* Ripple Effect Container */
.copy-btn::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50px;
    background: linear-gradient(135deg, var(--accent), var(--neon-green));
    opacity: 0;
    transition: opacity 0.3s;
    z-index: -1;
}

.copy-btn:hover {
    transform: translateZ(70px) translateY(-5px) scale(1.1);
    box-shadow: 
        0 20px 50px rgba(0,212,255,0.5),
        0 0 60px rgba(0,212,255,0.3),
        0 0 0 10px rgba(0,212,255,0.1);
    letter-spacing: 5px;
}

.copy-btn:hover::after {
    opacity: 1;
    animation: ripple 1s ease-out;
}

.copy-btn:active {
    transform: translateZ(30px) translateY(2px) scale(0.95);
    box-shadow: 
        0 5px 15px rgba(0,212,255,0.4),
        inset 0 3px 10px rgba(0,0,0,0.3);
}

.copied-message {
    color: var(--neon-green);
    margin-top: 20px;
    display: none;
    font-weight: 700;
    font-size: 1.1rem;
    animation: successPop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    text-shadow: 0 0 20px rgba(0,255,136,0.8);
    transform: translateZ(40px);
}

@keyframes successPop {
    0% { 
        opacity: 0; 
        transform: scale(0) translateZ(40px); 
    }
    50% { 
        transform: scale(1.2) translateZ(40px); 
    }
    100% { 
        opacity: 1; 
        transform: scale(1) translateZ(40px); 
    }
}

.footer p {
    margin-top: 30px;
    color: rgba(255,255,255,0.7);
    font-size: 1rem;
    transform: translateZ(20px);
}

.footer a {
    color: var(--accent);
    text-decoration: none;
    position: relative;
    transition: all 0.3s;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(0,212,255,0.3);
}

.footer a::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--gold), var(--hot-pink));
    transition: width 0.3s;
    box-shadow: 0 0 10px var(--gold);
}

.footer a:hover {
    color: var(--gold);
    text-shadow: 0 0 20px rgba(255,215,0,0.8);
    letter-spacing: 1px;
}

.footer a:hover::after {
    width: 100%;
}

/* 3D Loading Animation */
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0f0c29, #302b63);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s, visibility 0.5s;
    perspective: 1000px;
}

.loader.hidden {
    opacity: 0;
    visibility: hidden;
}

.loader-circle {
    width: 100px;
    height: 100px;
    border: 5px solid transparent;
    border-top-color: var(--accent);
    border-right-color: var(--hot-pink);
    border-bottom-color: var(--gold);
    border-radius: 50%;
    animation: spin3D 2s linear infinite;
    box-shadow: 
        0 0 30px var(--accent),
        inset 0 0 30px rgba(0,212,255,0.2);
    position: relative;
}

.loader-circle::before {
    content: '';
    position: absolute;
    inset: -10px;
    border: 3px solid transparent;
    border-top-color: var(--neon-green);
    border-radius: 50%;
    animation: spin3D 3s linear infinite reverse;
}

@keyframes spin3D {
    0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
    100% { transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg); }
}

/* Glitch Effect for Special Text */
.glitch {
    position: relative;
    animation: glitch 3s infinite;
}

@keyframes glitch {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
}

/* Responsive 3D */
@media (max-width: 768px) {
    .container {
        margin: 20px;
        border-radius: 20px;
        animation: none;
    }
    
    .header {
        padding: 40px 20px;
        transform: translateZ(30px);
    }
    
    .header h1 {
        font-size: 2.5rem;
    }
    
    .content {
        padding: 30px 20px;
        max-height: 500px;
    }
    
    .section {
        padding: 25px;
        margin-bottom: 30px;
    }
    
    .section h2 {
        font-size: 1.3rem;
    }
    
    .copy-btn {
        padding: 15px 30px;
        font-size: 1rem;
    }
}

/* Tilt Effect Classes */
.tilt-card {
    transform-style: preserve-3d;
    transform: perspective(1000px);
}

.tilt-content {
    transform: translateZ(30px);
}

/* Particle Burst Animation */
@keyframes particleBurst {
    0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
    100% {
        transform: translate(var(--tx), var(--ty)) scale(0);
        opacity: 0;
    }
}

.burst-particle {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    pointer-events: none;
    animation: particleBurst 1s ease-out forwards;
}
