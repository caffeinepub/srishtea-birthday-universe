import { useEffect, useState } from "react";

const COLORS = [
  "#EE2689",
  "#0351A3",
  "#C7B6FF",
  "#FFD700",
  "#FF69B4",
  "#87CEEB",
  "#DDA0DD",
];

interface Particle {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
  shape: "circle" | "rect";
}

interface ConfettiProps {
  trigger: number;
  count?: number;
}

export function Confetti({ trigger, count = 60 }: ConfettiProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (trigger === 0) return;
    const items: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 0.8,
      duration: 1.5 + Math.random() * 1.5,
      size: 6 + Math.random() * 8,
      shape: Math.random() > 0.5 ? "circle" : "rect",
    }));
    setParticles(items);
    const timer = setTimeout(() => setParticles([]), 4000);
    return () => clearTimeout(timer);
  }, [trigger, count]);

  if (particles.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9990,
        overflow: "hidden",
      }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: "-20px",
            width: `${p.size}px`,
            height: p.shape === "rect" ? `${p.size * 0.5}px` : `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            animation: `confetti-fall ${p.duration}s ease-in ${p.delay}s forwards`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
