import { motion } from "motion/react";
import { Download } from "lucide-react";
import hackathonImage from "../assets/377ef22a57b4c85258fca206c797adf757ff0269.png";

export function About({ isDark }: { isDark: boolean }) {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-5xl mb-12 text-center ${isDark ? "text-white" : "text-slate-900"}`}
          >
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={hackathonImage}
                alt="Hackathon event"
                className="w-full h-auto"
              />
            </div>

            <div
              className={`space-y-4 text-xl ${isDark ? "text-slate-200" : "text-slate-700"}`}
            >
              <p>
                Hii! I'm a Second-Year Electronics student with
                a passion for creating innovative solutions to
                real-world problems. My adventure started with
                simple copper strings of plastic coating and now
                towards building mobile robots.
              </p>
              <p>
                Off-screen: Forking repos I can't fix, surviving
                hackathons on energy drinks, and 'learning' new
                tech by breaking it first
              </p>
              <p>
                I'm also focusing on machine learning, data
                science and CV which I'm always excited to
                connect vision & motion worlds together and work
                on projects that make a difference.
              </p>

              <motion.a
                href="https://github.com/frndzfreek"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
              >
                <Download className="w-5 h-5" />
                View Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}