import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Work', href: '#work' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            zIndex: 1000,
            transition: 'var(--transition-smooth)',
            padding: scrolled ? '15px 0' : '30px 0',
            background: scrolled ? 'rgba(8, 8, 8, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ fontWeight: 900, fontSize: '1.4rem', color: 'var(--text-main)', letterSpacing: '2px' }}>
                    STUDIO<span style={{ color: '#888' }}>.X</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
                    <ul style={{ display: 'flex', gap: '35px', margin: 0 }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} style={{
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    color: scrolled ? 'var(--text-main)' : 'var(--text-muted)',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase'
                                }}
                                    onMouseEnter={(e) => e.target.style.color = '#fff'}
                                    onMouseLeave={(e) => e.target.style.color = scrolled ? '#fff' : '#888'}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button className="glow-btn" style={{ padding: '10px 25px', fontSize: '0.75rem' }}>
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
