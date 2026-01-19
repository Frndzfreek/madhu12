import { motion } from "motion/react";
import { GraduationCap, Award, Sparkles, Star, Zap } from "lucide-react";

const education = [
  {
    degree:
      "Bachelor of Technology in Electronics Engineering (VLSI Design & Technology)",
    institution: "Vellore Institute of Technology",
    period: "2024 - Present",
    description:
      "Focus on Electronics Engineering, VLSI Design, Robotics & Automation, and Human-Computer Interaction.",
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-500",
  },
  {
    degree: "High School",
    institution: "CSI Ewart Hr. Sec. School",
    period: "2022-2024",
    description:
      "President Of Rotary Interact Club, Merit Graduation, School 2nd in PCMB",
    icon: Award,
    color: "from-green-500 to-emerald-500",
  },
];

export function Education({ isDark }: { isDark: boolean }) {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Animated background decorations */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-emerald-500' : 'bg-emerald-300'
        }`}
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-teal-500' : 'bg-teal-300'
        }`}
      />

      {/* Floating sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
        >
          <Sparkles className={`w-6 h-6 ${isDark ? 'text-emerald-300' : 'text-emerald-500'}`} />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl mb-16 text-center bg-gradient-to-r ${
              isDark 
                ? 'from-emerald-300 via-green-300 to-emerald-300' 
                : 'from-emerald-600 via-green-600 to-emerald-600'
            } bg-clip-text text-transparent`}
          >
            Education Journey
          </motion.h2>

          <div className="space-y-12">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                  className={`backdrop-blur-md rounded-2xl p-8 md:p-10 border-2 relative overflow-hidden group ${
                    isDark 
                      ? 'bg-slate-800/60 border-slate-600/50 hover:border-emerald-400/50' 
                      : 'bg-white/60 border-emerald-200/50 hover:border-emerald-400/50'
                  } shadow-2xl transition-all duration-300`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Animated border glow - only on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

                  <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className={`text-xl md:text-2xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {edu.degree}
                        </h3>
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Star className={`w-6 h-6 ${isDark ? 'text-yellow-300' : 'text-yellow-500'} flex-shrink-0`} />
                        </motion.div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                        <p className={`text-base md:text-lg ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`}>
                          {edu.institution}
                        </p>
                      </div>
                      
                      <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        📅 {edu.period}
                      </p>
                      
                      <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}