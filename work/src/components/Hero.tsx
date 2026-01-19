import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import mountainWatermark from '../assets/e58ea71df2a23d756ec458151a63ee9d03f3bbf7.png';

export function Hero({ isDark }: { isDark: boolean }) {
  const [typedText, setTypedText] = useState('');
  const [opacity, setOpacity] = useState(1);
  const fullText = 'Electronics Student & Problem Solver';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Calculate opacity: 1 at top, fades to 0 as you scroll through first viewport
      const newOpacity = Math.max(0, 1 - scrollPosition / windowHeight);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden fixed inset-0 z-0"
      style={{ opacity }}
    >
      {/* Watermark Background Image */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${mountainWatermark})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-5xl md:text-7xl mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
        >
          Madhumitha M
        </motion.h1>
        <p className={`text-3xl md:text-5xl mb-4 min-h-[4rem] ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`}>
          {typedText}<span className="animate-pulse">|</span>
        </p>
        <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          Soldering my way through college one fried Arduino and questionable capacitor choice at a time.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className={`w-8 h-8 animate-bounce ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`} />
        </motion.div>
      </div>
    </section>
  );
}