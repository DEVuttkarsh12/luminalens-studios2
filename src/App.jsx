import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Offerings from './components/Offerings';
import Contact, { Footer } from './components/Contact';
import Background from './components/Background';
import Loader from './components/Loader';
import IntroVideo from './components/IntroVideo';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  const [phase, setPhase] = useState('loading'); // 'loading', 'video', 'site'

  return (
    <main>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {phase === 'loading' && (
          <Loader key="loader" onFinished={() => setPhase('video')} />
        )}
        {phase === 'video' && (
          <IntroVideo key="video" onFinished={() => setPhase('site')} />
        )}
        {phase === 'site' && (
          <motion.div
            key="content"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              filter: { duration: 1, ease: "easeInOut" }
            }}
            style={{ width: '100%' }}
          >
            <Background />
            <Navbar />
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Offerings />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
