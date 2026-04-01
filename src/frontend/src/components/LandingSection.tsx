import { useEffect, useState } from "react";

interface LandingProps {
  onEnter: () => void;
  onSecretFound: (id: number) => void;
}

const NON_SECRET_FLOATERS = [
  {
    id: "star1",
    emoji: "⭐",
    style: {
      top: "15%",
      right: "8%",
      animationDelay: "0.5s",
      animationDuration: "5s",
      fontSize: "1.5rem",
    },
  },
  {
    id: "heart1",
    emoji: "❤️",
    style: {
      top: "25%",
      left: "12%",
      animationDelay: "1s",
      animationDuration: "3.5s",
      fontSize: "1.2rem",
    },
  },
  {
    id: "sparkle1",
    emoji: "✨",
    style: {
      top: "20%",
      right: "20%",
      animationDelay: "0.3s",
      animationDuration: "4.5s",
      fontSize: "1.8rem",
    },
  },
  {
    id: "moon",
    emoji: "🌙",
    style: {
      top: "40%",
      left: "3%",
      animationDelay: "1.5s",
      animationDuration: "6s",
      fontSize: "1.4rem",
    },
  },
  {
    id: "star2",
    emoji: "★",
    style: {
      top: "60%",
      right: "5%",
      animationDelay: "0.8s",
      animationDuration: "4s",
      fontSize: "1.3rem",
    },
  },
  {
    id: "heart2",
    emoji: "💖",
    style: {
      top: "70%",
      left: "8%",
      animationDelay: "2s",
      animationDuration: "5s",
      fontSize: "1.1rem",
    },
  },
  {
    id: "sparkle2",
    emoji: "✨",
    style: {
      bottom: "20%",
      right: "12%",
      animationDelay: "0.6s",
      animationDuration: "3.8s",
      fontSize: "1.6rem",
    },
  },
  {
    id: "star3",
    emoji: "☆",
    style: {
      top: "35%",
      right: "30%",
      animationDelay: "1.2s",
      animationDuration: "4.2s",
      fontSize: "1rem",
    },
  },
  {
    id: "kiss",
    emoji: "💋",
    style: {
      bottom: "35%",
      left: "20%",
      animationDelay: "0.9s",
      animationDuration: "5.5s",
      fontSize: "1.2rem",
    },
  },
  {
    id: "crystal",
    emoji: "🔮",
    style: {
      top: "10%",
      left: "40%",
      animationDelay: "1.8s",
      animationDuration: "4.8s",
      fontSize: "1.4rem",
    },
  },
  {
    id: "staralt",
    emoji: "✦",
    style: {
      bottom: "15%",
      right: "25%",
      animationDelay: "0.4s",
      animationDuration: "3.6s",
      fontSize: "1rem",
    },
  },
  {
    id: "flower",
    emoji: "🌸",
    style: {
      top: "55%",
      right: "40%",
      animationDelay: "2.2s",
      animationDuration: "5.2s",
      fontSize: "1.1rem",
    },
  },
  {
    id: "star5",
    emoji: "★",
    style: {
      bottom: "10%",
      left: "35%",
      animationDelay: "1.4s",
      animationDuration: "4.6s",
      fontSize: "1.3rem",
    },
  },
  {
    id: "purple",
    emoji: "💜",
    style: {
      top: "80%",
      right: "45%",
      animationDelay: "0.7s",
      animationDuration: "3.9s",
      fontSize: "1rem",
    },
  },
];

export function LandingSection({ onEnter, onSecretFound }: LandingProps) {
  const [showHao, setShowHao] = useState(false);
  const [flipping, setFlipping] = useState(false);
  const [bowEgg, setBowEgg] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowHao(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const handleEnter = () => {
    setFlipping(true);
    setTimeout(onEnter, 720);
  };

  return (
    <div
      className={flipping ? "landing-flip-out" : ""}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background:
          "linear-gradient(160deg, #0351A3 0%, #3a2a8a 40%, #9b2a7a 70%, #EE2689 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {NON_SECRET_FLOATERS.map((f) => (
        <div
          key={f.id}
          className="animate-float-x"
          style={{
            position: "absolute",
            pointerEvents: "none",
            userSelect: "none",
            ...f.style,
          }}
        >
          {f.emoji}
        </div>
      ))}

      <button
        type="button"
        className="animate-float-x"
        onClick={() => setBowEgg(true)}
        data-ocid="landing.open_modal_button"
        aria-label="secret bow"
        style={{
          position: "absolute",
          background: "none",
          border: "none",
          cursor: "pointer",
          userSelect: "none",
          padding: 0,
          top: "8%",
          left: "5%",
          animationDelay: "0s",
          animationDuration: "4s",
          fontSize: "2rem",
          color: "inherit",
        }}
      >
        🎀
      </button>

      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          maxWidth: "700px",
          zIndex: 1,
        }}
      >
        <div
          style={{ fontSize: "3rem", marginBottom: "0.5rem" }}
          className="animate-float-slow"
        >
          ✨🎀✨
        </div>
        <h1
          className="font-serif gradient-text"
          style={{
            fontSize: "clamp(2.2rem, 7vw, 3.8rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "1rem",
          }}
        >
          Happy 18th Birthday Srishtea ✨
        </h1>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            color: "#C7B6FF",
            marginBottom: "1.5rem",
          }}
        >
          Twin, welcome to level 18
        </p>

        {showHao && (
          <p
            className="animate-fade-in"
            style={{
              fontSize: "0.9rem",
              color: "rgba(238,38,137,0.85)",
              marginBottom: "1.5rem",
              letterSpacing: "0.1em",
            }}
          >
            hao detected 👀
          </p>
        )}

        <button
          type="button"
          onClick={handleEnter}
          data-ocid="landing.primary_button"
          style={{
            background: "linear-gradient(135deg, #EE2689, #0351A3)",
            color: "white",
            border: "none",
            borderRadius: "999px",
            padding: "1rem 2.5rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow:
              "0 0 24px rgba(238,38,137,0.5), 0 4px 20px rgba(0,0,0,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(-3px) scale(1.04)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 0 36px rgba(238,38,137,0.7), 0 8px 30px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 0 24px rgba(238,38,137,0.5), 0 4px 20px rgba(0,0,0,0.3)";
          }}
        >
          Enter your birthday universe ✨
        </button>
      </div>

      {bowEgg && (
        <div
          className="animate-scale-in"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              background: "rgba(245,242,255,0.2)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: "1.5rem",
              padding: "2.5rem",
              textAlign: "center",
              maxWidth: "400px",
              margin: "1rem",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎀</div>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.3rem",
                color: "white",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              hao hao hao 🎀
            </p>
            <p
              style={{
                color: "#C7B6FF",
                fontSize: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              secret twin message unlocked
            </p>
            <button
              type="button"
              onClick={() => {
                setBowEgg(false);
                onSecretFound(0);
              }}
              data-ocid="landing.close_button"
              style={{
                background: "linear-gradient(135deg,#EE2689,#0351A3)",
                color: "white",
                border: "none",
                borderRadius: "999px",
                padding: "0.6rem 1.8rem",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              close ✨
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
