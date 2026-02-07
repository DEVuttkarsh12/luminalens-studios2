import { motion } from 'framer-motion';

export default function PixelReveal({ onFinished }) {
    // Define grid dimensions
    const columns = 20;
    const rows = 12;
    const totalBlocks = columns * rows;

    // Animation variants for the blocks
    const blockVariants = {
        initial: { opacity: 1 },
        reveal: (i) => {
            const x = i % columns;
            const y = Math.floor(i / columns);
            const centerX = (columns - 1) / 2;
            const centerY = (rows - 1) / 2;

            // Calculate distance from center
            const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
            const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));

            return {
                opacity: 0,
                transition: {
                    duration: 0.3,
                    // Delay based on distance from center for a radial reveal
                    delay: (distance / maxDistance) * 0.5 + Math.random() * 0.15,
                    ease: "easeOut"
                }
            };
        }
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 6000,
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                pointerEvents: 'none'
            }}
        >
            {[...Array(totalBlocks)].map((_, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    variants={blockVariants}
                    initial="initial"
                    animate="reveal"
                    onAnimationComplete={() => {
                        // Only trigger onFinished once, for the last potential block
                        if (i === totalBlocks - 1) {
                            setTimeout(onFinished, 500);
                        }
                    }}
                    style={{
                        background: '#080808', // Match the main background color
                        width: '101%', // Slight overlap to prevent gaps
                        height: '101%'
                    }}
                />
            ))}
        </div>
    );
}
