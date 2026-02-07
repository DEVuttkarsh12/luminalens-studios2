import { motion } from 'framer-motion';
import HeroScene from './HeroScene';

export default function Hero() {
    return (
        <section id="home" className="section" style={{ height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <HeroScene />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span style={{
                        color: 'var(--text-muted)',
                        fontWeight: 700,
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                        marginBottom: '1.5rem',
                        display: 'block'
                    }}>
                        Creative Agency
                    </span>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 10vw, 7.5rem)',
                        lineHeight: 0.85,
                        marginBottom: '2.5rem',
                        maxWidth: '1000px',
                        fontWeight: 900
                    }}>
                        Your dream. <br />
                        <span style={{ color: 'var(--text-main)' }}>Our canvas.</span>
                    </h1>

                    <p style={{
                        color: 'var(--text-muted)',
                        maxWidth: '650px',
                        fontSize: '1.1rem',
                        marginBottom: '3.5rem',
                        lineHeight: 1.7,
                        letterSpacing: '0.01em'
                    }}>
                        We’re a multimedia design company working across 3D, motion, video, digital, and social. Everything we create comes from one place and one mindset, so your brand stays clear and consistent wherever it shows up.
                    </p>

                    <div style={{ display: 'flex', gap: '30px' }}>
                        <button className="glow-btn">View Projects</button>
                        <button style={{
                            border: '1px solid var(--glass-border)',
                            padding: '14px 36px',
                            borderRadius: '4px',
                            color: 'var(--text-main)',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontSize: '0.9rem'
                        }}
                            onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                        >
                            Our Services
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Minimal Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50.1%',
                    transform: 'translateX(-50%)',
                    width: '1px',
                    height: '50px',
                    background: 'linear-gradient(to bottom, #fff, transparent)',
                    opacity: 0.2
                }}
            />
        </section>
    );
}
