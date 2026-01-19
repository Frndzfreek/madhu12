import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ldrAutomationImage from "../assets/f6a1b2b207881aa8efad382e6090b7fab7e06ea0.png";
import obstacleDetectionImage from "../assets/aed4661ffaeefe304e6eac3c584079344b8802cb.png";
import portfolioImage from "../assets/e046239edfa56698b529a3278a88777621515b58.png";
import slamMappingImage from "../assets/c31eb28f330604a1fdaac207a6cbecbb8f1a8d43.png";
import surveillanceCarImage from "../assets/08a96e9fdb49bfff3a2626286afa95b244b86212.png";
import lineFollowingImage from "../assets/ea661812324719a45d2fa489769a8f140e4b7aca.png";
import roboSoccerImage from "../assets/2cd32d45cdc8cee681697ea6948ddefa01310ca0.png";

const projects = [
  {
    title: "LDR Based Night Automation",
    description:
      "To detect decreasing ambient light levels, automatically triggering a switch to turn on lamps or appliances when darkness falls.",
    image: ldrAutomationImage,
    link: "https://github.com/Frndzfreek/25ProjectsOfArduino/tree/main",
  },
  {
    title: "Obstacle_Detection",
    description:
      "Combining IR sensing and Ultrasonic distance measurement to provide precise, multi-layered collision avoidance for autonomous devices.",
    image: obstacleDetectionImage,
    link: "https://github.com/Frndzfreek/25ProjectsOfArduino/tree/main",
  },
  {
    title: "RISC-V Processor",
    description:
      "Implements a minimalist 4-bit RISC-V CPU that scales down the standard architecture to demonstrate core processor logic, including instruction decoding, ALU operations etc.",
    image: portfolioImage,
    link: "https://github.com/Frndzfreek/simple-riscv-processor",
  },
  {
    title: "2D INDOOR MAPPING USING YDLIDAR AND SLAM",
    description:
      "Using YD-LIDAR scanner and SLAM algorithms to autonomously generate precise 2D floor plans by simultaneously tracking and mapping its surroundings.",
    image: slamMappingImage,
    link: "https://github.com/Frndzfreek",
  },
  {
    title:
      "SURVEILLANCE ROBOT CAR USING ESP32-CAM AND WIFI CONTROLLED",
    description:
      "ESP32-CAM surveillance robo-car provides real-time video streaming and remote navigation via wireless monitoring and control through a web interface.",
    image: surveillanceCarImage,
    link: "https://github.com/Frndzfreek/Surveillance-RoboCar",
  },
  {
    title: "LINE FOLLOWING ROBOT",
    description:
      "Using IR sensors to detect and autonomously track a high-contrast path, detecting white line on a black surface, by adjusting its motor speeds.",
    image: lineFollowingImage,
    link: "https://github.com/Frndzfreek",
  },
  {
    title: "ROBO-SOCCER",
    description:
      "A remote-controlled robots designed to maneuver, dribble, and shoot a ball into a goal using high-torque motors and specialized kicking mechanisms.",
    image: roboSoccerImage,
    link: "https://github.com/Frndzfreek",
  },
];

export function Projects({ isDark }: { isDark: boolean }) {
  return (
    <section
      id="projects"
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
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className={`backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer ${isDark ? "bg-slate-800/50" : "bg-white/50"
                  }`}
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3
                    className={`text-2xl mb-3 ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`${isDark ? "text-slate-300" : "text-slate-700"}`}
                  >
                    {project.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}