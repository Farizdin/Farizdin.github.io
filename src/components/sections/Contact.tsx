"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { fadeUp, premiumEase, staggerContainer, viewport } from "@/lib/motion";

const contactItems = [
  { icon: Mail, label: "Email", value: "farizizuddinazhar@gmail.com", href: "mailto:farizizuddinazhar@gmail.com" },
  { icon: Phone, label: "Phone", value: "+6019 7751814", href: "tel:+60197751814" },
  { icon: FaLinkedin, label: "LinkedIn", value: "farizizuddin", href: "https://www.linkedin.com/in/farizizuddin" },
  { icon: FaGithub, label: "GitHub", value: "Farizdin", href: "https://github.com/Farizdin" },
  { icon: MapPin, label: "Location", value: "Bangi, Selangor", href: "" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell pb-10">
      <div className="section-container max-w-5xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="contact-panel premium-card overflow-hidden rounded-2xl p-6 text-center sm:p-10 lg:p-14"
        >
          <motion.div variants={fadeUp} className="section-kicker mx-auto mb-5 w-max">
            Contact
          </motion.div>
          <motion.h2 variants={fadeUp} className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Let&apos;s build something clear, useful, and polished.
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I am seeking an internship from August 2026 until December 2026, with interest in software development, data, database work, and IT support.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.28, ease: premiumEase }}
              href="mailto:farizizuddinazhar@gmail.com"
              className="premium-button inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-blue-700 sm:w-auto"
            >
              <Send size={17} />
              Say hello
            </motion.a>

            <div className="flex gap-3">
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.96 }}
                href="tel:+60197751814"
                aria-label="Call Fariz"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                <Phone size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.96 }}
                href="https://www.linkedin.com/in/farizizuddin"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Fariz LinkedIn profile"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-blue-600 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-50"
              >
                <FaLinkedin size={21} />
              </motion.a>
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.96 }}
                href="https://github.com/Farizdin"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Fariz GitHub profile"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                <FaGithub size={21} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon className="mt-1 shrink-0 text-blue-600" size={19} />
                <div>
                  <p className="text-sm font-bold text-slate-950">{item.label}</p>
                  <p className="mt-1 break-words text-sm leading-6 text-slate-500">{item.value}</p>
                </div>
              </>
            );

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: premiumEase }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="premium-card flex h-full gap-3 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="premium-card flex h-full gap-3 rounded-2xl p-5">
                    {content}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="py-10 text-center text-sm text-slate-400"
        >
          <p>Designed and built with Next.js, Tailwind CSS, Framer Motion, and Lenis.</p>
          <p className="mt-2">Copyright {new Date().getFullYear()} Muhammad Fariz Izuddin Bin Azhar. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  );
}
