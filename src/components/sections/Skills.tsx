"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiGitlab,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { FaJava, FaMicrosoft, FaNetworkWired, FaServer, FaWindows } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { chipReveal, fadeUp, staggerContainer, viewport } from "@/lib/motion";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
  glow: string;
};

const skills: Skill[] = [
  { name: "Python", icon: SiPython, color: "#3776ab", glow: "rgba(55, 118, 171, 0.34)" },
  { name: "Java", icon: FaJava, color: "#f89820", glow: "rgba(248, 152, 32, 0.34)" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", glow: "rgba(247, 223, 30, 0.3)" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", glow: "rgba(49, 120, 198, 0.34)" },
  { name: "PHP", icon: SiPhp, color: "#777bb4", glow: "rgba(119, 123, 180, 0.34)" },
  { name: "React", icon: SiReact, color: "#61dafb", glow: "rgba(97, 218, 251, 0.3)" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", glow: "rgba(255, 255, 255, 0.22)" },
  { name: "Laravel", icon: SiLaravel, color: "#ff2d20", glow: "rgba(255, 45, 32, 0.34)" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1", glow: "rgba(68, 121, 161, 0.34)" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1", glow: "rgba(65, 105, 225, 0.34)" },
  { name: "Supabase", icon: SiSupabase, color: "#3ecf8e", glow: "rgba(62, 207, 142, 0.32)" },
  { name: "Pandas", icon: SiPandas, color: "#e70488", glow: "rgba(231, 4, 136, 0.32)" },
  { name: "BeautifulSoup", icon: FaServer, color: "#8bc34a", glow: "rgba(139, 195, 74, 0.3)" },
  { name: "Microsoft Dynamics ERP", icon: FaMicrosoft, color: "#00a4ef", glow: "rgba(0, 164, 239, 0.34)" },
  { name: "Active Directory", icon: FaMicrosoft, color: "#7fba00", glow: "rgba(127, 186, 0, 0.3)" },
  { name: "Windows Server", icon: FaWindows, color: "#00adef", glow: "rgba(0, 173, 239, 0.32)" },
  { name: "Networking", icon: FaNetworkWired, color: "#22c55e", glow: "rgba(34, 197, 94, 0.32)" },
  { name: "Docker", icon: SiDocker, color: "#2496ed", glow: "rgba(36, 150, 237, 0.34)" },
  { name: "GitLab", icon: SiGitlab, color: "#fc6d26", glow: "rgba(252, 109, 38, 0.34)" },
  { name: "VS Code", icon: VscVscode, color: "#007acc", glow: "rgba(0, 122, 204, 0.34)" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-container max-w-5xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl"
          >
            My Skills
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-blue-500"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4 md:gap-5"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            const style = {
              "--skill-color": skill.color,
              "--skill-glow": skill.glow,
            } as CSSProperties;

            return (
              <motion.div
                key={skill.name}
                variants={chipReveal}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={style}
                className="skill-chip cursor-default rounded-2xl border px-5 py-4 shadow-sm transition-shadow duration-300"
              >
                <span className="skill-chip-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="text-base font-bold sm:text-lg">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
