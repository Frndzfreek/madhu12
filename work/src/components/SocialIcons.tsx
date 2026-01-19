import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/frndzfreek",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/madhumitha-m-11b5b92b8/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "https://www.madhu.mithaemails@gmail.com",
    label: "Email",
  },
];

interface SocialIconProps {
  social: (typeof socials)[0];
  mouseX: any;
  mouseY: any;
  isDark?: boolean;
}

function SocialIcon({
  social,
  mouseX,
  mouseY,
  isDark,
}: SocialIconProps) {
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
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  const distance = useTransform(
    [mouseX, mouseY],
    ([latestX, latestY]) => {
      const dx = latestX - position.x;
      const dy = latestY - position.y;
      return Math.sqrt(dx * dx + dy * dy);
    },
  );

  const scale = useTransform(distance, [0, 200], [2, 1]);
  const rotate = useTransform(distance, [0, 200], [360, 0]);

  const springConfig = { stiffness: 300, damping: 25 };
  const scaleSpring = useSpring(scale, springConfig);
  const rotateSpring = useSpring(rotate, springConfig);

  const Icon = social.icon;

  return (
    <motion.a
      ref={ref}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      style={{
        scale: scaleSpring,
        rotate: rotateSpring,
      }}
      className={`w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors border ${
        isDark
          ? "bg-slate-700/50 text-emerald-300 hover:text-emerald-200 border-slate-600"
          : "bg-white/50 text-emerald-600 hover:text-emerald-700 border-emerald-200"
      }`}
    >
      <Icon className="w-6 h-6" />
    </motion.a>
  );
}

export function SocialIcons({ isDark }: { isDark: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
      {socials.map((social, index) => (
        <SocialIcon
          key={index}
          social={social}
          mouseX={mouseX}
          mouseY={mouseY}
          isDark={isDark}
        />
      ))}
    </div>
  );
}