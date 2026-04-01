import { useEffect, useRef, useState } from "react";

const ACHIEVEMENTS = [
  { id: "hao", icon: "🏆", text: "certified hao user", delay: 0 },
  { id: "dramatic", icon: "🎭", text: "dramatic since day one", delay: 150 },
  { id: "chai", icon: "☕", text: "chai therapy sessions pending", delay: 300 },
  {
    id: "chaotic",
    icon: "💫",
    text: "emotionally chaotic but approved",
    delay: 450,
  },
  {
    id: "mainchar",
    icon: "⭐",
    text: "main character energy detected",
    delay: 600,
  },
  { id: "reelmax", icon: "🎬", text: "Reel Maxer", delay: 750 },
  { id: "storymusic", icon: "🎵", text: "Story music master", delay: 900 },
  { id: "instafeed", icon: "📸", text: "Twin insta feed fr", delay: 1050 },
  {
    id: "elitemusic",
    icon: "🎧",
    text: "Elite music taste (same as me)",
    delay: 1200,
  },
  { id: "tension", icon: "😤", text: "boht tension leti hai", delay: 1350 },
];

export function TimelineSection() {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (let i = 0; i < ACHIEVEMENTS.length; i++) {
      const el = itemRefs.current[i];
      if (!el) continue;
      const idx = i;
      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setTimeout(() => {
              setVisible((prev) => new Set([...prev, idx]));
            }, ACHIEVEMENTS[idx].delay);
            obs.disconnect();
          }
        },
        { threshold: 0.3 },
      );
      obs.observe(el);
      observers.push(obs);
    }
    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);

  return (
    <section
      style={{ padding: "5rem 1.5rem", maxWidth: "700px", margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <h2
          className="font-serif gradient-text"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            fontWeight: 700,
            marginBottom: "0.5rem",
          }}
        >
          Twin Lore 📜
        </h2>
        <p style={{ color: "#C7B6FF", fontStyle: "italic" }}>
          the official achievements of a chaos twin
        </p>
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(180deg, #0351A3, #EE2689)",
            transform: "translateX(-50%)",
            opacity: 0.4,
          }}
        />

        {ACHIEVEMENTS.map((item, i) => {
          const isEven = i % 2 === 0;
          const isVis = visible.has(i);
          return (
            <div
              key={item.id}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              style={{
                display: "flex",
                justifyContent: isEven ? "flex-start" : "flex-end",
                marginBottom: "2rem",
                opacity: isVis ? 1 : 0,
                animation: isVis
                  ? `${isEven ? "slide-in-left" : "slide-in-right"} 0.7s ease-out forwards`
                  : "none",
              }}
            >
              <div
                className="glass-card"
                style={{
                  maxWidth: "calc(50% - 2rem)",
                  padding: "1.2rem 1.5rem",
                  borderRadius: "1rem",
                  background:
                    "linear-gradient(135deg, rgba(3,81,163,0.25), rgba(238,38,137,0.15))",
                  border: "1px solid rgba(199,182,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                }}
                data-ocid={`timeline.item.${i + 1}`}
              >
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>
                  {item.icon}
                </span>
                <p
                  style={{
                    color: "rgba(245,242,255,0.9)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
