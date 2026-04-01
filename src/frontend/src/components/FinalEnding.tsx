import { useEffect, useRef, useState } from "react";
import { Confetti } from "./Confetti";

const LINES = [
  { id: "line-1", text: "Every story has characters.", bold: false, delay: 0 },
  { id: "line-2", text: "Some stay for a chapter.", bold: false, delay: 600 },
  {
    id: "line-3",
    text: "Some stay for the whole plot.",
    bold: false,
    delay: 1200,
  },
  { id: "line-4", text: "And somehow\u2026", bold: false, delay: 1800 },
  { id: "line-5", text: "I found u nigga.", bold: true, delay: 2600 },
];

const SPARKLE_DATA = [
  { id: "sp-0", left: 15, top: 10, size: 0.6, delay: 0.5, dur: 2.0, sym: "✨" },
  { id: "sp-1", left: 35, top: 85, size: 0.9, delay: 2.1, dur: 2.8, sym: "⭐" },
  { id: "sp-2", left: 72, top: 30, size: 0.7, delay: 1.3, dur: 1.8, sym: "✦" },
  { id: "sp-3", left: 88, top: 55, size: 1.1, delay: 0.8, dur: 3.2, sym: "★" },
  { id: "sp-4", left: 5, top: 70, size: 0.8, delay: 2.8, dur: 2.4, sym: "💫" },
  { id: "sp-5", left: 42, top: 15, size: 0.6, delay: 1.7, dur: 1.6, sym: "✨" },
  { id: "sp-6", left: 60, top: 45, size: 1.0, delay: 0.3, dur: 2.6, sym: "⭐" },
  { id: "sp-7", left: 25, top: 90, size: 0.7, delay: 2.5, dur: 2.0, sym: "✦" },
  { id: "sp-8", left: 90, top: 25, size: 0.9, delay: 1.1, dur: 3.0, sym: "★" },
  { id: "sp-9", left: 8, top: 60, size: 1.2, delay: 0.6, dur: 2.2, sym: "💫" },
  { id: "sp-10", left: 55, top: 5, size: 0.6, delay: 2.2, dur: 1.7, sym: "✨" },
  {
    id: "sp-11",
    left: 78,
    top: 75,
    size: 0.8,
    delay: 1.5,
    dur: 2.9,
    sym: "⭐",
  },
  { id: "sp-12", left: 33, top: 40, size: 1.1, delay: 0.9, dur: 2.1, sym: "✦" },
  { id: "sp-13", left: 65, top: 20, size: 0.7, delay: 2.7, dur: 3.1, sym: "★" },
  {
    id: "sp-14",
    left: 12,
    top: 80,
    size: 0.9,
    delay: 1.0,
    dur: 2.3,
    sym: "💫",
  },
  {
    id: "sp-15",
    left: 48,
    top: 50,
    size: 0.6,
    delay: 0.4,
    dur: 1.9,
    sym: "✨",
  },
  {
    id: "sp-16",
    left: 82,
    top: 35,
    size: 1.0,
    delay: 2.0,
    dur: 2.7,
    sym: "⭐",
  },
  { id: "sp-17", left: 22, top: 65, size: 0.8, delay: 1.6, dur: 2.5, sym: "✦" },
  { id: "sp-18", left: 68, top: 10, size: 0.7, delay: 0.7, dur: 2.0, sym: "★" },
  {
    id: "sp-19",
    left: 95,
    top: 45,
    size: 0.9,
    delay: 2.3,
    dur: 3.3,
    sym: "💫",
  },
];

