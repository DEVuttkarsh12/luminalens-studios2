import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Neon Cyberpunk',
        category: '3D Illustration',
        description: 'A deep dive into futuristic urban landscapes, blending neon aesthetics with complex structural modeling for a premium sci-fi feel.',
        img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Organic Mech',
        category: 'Character Design',
        description: 'Exploring the intersection of biology and machinery. This project focuses on intricate detailing and realistic surface textures of synthetic organisms.',
        img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Void Ritual',
        category: 'VFX / CGI',
        description: 'A cinematic visual effect sequence capturing the essence of dark energy and abstract motion through custom particle systems.',
        img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1954&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Glitch Dimension',
        category: '3D Environment',
        description: 'Breaking the laws of virtual reality with distorted geometries and digital anomalies, creating an immersive, unstable environment.',
        img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop'
    },
];

export default function Portfolio() {
    return (
        <section id="work" className="section" style={{ background: 'transparent', paddingBottom: '150px' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '8rem', textAlign: 'center' }}
                >
                    <span style={{
                        color: 'var(--primary-glow)',
                        fontWeight: 700,
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        Latest Work
                    </span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', fontWeight: 900 }}>Selected Artifacts</h2>
                    <div style={{ width: '40px', height: '2px', background: 'var(--accent-gradient)', margin: '0 auto' }}></div>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '160px' }}>
                    {projects.map((project, index) => {
                        const isEven = index % 2 !== 0;
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                style={{
                                    display: 'flex',
                                    flexDirection: isEven ? 'row-reverse' : 'row',
                                    alignItems: 'center',
                                    gap: '80px',
                                    justifyContent: 'space-between'
                                }}
                                className="project-row"
                            >
                                {/* Image Side */}
                                <div style={{ flex: '1.2', position: 'relative' }}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.4 }}
                                        className="glass"
                                        style={{
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            aspectRatio: '16/10',
                                            border: '1px solid var(--glass-border)',
                                            boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
                                        }}
                                    >
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                filter: 'grayscale(20%) brightness(0.9)',
                                                transition: '0.5s ease'
                                            }}
                                        />
                                    </motion.div>

                                    {/* Numbering Background */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-40px',
                                        [isEven ? 'right' : 'left']: '-40px',
                                        fontSize: '8rem',
                                        fontWeight: 900,
                                        opacity: 0.03,
                                        zIndex: -1,
                                        color: '#fff'
                                    }}>
                                        0{index + 1}
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div style={{
                                    flex: '1',
                                    textAlign: isEven ? 'right' : 'left',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: isEven ? 'flex-end' : 'flex-start'
                                }}>
                                    <span style={{
                                        color: 'var(--text-muted)',
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.2em',
                                        marginBottom: '1rem'
                                    }}>
                                        {project.category}
                                    </span>
                                    <h3 style={{
                                        fontSize: 'clamp(2rem, 3vw, 3rem)',
                                        fontWeight: 800,
                                        marginBottom: '2rem',
                                        lineHeight: 1.1
                                    }}>
                                        {project.title}
                                    </h3>
                                    <p style={{
                                        color: 'var(--text-muted)',
                                        fontSize: '1.1rem',
                                        lineHeight: 1.6,
                                        marginBottom: '2.5rem',
                                        maxWidth: '450px'
                                    }}>
                                        {project.description}
                                    </p>
                                    <button style={{
                                        borderBottom: '1px solid var(--primary-glow)',
                                        paddingBottom: '5px',
                                        color: 'var(--text-main)',
                                        fontWeight: 600,
                                        letterSpacing: '0.1em',
                                        fontSize: '0.9rem',
                                        transition: '0.3s ease'
                                    }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--primary-glow)'}
                                        onMouseLeave={(e) => e.target.style.color = 'var(--text-main)'}
                                    >
                                        VIEW PROJECT
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @media (max-width: 992px) {
                    .project-row {
                        flex-direction: column !important;
                        gap: 40px !important;
                        text-align: left !important;
                        align-items: flex-start !important;
                    }
                    .project-row div[style*="text-align: right"] {
                        text-align: left !important;
                        align-items: flex-start !important;
                    }
                }
            `}</style>
        </section>
    );
}
