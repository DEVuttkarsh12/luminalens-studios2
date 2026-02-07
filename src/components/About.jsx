import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="section" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '80px',
                    alignItems: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{ color: 'var(--primary-glow)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>The Mission</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginTop: '1rem', marginBottom: '2rem' }}>Crafting Virtual <br />Realities.</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                            We are a collective of designers, sculptors, and tech pioneers dedicated to the art of the 3rd dimension. We don't just create assets; we build immersive narratives that blur the line between the physical and the digital.
                        </p>
                        <div style={{ display: 'flex', gap: '30px', marginTop: '40px' }}>
                            <div>
                                <h4 style={{ fontSize: '2.5rem', color: 'var(--primary-glow)' }}>10k+</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Inr Project Scale</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '2.5rem', color: 'var(--primary-glow)' }}>100+</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Assets Created</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '2.5rem', color: 'var(--primary-glow)' }}>5+</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Global Awards</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            width: '100%',
                            height: '500px',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop"
                                alt="Studio Team"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(45deg, rgba(0, 242, 255, 0.2), transparent)'
                            }}></div>
                        </div>

                        {/* Decorative element */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '200px',
                            height: '200px',
                            border: '2px solid var(--primary-glow)',
                            borderRadius: '30px',
                            zIndex: 1,
                            opacity: 0.3
                        }}></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
