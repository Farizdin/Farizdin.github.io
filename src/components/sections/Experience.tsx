"use client";

import { motion } from "framer-motion";
import { Code2, MonitorCog } from "lucide-react";
import { fadeUp, premiumEase, slideFrom, staggerContainer, viewport } from "@/lib/motion";

const experiences = [
  {
    role: "IT Support Technician",
    type: "Full Time",
    company: "Credential IT Services Sdn Bhd",
    duration: "March 2024 - Dec 2024",
    descriptions: [
      "Resolved an average of 5 daily IT support tickets across server, network, firewall, Microsoft, email, printer, and antivirus issues.",
      "Managed Active Directory and Windows Server access, shared folders, user accounts, and remote access configurations.",
      "Maintained client infrastructure including servers, firewalls, and Synology storage systems to support continuity.",
    ],
    icon: Code2,
  },
  {
    role: "Functional Consultant Assistant",
    type: "Intern",
    company: "CRT Insights Technologies",
    duration: "Sep 2023 - Feb 2024",
    descriptions: [
      "Provided first-level Microsoft Dynamics ERP support by replicating issues, assisting users, and coordinating fixes.",
      "Supported UAT and deployment activities by validating customized modules, bug fixes, and issue escalation.",
      "Created user guides and SOPs that helped reduce recurring support tickets by 40%.",
    ],
    icon: MonitorCog,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="section-kicker mx-auto mb-4 w-max">
            Experience
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Support-tested, product-aware experience.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-slate-600">
            A timeline focused on real user support, implementation work, and systems reliability.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-blue-100 md:left-1/2 md:block" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease: premiumEase }}
            className="absolute left-5 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-blue-500 via-sky-400 to-blue-100 md:left-1/2 md:block"
          />

          <div className="space-y-6 md:space-y-10">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isRight = index % 2 === 0;

              return (
                <motion.article
                  key={exp.role}
                  variants={slideFrom(isRight ? "right" : "left")}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className="relative grid gap-6 md:grid-cols-2"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.45, ease: premiumEase }}
                    className="absolute left-0 top-6 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 shadow-[0_12px_35px_rgba(37,99,235,0.18)] md:left-1/2 md:flex"
                  >
                    <Icon size={18} />
                  </motion.div>

                  <div className={`${isRight ? "md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="premium-card rounded-2xl p-6 sm:p-7"
                    >
                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-blue-700">
                          {exp.duration}
                        </span>
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-500">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{exp.role}</h3>
                      <p className="mt-2 font-semibold text-slate-500">{exp.company}</p>

                      <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-600">
                        {exp.descriptions.map((description) => (
                          <li key={description} className="flex gap-3">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                            <span>{description}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
