import { motion } from "motion/react";
import { useState } from "react";
import assemblyLogo from "../assets/57127c49f9dbc05901f0a93deb816db7660487fe.png";
import matlabLogo from "../assets/d3c83f31d4eba83a5ea45f5d819a12864604e0e9.png";
import rLogo from "../assets/3707aacfc5bc2ccb755982952fd847c27a9ae817.png";

// Programming language icon configurations with SVG logos
const programmingLanguages = [
  {
    name: "Python",
    color: "from-blue-500 to-yellow-400",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
      </svg>
    )
  },
  {
    name: "C/C++",
    color: "from-blue-600 to-blue-400",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.789v-.79h.79v-.79h.79v.79h.79z" />
      </svg>
    )
  },
  {
    name: "R",
    color: "from-blue-500 to-blue-600",
    logo: <img src={rLogo} alt="R" className="w-8 h-8 object-contain" />
  },
  {
    name: "Java",
    color: "from-red-500 to-orange-500",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
      </svg>
    )
  },
  {
    name: "Assembly (8051,8086,ARM)",
    color: "from-gray-600 to-gray-500",
    logo: <img src={assemblyLogo} alt="Assembly" className="w-8 h-8 object-contain" />
  },
  {
    name: "Embedded C",
    color: "from-teal-500 to-cyan-500",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11z" />
      </svg>
    )
  },
  {
    name: "HTML",
    color: "from-orange-500 to-red-500",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    )
  },
  {
    name: "Matlab",
    color: "from-orange-600 to-orange-400",
    logo: <img src={matlabLogo} alt="Matlab" className="w-8 h-8 object-contain" />
  },
  {
    name: "Verilog/SystemVerilog",
    color: "from-green-600 to-emerald-500",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0L1.5 6v12l10.5 6 10.5-6V6L12 0zm0 2.2L20.5 7v10l-8.5 4.8L3.5 17V7l8.5-4.8zM8 9v6h1.5v-4.5l1.5 3 1.5-3V15H14V9h-1.5L12 12l-0.5-3H8z" />
      </svg>
    )
  },
  {
    name: "VHDL",
    color: "from-green-500 to-lime-500",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0L1.5 6v12l10.5 6 10.5-6V6L12 0zm0 2.2L20.5 7v10l-8.5 4.8L3.5 17V7l8.5-4.8zM6 9l2.5 6h1.2l1.3-3.2 1.3 3.2h1.2L16 9h-1.3l-1.7 4.2L11.3 9h-1.1L8.5 13.2 6.7 9H6z" />
      </svg>
    )
  },
  {
    name: "TCL/Perl",
    color: "from-purple-500 to-indigo-500",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12.5 1.5c-.896 0-1.75.15-2.5.45v3.15c.7-.3 1.5-.45 2.5-.45 2.48 0 4.5 2.02 4.5 4.5s-2.02 4.5-4.5 4.5c-.65 0-1.25-.1-1.8-.3l-1.7 2.55c1.05.45 2.2.7 3.5.7 4.694 0 8.5-3.806 8.5-8.5S17.194 1.5 12.5 1.5zM9 5L1.5 15h3.6l4.5-6.75 1.35-2.025L9 5zm.9 8.1c-.9 0-1.65.75-1.65 1.65s.75 1.65 1.65 1.65h3.15v-3.3H9.9z" />
      </svg>
    )
  },
];

// EDA Tools icon configurations
const edaTools = [
  {
    name: "Synopsys Suite",
    color: "from-indigo-600 to-purple-600",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.48l7 3.51v7.33l-7-3.5V9.48zm16 0v7.33l-7 3.5v-7.33l7-3.5z" />
      </svg>
    )
  },
  {
    name: "Cadence Suite",
    color: "from-red-600 to-pink-600",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    )
  },
  {
    name: "QuestaSim (HDL sim)",
    color: "from-cyan-600 to-blue-600",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
      </svg>
    )
  },
  {
    name: "Xilinx Vivado",
    color: "from-red-500 to-orange-500",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    name: "Silvaco TCAD",
    color: "from-emerald-600 to-teal-600",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 9h16v2H4V9zm0 4h16v2H4v-2z" />
      </svg>
    )
  },
  {
    name: "Altium Designer",
    color: "from-yellow-600 to-amber-600",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
      </svg>
    )
  },
  {
    name: "KiCad",
    color: "from-blue-500 to-sky-500",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-2v2h2V4zM5 4v16h14V4H5zm12 14H7V6h10v12z" />
      </svg>
    )
  },
  {
    name: "LT Spice",
    color: "from-violet-600 to-purple-600",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M3 3v18h18V3H3zm8 16H5v-2h6v2zm0-4H5v-2h6v2zm0-4H5V9h6v2zm0-4H5V5h6v2zm10 12h-8V5h8v14z" />
      </svg>
    )
  },
];

