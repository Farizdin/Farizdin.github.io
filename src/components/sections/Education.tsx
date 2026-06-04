"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const educationItems = [
  {
    school: "Universiti Kebangsaan Malaysia",
    logo: "/UKM.png",
    qualification: "Bachelor of Computer Science with Honours",
    duration: "Oct 2024 - Present",
    metrics: ["CGPA 3.71", "MUET Band 4"],
    details: ["Computer Science", "Web Development", "Database Management", "Networking"],
  },
  {
    school: "Universiti Teknologi MARA",
    logo: "/uitm.png",
    qualification: "Diploma in Computer Science",
    duration: "Oct 2021 - Feb 2024",
    metrics: ["CGPA 3.74", "First Class Graduate"],
    details: ["Programming", "Database Systems", "Software Development", "Computer Science"],
  },
];

const awards = [
  {
    title: "Anugerah Dekan",
    detail: "Semester 1 Session 2025/2026, UKM",
  },
  {
    title: "CCNA 1 and CCNA 2",
    detail: "Cisco Networking Academy, 2024 - 2025",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="section-container max-w-5xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="section-kicker mx-auto mb-4 w-max">
            Education
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Academic foundation with consistent performance.
          </motion.h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {educationItems.map((item, index) => (
            <motion.article
              key={item.qualification}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="premium-card rounded-2xl p-6 sm:p-7"
            >
              <div className="mb-6 flex items-start justify-between gap-5">
                <div className="flex gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-2">
                    <Image src={item.logo} alt={`${item.school} logo`} fill className="object-contain p-2" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">{item.duration}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">{item.qualification}</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-500">{item.school}</p>
                  </div>
                </div>
                <GraduationCap className="hidden text-blue-100 sm:block" size={42} />
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {item.metrics.map((metric) => (
                  <span key={metric} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                    {metric}
                  </span>
                ))}
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {item.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/72 px-3 py-2 text-sm font-semibold text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {detail}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="premium-card mt-5 rounded-2xl p-6 sm:p-7"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Award size={19} />
            </div>
            <div>
              <h3 className="font-bold tracking-tight text-slate-950">Awards and certifications</h3>
              <p className="text-sm text-slate-500">Selected academic and networking milestones.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {awards.map((award) => (
              <div key={award.title} className="rounded-xl border border-slate-200 bg-white/72 p-4">
                <p className="flex items-center gap-2 font-bold text-slate-950">
                  <BookOpen size={16} className="text-blue-600" />
                  {award.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{award.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
