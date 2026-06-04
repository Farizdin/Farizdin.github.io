"use client";

import { motion } from "framer-motion";
import { Database, Globe2, Server } from "lucide-react";
import Counter from "@/components/ui/Counter";
import { fadeUp, softScale, staggerContainer, viewport } from "@/lib/motion";

const capabilities = [
  {
    icon: Globe2,
    label: "Web systems",
    desc: "CRUD workflows, CRM features, authentication, and database-backed interfaces.",
  },
  {
    icon: Database,
    label: "Data work",
    desc: "Python scraping, cleaning, analysis, SQL, PostgreSQL, MySQL, and Supabase.",
  },
  {
    icon: Server,
    label: "Support mindset",
    desc: "Hands-on server, network, ERP, Active Directory, and user support experience.",
  },
];

const stats = [
  { value: 3.71, decimals: 2, label: "Current CGPA" },
  { value: 5, suffix: "+", label: "Daily tickets resolved" },
  { value: 40, suffix: "%", label: "Ticket-volume reduction" },
  { value: 2, suffix: "+", label: "Years practical exposure" },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="section-kicker mx-auto mb-4 w-max">
            About
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Practical engineering with a polished product eye.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-slate-600">
            I am a Computer Science student based in Bangi, Selangor, focused on building reliable web systems and data-supported workflows. My background combines academic software projects with real IT support and ERP implementation experience.
          </motion.p>
        </motion.div>

        <motion.div
          variants={softScale}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="premium-card mt-14 overflow-hidden rounded-2xl p-5 sm:p-7 lg:p-8"
        >
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-200/80 bg-white/72 p-5">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  className="text-3xl font-semibold tracking-tight text-slate-950"
                />
                <p className="mt-2 text-sm font-semibold text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-slate-200/80 bg-white/68 p-6 transition-shadow duration-300 hover:shadow-[0_18px_46px_rgba(15,23,42,0.08)]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={21} />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-slate-950">{item.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/70 p-5 text-sm font-medium leading-6 text-slate-700">
            I am seeking an internship from August 2026 to December 2026, with interest in software development, data, database work, and IT support.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