export function FinalEnding() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [visibleLines, setVisibleLines] = useState<Set<number>>(new Set());
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [showBonus, setShowBonus] = useState(false);
  const [confettiTrigger, setConfettiTrigger] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timers = LINES.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => new Set([...prev, i]));
      }, line.delay),
    );
    const btnTimer = setTimeout(() => setShowButton(true), 4000);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(btnTimer);
    };
  }, [started]);

  const handleHappyBirthdayClick = () => {
    const now = Date.now();
    const newCount = now - lastClickTime < 2000 ? clickCount + 1 : 1;
    setClickCount(newCount);
    setLastClickTime(now);
    if (newCount >= 3) {
      setShowBonus(true);
      setClickCount(0);
    }
  };

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 1.5rem",
        background:
          "linear-gradient(160deg, rgba(5,5,20,0.97) 0%, rgba(15,8,40,0.97) 50%, rgba(20,5,30,0.97) 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Confetti trigger={confettiTrigger} count={80} />

      {SPARKLE_DATA.map((sp) => (
        <div
          key={sp.id}
          className="animate-twinkle"
          style={{
            position: "absolute",
            left: `${sp.left}%`,
            top: `${sp.top}%`,
            fontSize: `${sp.size}rem`,
            animationDelay: `${sp.delay}s`,
            animationDuration: `${sp.dur}s`,
            pointerEvents: "none",
          }}
        >
          {sp.sym}
        </div>
      ))}

      <div style={{ maxWidth: "700px", zIndex: 1 }}>
        {LINES.map((line, i) => (
          <p
            key={line.id}
            style={{
              fontSize: line.bold
                ? "clamp(1.8rem, 6vw, 3rem)"
                : "clamp(1rem, 3vw, 1.4rem)",
              fontFamily: "'Playfair Display', serif",
              fontStyle: line.bold ? "normal" : "italic",
              fontWeight: line.bold ? 800 : 400,
              color: line.bold ? "transparent" : "rgba(245,242,255,0.85)",
              background: line.bold
                ? "linear-gradient(135deg, #EE2689, #0351A3)"
                : "none",
              WebkitBackgroundClip: line.bold ? "text" : undefined,
              backgroundClip: line.bold ? "text" : undefined,
              WebkitTextFillColor: line.bold ? "transparent" : undefined,
              marginBottom: line.bold ? "2.5rem" : "1rem",
              opacity: visibleLines.has(i) ? 1 : 0,
              transform: visibleLines.has(i)
                ? "translateY(0)"
                : "translateY(20px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              filter: line.bold
                ? "drop-shadow(0 0 20px rgba(238,38,137,0.5))"
                : "none",
            }}
          >
            {line.text}
          </p>
        ))}

        {showButton && (
          <button
            type="button"
            onClick={() => {
              setShowModal(true);
              setConfettiTrigger((c) => c + 1);
            }}
            data-ocid="ending.primary_button"
            style={{
              background: "linear-gradient(135deg, #EE2689, #0351A3)",
              color: "white",
              border: "none",
              borderRadius: "999px",
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(238,38,137,0.5)",
              transition: "transform 0.2s, box-shadow 0.2s",
              animation: "reveal-up 0.7s ease-out",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-3px) scale(1.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "";
            }}
          >
            One last thing\u2026 💌
          </button>
        )}
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 5000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.7)",
            padding: "1.5rem",
          }}
        >
          <div
            className="animate-scale-in"
            style={{
              background:
                "linear-gradient(160deg, rgba(20,10,50,0.97), rgba(30,5,40,0.97))",
              border: "1px solid rgba(238,38,137,0.4)",
              borderRadius: "2rem",
              padding: "clamp(2rem, 5vw, 3.5rem)",
              maxWidth: "600px",
              width: "100%",
              textAlign: "center",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0 0 60px rgba(238,38,137,0.3), 0 0 120px rgba(3,81,163,0.2)",
            }}
          >
            <p
              className="font-serif"
              style={{
                color: "rgba(245,242,255,0.85)",
                fontSize: "1.05rem",
                lineHeight: 1.85,
                fontStyle: "italic",
                marginBottom: "2rem",
              }}
            >
              <em
                style={{
                  color: "#C7B6FF",
                  fontStyle: "normal",
                  fontWeight: 600,
                }}
              >
                Srishtea,
              </em>
              <br />
              <br />
              It&apos;s rare to find someone you can be stupid, dramatic and
              real with.
              <br />
              <br />
              You make normal days interesting just by existing.
              <br />
              <br />I hope 18 treats you well.
              <br />
              <br />
              Even if it doesn&apos;t&hellip; you&apos;ll handle it with chaos
              and style.
            </p>

            <button
              type="button"
              onClick={handleHappyBirthdayClick}
              data-ocid="ending.submit_button"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "block",
                width: "100%",
                marginBottom: "1.5rem",
              }}
            >
              <span
                className="font-serif gradient-text"
                style={{
                  fontSize: "clamp(1.6rem, 5vw, 2.5rem)",
                  fontWeight: 800,
                  display: "block",
                  filter: "drop-shadow(0 0 20px rgba(238,38,137,0.5))",
                }}
              >
                Happy Birthday Twin ✨
              </span>
              {clickCount > 0 && (
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(199,182,255,0.5)",
                    display: "block",
                    marginTop: "0.3rem",
                  }}
                >
                  {clickCount === 1 ? "2 more..." : "1 more..."}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setShowModal(false)}
              data-ocid="ending.close_button"
              style={{
                background: "none",
                border: "1px solid rgba(199,182,255,0.4)",
                borderRadius: "999px",
                padding: "0.5rem 1.5rem",
                color: "rgba(199,182,255,0.7)",
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              close
            </button>
          </div>
        </div>
      )}

      {showBonus && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 6000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.65)",
            padding: "1.5rem",
          }}
        >
          <div
            className="glass-card animate-bounce-in"
            style={{
              background:
                "linear-gradient(160deg, rgba(238,38,137,0.25), rgba(3,81,163,0.3))",
              border: "1px solid rgba(238,38,137,0.5)",
              borderRadius: "2rem",
              padding: "2.5rem",
              maxWidth: "440px",
              width: "100%",
              textAlign: "center",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 50px rgba(238,38,137,0.4)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔓✨</div>
            <p
              style={{
                color: "#EE2689",
                fontWeight: 700,
                fontSize: "1rem",
                marginBottom: "0.5rem",
              }}
            >
              bonus message unlocked:
            </p>
            <p
              className="font-serif"
              style={{
                color: "rgba(245,242,255,0.95)",
                fontSize: "1.2rem",
                fontStyle: "italic",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              thanks for being my safe chaos.
            </p>
            <div style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
              ✨🎀✨
            </div>
            <button
              type="button"
              onClick={() => setShowBonus(false)}
              data-ocid="ending.confirm_button"
              style={{
                background: "linear-gradient(135deg, #EE2689, #0351A3)",
                color: "white",
                border: "none",
                borderRadius: "999px",
                padding: "0.7rem 2rem",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              ❤️
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
