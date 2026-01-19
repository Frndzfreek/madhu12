import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Home, User, GraduationCap, Code, Briefcase, Mail, Moon, Sun } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: User, label: 'About', href: '#about' },
  { icon: GraduationCap, label: 'Education', href: '#education' },
  { icon: Code, label: 'Skills', href: '#skills' },
  { icon: Briefcase, label: 'Projects', href: '#projects' },
  { icon: Mail, label: 'Contact', href: '#contact' },
];

interface NavItemProps {
  item: typeof navItems[0];
  mouseX: any;
  mouseY: any;
  isDark?: boolean;
}

function NavItem({ item, mouseX, mouseY, isDark }: NavItemProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  const distance = useTransform([mouseX, mouseY], ([latestX, latestY]) => {
    const dx = latestX - position.x;
    const dy = latestY - position.y;
    return Math.sqrt(dx * dx + dy * dy);
  });

  const scale = useTransform(distance, [0, 150], [1.3, 1]);
  const y = useTransform(distance, [0, 150], [-8, 0]);

  const springConfig = { stiffness: 300, damping: 25 };
  const scaleSpring = useSpring(scale, springConfig);
  const ySpring = useSpring(y, springConfig);

  const Icon = item.icon;

  return (
    <motion.a
      ref={ref}
      href={item.href}
      style={{
        scale: scaleSpring,
        y: ySpring,
      }}
      className="flex flex-col items-center gap-2 group"
    >
      <div className={`w-12 h-12 backdrop-blur-sm rounded-xl flex items-center justify-center transition-colors border ${
        isDark 
          ? 'bg-slate-700/50 text-emerald-300 group-hover:text-emerald-200 border-slate-600'
          : 'bg-white/50 text-emerald-600 group-hover:text-emerald-700 border-emerald-200'
      }`}>
        <Icon className="w-6 h-6" />
      </div>
      <span className={`text-sm transition-colors ${
        isDark 
          ? 'text-slate-300 group-hover:text-white'
          : 'text-slate-700 group-hover:text-slate-900'
      }`}>
        {item.label}
      </span>
    </motion.a>
  );
}

export function Navigation({ isDark, setIsDark }: { isDark: boolean; setIsDark: (value: boolean) => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors ${
      isDark 
        ? 'bg-slate-900/80 border-slate-700'
        : 'bg-white/80 border-emerald-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className={`text-3xl tracking-wide ${isDark ? 'text-white' : 'text-slate-900'}`}>
            MADHUMITHA M
          </h1>
          <div className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} mouseX={mouseX} mouseY={mouseY} isDark={isDark} />
            ))}
            <motion.button
              onClick={() => setIsDark(!isDark)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-xl backdrop-blur-sm border transition-colors ${
                isDark
                  ? 'bg-slate-700/50 border-slate-600 text-yellow-300 hover:text-yellow-200'
                  : 'bg-white/50 border-emerald-200 text-emerald-600 hover:text-emerald-700'
              }`}
            >
              {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}