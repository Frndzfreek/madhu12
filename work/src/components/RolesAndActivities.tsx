import { motion } from "motion/react";
import {
  Users,
  Award,
  Lightbulb,
  Briefcase,
} from "lucide-react";

const roles = [
  {
    icon: Briefcase,
    title: "Summer Intern",
    organization: "VLSI Design Intern",
    period: "2024-2025",
    description:
      "Learning basic electronics and coding towards building and simulating nanoscale design chips",
  },
  {
    icon: Users,
    title: "Volunteer",
    organization: "TECHOVIT 25",
    description:
      "Co-ordinated and worked under registration committee handling external participants entry",
  },
  {
    icon: Award,
    title: "Event Coordinator",
    organization: "Annual Tech Fest",
    period: "2024 - 2025",
    description:
      "Coordinated and held Robo Soccer event with over 100+ participants.",
  },
  {
    icon: Lightbulb,
    title: "Club Member",
    organization: "Robotics Club",
    description:
      "Organised and held successful events like PCB Designing and Arduino rev-up2.",
  },
  
];

export function RolesAndActivities({
  isDark,
}: {
  isDark: boolean;
}) {
  return (
    <section
      id="roles"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-5xl mb-12 text-center ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Roles & Activities
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -20 : 20,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className={`backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-transform duration-300 ${
                    isDark ? "bg-slate-800/50" : "bg-white/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        isDark
                          ? "bg-emerald-500/20"
                          : "bg-emerald-100"
                      }`}
                    >
                      <role.icon
                        className={`w-6 h-6 ${
                          isDark
                            ? "text-emerald-300"
                            : "text-emerald-600"
                        }`}
                      />
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`text-2xl mb-1 ${isDark ? "text-white" : "text-slate-900"}`}
                      >
                        {role.title}
                      </h3>
                      <p
                        className={`mb-2 ${isDark ? "text-emerald-300" : "text-emerald-600"}`}
                      >
                        {role.organization}
                      </p>
                      <p
                        className={`text-sm mb-3 ${isDark ? "text-slate-400" : "text-slate-600"}`}
                      >
                        {role.period}
                      </p>
                      <p
                        className={`${isDark ? "text-slate-300" : "text-slate-700"}`}
                      >
                        {role.description}
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