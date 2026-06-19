"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  twinkle: number;
};

type SmokePuff = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  alpha: number;
  hue: number;
};

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    const particleCount = width < 768 ? 80 : 150;
    const smokeCount = width < 768 ? 54 : 96;
    const particles: Particle[] = [];
    const smoke: SmokePuff[] = [];
    let elapsed = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.82,
      vx: (Math.random() - 0.5) * 0.045,
      vy: (Math.random() - 0.5) * 0.035,
      radius: Math.random() * 1.25 + 0.35,
      alpha: Math.random() * 0.34 + 0.12,
      twinkle: Math.random() * Math.PI * 2,
    });

    const createSmokePuff = (): SmokePuff => ({
      x: Math.random() * width,
      y: height * (0.66 + Math.random() * 0.34),
      radius: Math.random() * (width < 768 ? 46 : 82) + (width < 768 ? 24 : 38),
      speed: Math.random() * 0.11 + 0.025,
      alpha: Math.random() * 0.14 + 0.08,
      hue: Math.random() > 0.45 ? 155 : 190,
    });

    resize();

    for (let i = 0; i < particleCount; i += 1) {
      particles.push(createParticle());
    }

    for (let i = 0; i < smokeCount; i += 1) {
      smoke.push(createSmokePuff());
    }

    const drawRocket = (centerX: number, centerY: number, scale: number, flamePulse: number) => {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.scale(scale, scale);

      const exhaust = ctx.createRadialGradient(0, 74, 5, 0, 74, 88 + flamePulse * 16);
      exhaust.addColorStop(0, "rgba(255, 255, 246, 0.92)");
      exhaust.addColorStop(0.18, "rgba(251, 191, 36, 0.56)");
      exhaust.addColorStop(0.48, "rgba(5, 150, 105, 0.28)");
      exhaust.addColorStop(1, "rgba(167, 243, 208, 0)");
      ctx.fillStyle = exhaust;
      ctx.beginPath();
      ctx.ellipse(0, 82, 30 + flamePulse * 9, 92 + flamePulse * 18, 0, 0, Math.PI * 2);
      ctx.fill();

      const flame = ctx.createLinearGradient(0, 28, 0, 116);
      flame.addColorStop(0, "rgba(255, 255, 255, 0.96)");
      flame.addColorStop(0.36, "rgba(255, 208, 93, 0.92)");
      flame.addColorStop(0.72, "rgba(249, 115, 22, 0.48)");
      flame.addColorStop(1, "rgba(5, 150, 105, 0)");
      ctx.fillStyle = flame;
      ctx.beginPath();
      ctx.moveTo(-13, 34);
      ctx.bezierCurveTo(-7, 70, -18, 92, 0, 122 + flamePulse * 18);
      ctx.bezierCurveTo(18, 92, 7, 70, 13, 34);
      ctx.closePath();
      ctx.fill();

      const body = ctx.createLinearGradient(-32, -86, 32, 58);
      body.addColorStop(0, "rgba(255, 255, 255, 0.92)");
      body.addColorStop(0.45, "rgba(186, 230, 253, 0.92)");
      body.addColorStop(1, "rgba(5, 150, 105, 0.62)");
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.moveTo(0, -98);
      ctx.bezierCurveTo(30, -58, 26, 8, 15, 42);
      ctx.lineTo(-15, 42);
      ctx.bezierCurveTo(-26, 8, -30, -58, 0, -98);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = "rgba(255, 255, 255, 0.62)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "rgba(255, 121, 68, 0.7)";
      ctx.beginPath();
      ctx.moveTo(-16, 20);
      ctx.lineTo(-38, 64);
      ctx.lineTo(-12, 48);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(16, 20);
      ctx.lineTo(38, 64);
      ctx.lineTo(12, 48);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "rgba(6, 13, 32, 0.58)";
      ctx.beginPath();
      ctx.arc(0, -32, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(180, 236, 255, 0.9)";
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.restore();
    };

    const drawCloudBank = () => {
      const baseY = height * 0.78;
      const cloudCount = width < 768 ? 10 : 18;

      for (let i = 0; i < cloudCount; i += 1) {
        const progress = i / (cloudCount - 1);
        const x = progress * width + Math.sin(elapsed * 0.28 + i) * 18;
        const y = baseY + Math.sin(i * 1.7) * 28;
        const radiusX = width / cloudCount * 1.45;
        const radiusY = height * (0.075 + (i % 3) * 0.012);
        const cloud = ctx.createRadialGradient(x, y, 0, x, y, radiusX);
        cloud.addColorStop(0, "rgba(255, 255, 255, 0.48)");
        cloud.addColorStop(0.42, "rgba(167, 243, 208, 0.38)");
        cloud.addColorStop(1, "rgba(14, 165, 233, 0)");

        ctx.fillStyle = cloud;
        ctx.beginPath();
        ctx.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      const centerGlow = ctx.createRadialGradient(width * 0.5, height * 0.77, 0, width * 0.5, height * 0.77, width * 0.34);
      centerGlow.addColorStop(0, "rgba(255, 255, 255, 0.68)");
      centerGlow.addColorStop(0.22, "rgba(251, 191, 36, 0.22)");
      centerGlow.addColorStop(0.5, "rgba(167, 243, 208, 0.36)");
      centerGlow.addColorStop(1, "rgba(240, 253, 244, 0)");
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);
    };

    const draw = () => {
      elapsed += reduceMotion ? 0 : 0.016;
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, Math.max(width, height) * 0.86);
      gradient.addColorStop(0, "rgba(167, 243, 208, 0.88)");
      gradient.addColorStop(0.34, "rgba(207, 250, 229, 0.94)");
      gradient.addColorStop(0.72, "rgba(220, 252, 231, 1)");
      gradient.addColorStop(1, "rgba(209, 250, 229, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const topShade = ctx.createLinearGradient(0, 0, 0, height);
      topShade.addColorStop(0, "rgba(220, 252, 231, 0.82)");
      topShade.addColorStop(0.34, "rgba(255, 255, 255, 0.22)");
      topShade.addColorStop(0.68, "rgba(5, 150, 105, 0.08)");
      topShade.addColorStop(1, "rgba(14, 165, 233, 0.22)");
      ctx.fillStyle = topShade;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        if (!reduceMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;
        }

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height * 0.82;
        if (particle.y > height * 0.86) particle.y = -20;

        ctx.beginPath();
        const alpha = particle.alpha * (0.56 + Math.sin(elapsed * 1.8 + particle.twinkle) * 0.34);
        ctx.fillStyle = `rgba(5, 150, 105, ${alpha})`;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < smoke.length; i += 1) {
        const puff = smoke[i];
        if (!reduceMotion) {
          puff.x += Math.sin(elapsed * 0.55 + i) * 0.07;
          puff.y -= puff.speed;
        }

        if (puff.y + puff.radius < height * 0.62) {
          smoke[i] = createSmokePuff();
          smoke[i].y = height + smoke[i].radius;
        }

        const cloud = ctx.createRadialGradient(puff.x, puff.y, 0, puff.x, puff.y, puff.radius);
        cloud.addColorStop(0, `hsla(${puff.hue}, 92%, 86%, ${puff.alpha})`);
        cloud.addColorStop(0.54, `hsla(${puff.hue}, 84%, 72%, ${puff.alpha * 0.46})`);
        cloud.addColorStop(1, `hsla(${puff.hue}, 74%, 60%, 0)`);
        ctx.fillStyle = cloud;
        ctx.beginPath();
        ctx.arc(puff.x, puff.y, puff.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      drawCloudBank();

      const launchCycle = reduceMotion ? 0.42 : (elapsed % 7.5) / 7.5;
      const launchEase = launchCycle < 0.72
        ? 1 - Math.pow(1 - launchCycle / 0.72, 3)
        : 1;
      const resetEase = launchCycle > 0.82 ? (launchCycle - 0.82) / 0.18 : 0;
      const rocketX = width * 0.5 + Math.sin(elapsed * 1.6) * 14;
      const rocketY = height * (0.82 - launchEase * 0.62 + resetEase * 0.62);
      const rocketScale = Math.max(0.58, Math.min(1, width / 1100)) * (1 - launchEase * 0.12);
      const flamePulse = 0.5 + Math.sin(elapsed * 9.5) * 0.5;
      const rocketAlpha = launchCycle > 0.76 ? Math.max(0, 1 - resetEase) : Math.min(1, launchCycle * 8);

      ctx.save();
      ctx.globalAlpha = rocketAlpha;
      drawRocket(rocketX, rocketY, rocketScale, flamePulse);
      ctx.restore();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />
      <div className="launch-vignette fixed inset-0 z-0 pointer-events-none" />
    </>
  );
}
