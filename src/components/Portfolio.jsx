import { motion } from 'framer-motion';

const projects = [
    { id: 1, title: 'Neon Cyberpunk', category: '3D Illustration', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, title: 'Organic Mech', category: 'Character Design', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop' },
    { id: 3, title: 'Void Ritual', category: 'VFX / CGI', img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1954&auto=format&fit=crop' },
    { id: 4, title: 'Glitch Dimension', category: '3D Environment', img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop' },
    { id: 5, title: 'Synthetic Soul', category: 'Character Design', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop' },
    { id: 6, title: 'Ether Oasis', category: 'Environment', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop' },
];

export default function Portfolio() {
    return (
        <section id="work" className="section" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '5rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', fontWeight: 900 }}>Selected Artifacts</h2>
                    <div style={{ width: '60px', height: '1px', background: '#fff', opacity: 0.3 }}></div>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
                    gap: '40px',
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="glass"
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                height: '500px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'grayscale(100%) brightness(0.7)',
                                    transition: '1s cubic-bezier(0.16, 1, 0.3, 1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.05)';
                                    e.target.style.filter = 'grayscale(0%) brightness(0.9)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                    e.target.style.filter = 'grayscale(100%) brightness(0.7)';
                                }}
                            />

                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '40px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                zIndex: 2
                            }}>
                                <span style={{
                                    color: 'rgba(255,255,255,0.6)',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    display: 'block',
                                    marginBottom: '10px'
                                }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
