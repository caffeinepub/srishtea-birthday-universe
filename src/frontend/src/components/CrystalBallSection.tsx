import { useState } from "react";
import { toast } from "sonner";

interface Props {
  onSecretFound: (id: number) => void;
}

export function CrystalBallSection({ onSecretFound }: Props) {
  const [shaking, setShaking] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    if (revealed) {
      setRevealed(false);
      return;
    }
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
      setRevealed(true);
    }, 500);
  };

  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        maxWidth: "700px",
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Hidden secret: tarot icon */}
      <button
        type="button"
        onClick={() => {
          onSecretFound(3);
          toast("✨ secret twin lore discovered", {
            style: {
              background: "rgba(30,35,70,0.95)",
              color: "#C7B6FF",
              border: "1px solid rgba(199,182,255,0.3)",
              borderRadius: "1rem",
            },
          });
        }}
        data-ocid="crystal.secondary_button"
        style={{
          position: "absolute",
          top: "3rem",
          right: "1.5rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.1rem",
          opacity: 0.35,
          transition: "opacity 0.3s",
          padding: "0.5rem",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = "0.35";
        }}
        aria-label="secret tarot"
      >
        🔮
      </button>

      <h2
        className="font-serif gradient-text"
        style={{
          fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}
      >
        Consult the Crystal Ball 🔮
      </h2>
      <p
        style={{ color: "#C7B6FF", fontStyle: "italic", marginBottom: "3rem" }}
      >
        ask the universe what it holds
      </p>

      <button
        type="button"
        onClick={handleClick}
        data-ocid="crystal.primary_button"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "block",
          margin: "0 auto 2rem",
        }}
        aria-label="Click the crystal ball"
      >
        <img
          src="/assets/generated/crystal-ball-transparent.dim_400x400.png"
          alt="crystal ball"
          className={`animate-glow-pulse ${shaking ? "animate-shake" : ""}`}
          style={{
            width: "min(280px, 65vw)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform =
              "scale(1.06)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "";
          }}
        />
      </button>

      {revealed && (
        <div
          className="animate-fade-in glass-card"
          style={{
            borderRadius: "1.2rem",
            padding: "1.8rem 2rem",
            background:
              "linear-gradient(135deg, rgba(3,81,163,0.3), rgba(238,38,137,0.2))",
            border: "1px solid rgba(199,182,255,0.4)",
          }}
        >
          <p
            className="font-serif"
            style={{
              color: "rgba(245,242,255,0.95)",
              fontSize: "1.15rem",
              fontStyle: "italic",
              lineHeight: 1.7,
            }}
          >
            "this year gonna bring u all the happiness, good chaos and sweet
            memories and yea u gonna pass the accounts exam (i hope to see it
            all happening)"
          </p>
          <p
            style={{
              color: "rgba(199,182,255,0.6)",
              fontSize: "0.8rem",
              marginTop: "1rem",
            }}
          >
            tap again to reset
          </p>
        </div>
      )}

      {!revealed && (
        <p style={{ color: "rgba(199,182,255,0.7)", fontSize: "0.9rem" }}>
          tap the crystal to see your reading
        </p>
      )}
    </section>
  );
}
