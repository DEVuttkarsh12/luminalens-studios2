import { motion } from 'framer-motion';
import { Box, User, Image, Zap, Cpu, Globe } from 'lucide-react';

const services = [
    {
        title: '3D Design',
        desc: 'Creating high-fidelity 3D models and environments with obsessive attention to detail.',
        icon: <Box size={28} />
    },
    {
        title: 'Character Design',
        desc: 'Breathtaking character concepts and sculpting for films, games, and collectibles.',
        icon: <User size={28} />
    },
    {
        title: 'Illustrations',
        desc: 'Surreal and high-impact digital art that blends traditional techniques with CGI tech.',
        icon: <Image size={28} />
    },
    {
        title: 'VFX & CGI',
        desc: 'Cinematic visual effects and realistic simulations for premium brand experiences.',
        icon: <Zap size={28} />
    },
    {
        title: 'Tech Integration',
        desc: 'Merging 3D assets into interactive web and mobile applications seamlessly.',
        icon: <Cpu size={28} />
    },
    {
        title: 'Digital Worlds',
        desc: 'Full-scale environment building for the next generation of digital storytelling.',
        icon: <Globe size={28} />
    }
];

export default function Services() {
    return (
        <section id="services" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '6rem', textAlign: 'center' }}
                >
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.5em', textTransform: 'uppercase' }}>Capabilities</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginTop: '1rem', fontWeight: 900 }}>Pushing the Limits</h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '30px',
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass"
                            style={{
                                padding: '50px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '25px',
                                borderRadius: '8px'
                            }}
                            whileHover={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderColor: 'rgba(255, 255, 255, 0.15)'
                            }}
                        >
                            <div style={{
                                color: '#fff',
                                opacity: 0.8
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
