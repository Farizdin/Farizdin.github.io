"use client";

import { useEffect, useState } from "react";
import { Briefcase, Code2, GraduationCap, Home, Mail, User } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", icon: Home, id: "home" },
  { name: "About", icon: User, id: "about" },
  { name: "Skills", icon: Code2, id: "skills" },
  { name: "Projects", icon: Briefcase, id: "projects" },
  { name: "Experience", icon: Briefcase, id: "experience" },
  { name: "Education", icon: GraduationCap, id: "education" },
  { name: "Contact", icon: Mail, id: "contact" },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight * 0.34;

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(navItems[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 88,
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0, filter: "blur(8px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-3 py-3 sm:px-5"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-3 py-2.5 transition-all duration-500 sm:px-4 ${
          isScrolled
            ? "border-white/70 bg-white/78 shadow-[0_18px_60px_rgba(15,23,42,0.1)] backdrop-blur-2xl"
            : "border-white/50 bg-white/48 shadow-[0_10px_40px_rgba(15,23,42,0.05)] backdrop-blur-xl"
        }`}
      >
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="shrink-0 rounded-xl px-2.5 py-2 text-left transition-colors hover:bg-white/65"
        >
          <span className="block text-sm font-bold tracking-tight text-slate-950">Fariz Izuddin</span>
        </button>

        <div className="flex min-w-0 flex-1 justify-end overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex h-10 shrink-0 items-center gap-2 rounded-xl px-3 text-sm font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-500 hover:bg-white/70 hover:text-slate-950"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={`Go to ${item.name}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute inset-0 -z-10 rounded-xl bg-blue-50 shadow-inner"
                      transition={{ type: "spring", stiffness: 320, damping: 34 }}
                    />
                  )}
                  <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="hidden md:inline">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
