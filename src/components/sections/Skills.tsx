"use client";

import { motion } from "framer-motion";
import { chipReveal, fadeUp, staggerContainer, viewport } from "@/lib/motion";

const skills = [
  { name: "Python", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { name: "Java", color: "bg-orange-50 text-orange-700 border-orange-100" },
  { name: "JavaScript", color: "bg-yellow-50 text-yellow-700 border-yellow-100" },
  { name: "TypeScript", color: "bg-sky-50 text-sky-700 border-sky-100" },
  { name: "PHP", color: "bg-indigo-50 text-indigo-700 border-indigo-100" },
  { name: "React", color: "bg-cyan-50 text-cyan-700 border-cyan-100" },
  { name: "Next.js", color: "bg-slate-50 text-slate-700 border-slate-200" },
  { name: "Laravel", color: "bg-red-50 text-red-700 border-red-100" },
  { name: "MySQL", color: "bg-blue-50 text-blue-800 border-blue-100" },
  { name: "PostgreSQL", color: "bg-cyan-50 text-cyan-700 border-cyan-100" },
  { name: "Supabase", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  { name: "Pandas", color: "bg-purple-50 text-purple-700 border-purple-100" },
  { name: "BeautifulSoup", color: "bg-lime-50 text-lime-700 border-lime-100" },
  { name: "Microsoft Dynamics ERP", color: "bg-slate-50 text-slate-700 border-slate-200" },
  { name: "Active Directory", color: "bg-zinc-50 text-zinc-800 border-zinc-200" },
  { name: "Windows Server", color: "bg-slate-50 text-slate-700 border-slate-200" },
  { name: "Networking", color: "bg-green-50 text-green-700 border-green-100" },
  { name: "Docker", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { name: "GitLab", color: "bg-orange-50 text-orange-700 border-orange-100" },
  { name: "VS Code", color: "bg-sky-50 text-sky-700 border-sky-100" },
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
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={chipReveal}
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`premium-card cursor-default rounded-2xl border px-6 py-4 shadow-sm transition-shadow duration-300 hover:shadow-[0_18px_44px_rgba(15,23,42,0.1)] ${skill.color}`}
            >
              <span className="text-base font-bold sm:text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
