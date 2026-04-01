import { toast } from "sonner";
import { FlipCard } from "./FlipCard";

interface Props {
  onSecretFound: (id: number) => void;
}

const CARDS = [
  {
    id: "past",
    label: "Past",
    icon: "🌀",
    title: "Chaos Twin",
    message:
      "you arrived in full chaos, had no idea wtf was gonna happen later on but it was fun and chaotic to chat with u especially the TND game we used to play",
  },
  {
    id: "present",
    label: "Present",
    icon: "⭐",
    title: "Main Character",
    message:
      "with time u turned into a friend i trust a lot, my topmost reel contender, twin, hg, story song guide, bully 24/7 gaslighter and most imp of all my sweet lil whimsical twin",
  },
  {
    id: "future",
    label: "Future",
    icon: "🔮",
    title: "Witch Era",
    message:
      "not sure what's gonna happen later on but i hope to see you on top in every field u try and be bold and brave af",
  },
];

export function TarotSection({ onSecretFound }: Props) {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <button
        type="button"
        onClick={() => {
          onSecretFound(1);
          toast("✨ secret twin lore discovered", {
            style: {
              background: "rgba(30,35,70,0.95)",
              color: "#C7B6FF",
              border: "1px solid rgba(199,182,255,0.3)",
              borderRadius: "1rem",
            },
          });
        }}
        data-ocid="tarot.secondary_button"
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "1rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.2rem",
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
        aria-label="secret item"
      >
        🎀
      </button>

      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <h2
          className="font-serif gradient-text"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            fontWeight: 700,
            marginBottom: "0.5rem",
          }}
        >
          ✨ Your Cards, Twin ✨
        </h2>
        <p style={{ color: "#C7B6FF", fontStyle: "italic" }}>
          Tap each card to reveal your reading
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem",
        }}
      >
        {CARDS.map((card) => (
          <FlipCard
            key={card.id}
            height="380px"
            front={
              <div
                className="glass-card"
                style={{
                  height: "100%",
                  borderRadius: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.5rem 1rem",
                  background:
                    "linear-gradient(160deg, rgba(3,81,163,0.4), rgba(58,42,138,0.5))",
                  border: "1px solid rgba(199,182,255,0.35)",
                  overflow: "hidden",
                }}
              >
                <p
                  style={{
                    color: "#C7B6FF",
                    letterSpacing: "0.15em",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  {card.label}
                </p>
                <img
                  src="/assets/generated/tarot-card-back.dim_300x500.png"
                  alt="tarot card"
                  style={{
                    width: "120px",
                    borderRadius: "0.8rem",
                    boxShadow: "0 4px 20px rgba(238,38,137,0.3)",
                  }}
                />
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.85rem",
                  }}
                >
                  tap to reveal
                </p>
              </div>
            }
            back={
              <div
                className="glass-card"
                style={{
                  height: "100%",
                  borderRadius: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.5rem",
                  background:
                    "linear-gradient(160deg, rgba(238,38,137,0.3), rgba(58,42,138,0.5))",
                  border: "1px solid rgba(238,38,137,0.4)",
                  gap: "1rem",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "2.5rem" }}>{card.icon}</span>
                <h3
                  className="font-serif gradient-text"
                  style={{ fontSize: "1.4rem", fontWeight: 700 }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "rgba(245,242,255,0.9)",
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    fontStyle: "italic",
                  }}
                >
                  {card.message}
                </p>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}
