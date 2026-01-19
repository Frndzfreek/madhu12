import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

export function Contact({ isDark }: { isDark: boolean }) {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className={`text-5xl mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Find me</h2>
          
          {/* Social Media Icons Row */}
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/frndzfreek"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-full transition-transform hover:scale-110 ${
                isDark ? 'bg-slate-800/50' : 'bg-white/50'
              }`}
            >
              <Github className={`w-12 h-12 ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`} />
            </a>
            <a
              href="https://www.linkedin.com/in/madhumitha-m-2a8a262b6/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-full transition-transform hover:scale-110 ${
                isDark ? 'bg-slate-800/50' : 'bg-white/50'
              }`}
            >
              <Linkedin className={`w-12 h-12 ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`} />
            </a>
            <a
              href="mailto:madhumithamuthusamy@gmail.com"
              className={`p-6 rounded-full transition-transform hover:scale-110 ${
                isDark ? 'bg-slate-800/50' : 'bg-white/50'
              }`}
            >
              <Mail className={`w-12 h-12 ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}