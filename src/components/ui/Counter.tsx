"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

export default function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const prefersReducedMotion = useReducedMotion();
  const count = useMotionValue(prefersReducedMotion ? value : 0);
  const rounded = useTransform(count, (latest) => {
    const formatted = latest.toFixed(decimals);
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: prefersReducedMotion ? 0 : 1.2,
      ease: [0.22, 1, 0.36, 1],
    });

    return controls.stop;
  }, [count, isInView, prefersReducedMotion, value]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
