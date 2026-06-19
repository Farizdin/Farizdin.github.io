"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, Download, MapPin, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, premiumEase, staggerContainer } from "@/lib/motion";

const quickFacts = ["Available Aug-Dec 2026", "Bangi, Selangor", "CGPA 3.71"];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative z-10 flex min-h-screen items-center pt-28 pb-20">
      <div className="section-container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="section-kicker mb-6"
          >
            <Sparkles size={14} />
            Computer Science Portfolio
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
          >
            Fariz Izuddin
            <span className="hero-title-gradient block pt-2">Computer Science student seeking software, data, and IT internship.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-emerald-900/72 sm:text-xl"
          >
            I build practical web systems, data workflows, and support-ready digital tools with a focus on clear interfaces, reliable operations, and real user needs.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {quickFacts.map((fact) => (
              <span
                key={fact}
                className="rounded-full border border-emerald-200/90 bg-white/72 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-[0_12px_34px_rgba(5,150,105,0.12)] backdrop-blur-xl transition-colors hover:border-emerald-300 hover:bg-emerald-50"
              >
                {fact}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <motion.button
              type="button"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.28, ease: premiumEase }}
              className="premium-button inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View projects
              <ArrowRight size={17} />
            </motion.button>
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.28, ease: premiumEase }}
              href="/FARIZ_IZUDDIN_RESUME.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/82 px-6 py-4 text-sm font-bold text-slate-950 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-50"
            >
              <Download size={17} />
              Download resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.86, delay: 0.24, ease: premiumEase }}
          className="relative mx-auto w-full max-w-[28rem]"
        >
          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, -10, 0], rotate: [0, -0.7, 0.5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="premium-card relative overflow-hidden rounded-2xl p-4"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
              <Image
                src="/Fariz.png"
                alt="Muhammad Fariz Izuddin Bin Azhar"
                fill
                className="object-cover object-top"
                priority
              />

            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                ["CGPA", "3.71"],
                ["Focus", "Web + Data"],
                ["Base", "Bangi, MY"],
                ["Status", "Open"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-slate-200/80 bg-white/78 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{label}</p>
                  <p className="mt-1 text-sm font-bold text-slate-950">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: premiumEase }}
            className="absolute -left-3 top-10 hidden rounded-xl border border-white/80 bg-white/86 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:block"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
              <MapPin size={16} className="text-blue-600" />
              Bangi, Selangor
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center text-slate-400 md:flex"
      >
        <span className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.22em]">Scroll</span>
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
