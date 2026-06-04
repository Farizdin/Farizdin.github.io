"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { fadeUp, premiumEase, slideFrom, staggerContainer, viewport } from "@/lib/motion";

const projects = [
  {
    title: "Customer Relationship Management System",
    eyebrow: "Final year project",
    description: "CRM system for Nawikh Edu Hub to organize customer records, inquiries, follow-ups, and service data into a clearer operational workflow.",
    image: "/student.png",
    tags: ["Web App", "CRM", "Database", "Workflow"],
    outcome: "Built for structured customer and service management.",
    github: "",
    demo: "https://nawikh-eduhub.vercel.app/",
    useIframe: true,
  },
  {
    title: "Web-Based System Development Projects",
    eyebrow: "Academic systems",
    description: "CRUD-based academic web systems with authentication, form handling, database storage, updates, deletion, and search functions.",
    image: "/login-demo.png",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript"],
    outcome: "Delivered full-stack web flows with persistent data.",
    github: "",
    demo: "http://lrgs.ftsm.ukm.my/users/a208965/myTrial/login.php",
    useIframe: false,
  },
  {
    title: "Amazon Wireless Earphones Data Engineering",
    eyebrow: "Python data project",
    description: "Scraping and cleaning pipeline that collected product prices, brands, ratings, reviews, delivery details, and URLs, then analyzed discount trends.",
    image: "/network.png",
    tags: ["Python", "BeautifulSoup", "Pandas", "Seaborn"],
    outcome: "Converted raw product listings into analysis-ready insights.",
    github: "",
    demo: "",
    useIframe: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="section-kicker mx-auto mb-4 w-max">
            Projects
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Case-study style work with practical outcomes.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-slate-600">
            A tighter project presentation that helps recruiters understand problem, stack, and value without digging.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={slideFrom(index % 2 === 0 ? "left" : "right")}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.34, ease: premiumEase }}
              className={`group premium-card overflow-hidden rounded-2xl ${
                index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[1.08fr_0.92fr]" : ""
              }`}
            >
              <div className={`relative overflow-hidden bg-slate-100 ${index === 0 ? "min-h-[22rem]" : "h-64"}`}>
                {project.useIframe && project.demo ? (
                  <div className="absolute inset-0 z-0 bg-slate-50 pointer-events-none">
                    <iframe
                      src={project.demo}
                      title={project.title}
                      className="absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50 border-none transition-transform duration-700 ease-out group-hover:scale-[0.52]"
                      loading="lazy"
                      tabIndex={-1}
                      aria-hidden="true"
                    />
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/38 via-slate-950/8 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-45" />
                <div className="absolute inset-x-4 bottom-4 translate-y-3 rounded-xl border border-white/50 bg-white/82 p-4 opacity-0 shadow-lg backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="flex items-center gap-2 text-sm font-bold text-slate-950">
                    {project.outcome}
                    <ArrowUpRight size={16} className="text-blue-600" />
                  </p>
                </div>
              </div>

              <div className="flex h-full flex-col p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">{project.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-600 transition-colors"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="mt-4 flex-grow text-sm leading-7 text-slate-600 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700"
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-950 transition-colors hover:border-blue-200 hover:bg-blue-50"
                    >
                      <ExternalLink size={16} />
                      Live demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-400">
                      Case details on request
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