// CAD Tools icon configurations
const cadTools = [
  {
    name: "Autodesk fusion 360",
    color: "from-orange-500 to-red-500",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.82 8 12 11.82 5.18 8 12 4.18zM5 9.48l6 3.51v6.83l-6-3.33V9.48zm8 10.34v-6.83l6-3.51v7.01l-6 3.33z" />
      </svg>
    )
  },
  {
    name: "SolidWorks",
    color: "from-red-600 to-rose-600",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2v-2zm0-10h2v8h-2V6z" />
      </svg>
    )
  },
  {
    name: "TinkerCAD",
    color: "from-cyan-500 to-blue-500",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75-3.54-1.96 2.36-1.96-2.36L4.5 12.29h15z" />
      </svg>
    )
  },
];

// Operating Systems icon configurations
const operatingSystems = [
  {
    name: "Ubuntu",
    color: "from-orange-600 to-orange-400",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 10.93a2.197 2.197 0 110 2.14 6.01 6.01 0 010-2.14zm-3.08 4.657a2.195 2.195 0 11-1.853-1.07 6.015 6.015 0 011.853 1.07zm0-7.174a2.195 2.195 0 11-1.853 1.07 6.015 6.015 0 011.853-1.07zM12 5.388c.666 0 1.302.104 1.904.296a2.833 2.833 0 00-.87 1.257 4.717 4.717 0 00-2.068 0 2.833 2.833 0 00-.87-1.257A6.616 6.616 0 0112 5.388zm-5.894 5.542a2.197 2.197 0 110 2.14 6.01 6.01 0 010-2.14zm3.08 4.657a2.195 2.195 0 111.853-1.07 6.015 6.015 0 01-1.853 1.07z" />
      </svg>
    )
  },
  {
    name: "ROS/ROS2 (Jazzy)",
    color: "from-blue-600 to-cyan-500",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    )
  },
  {
    name: "Windows",
    color: "from-blue-500 to-sky-400",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    )
  },
];

const skillsData = {
  "Programming Languages": programmingLanguages.map(lang => lang.name),
  "EDA Tools": edaTools.map(tool => tool.name),
  "CAD Tools": cadTools.map(tool => tool.name),
  "Core Domains": [
    "Embedded Systems",
    "Control Systems",
    "Digital VLSI Design",
    "Analog Circuits",
    "ROS & SLAM",
    "Computer Vision",
    "FPGA",
    "PCB Design",
    "Verilog/VHDL",
    "Motor Control",
    "CAD Modeling",
  ],
  "Operating Systems": operatingSystems.map(os => os.name),
};

// Generic Icon Component for all icon-based sections
type IconType = typeof programmingLanguages[0] | typeof edaTools[0] | typeof cadTools[0] | typeof operatingSystems[0];

function SkillIcon({ item, isDark }: { item: IconType, isDark: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ width: "80px" }}
      animate={{ width: isHovered ? "auto" : "80px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`relative overflow-hidden rounded-xl cursor-pointer ${isDark ? "bg-slate-800/50" : "bg-white/50"
        } backdrop-blur-sm border-2 ${isDark ? "border-slate-600/50" : "border-slate-300/50"
        } hover:border-emerald-400/50 transition-colors`}
    >
      <div className="flex items-center h-20 px-4 gap-3">
        {/* Icon Square */}
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
        >
          <div className="text-white w-8 h-8">
            {item.logo}
          </div>
        </motion.div>

        {/* Expanding Text */}
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            width: isHovered ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
          className={`whitespace-nowrap text-lg font-medium ${isDark ? "text-slate-200" : "text-slate-800"
            }`}
        >
          {item.name}
        </motion.span>
      </div>
    </motion.div>
  );
}

interface SkillsSectionProps {
  title: string;
  items: string[];
  isDark: boolean;
}

function SkillsSection({
  title,
  items,
  isDark,
}: SkillsSectionProps) {
  // Special rendering for icon-based sections - only Programming Languages
  if (title === "Programming Languages") {
    return (
      <div className="mb-12">
        <h3
          className={`text-3xl mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
        >
          {title}
        </h3>
        <div className="flex flex-wrap gap-4">
          {programmingLanguages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <SkillIcon item={lang} isDark={isDark} />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Default text list rendering for all other sections
  return (
    <div className="mb-12">
      <h3
        className={`text-3xl mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <span
              className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isDark ? "bg-slate-400" : "bg-slate-600"}`}
            />
            <span
              className={`text-lg ${isDark ? "text-slate-300" : "text-slate-700"}`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills({ isDark }: { isDark: boolean }) {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <h2
              className={`text-5xl mb-3 ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Skills
            </h2>
            <div className="w-16 h-1 bg-cyan-500" />
          </div>

          {Object.entries(skillsData).map(
            ([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
              >
                <SkillsSection
                  title={category}
                  items={items}
                  isDark={isDark}
                />
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}