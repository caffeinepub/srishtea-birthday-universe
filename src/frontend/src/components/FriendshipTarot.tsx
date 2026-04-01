import { useState } from "react";
import { FlipCard } from "./FlipCard";

const CARDS = [
  {
    id: "fool",
    name: "The Fool",
    symbol: "🌼",
    message:
      "Boundless curiosity. Someone who leaps before they look \u2014 not out of stupidity, but out of trust.",
  },
  {
    id: "star",
    name: "The Star",
    symbol: "🌟",
    message:
      "Hope and light in the dark. The one who makes things feel possible just by being there.",
  },
  {
    id: "magician",
    name: "The Magician",
    symbol: "✨",
    message:
      "Turns nothing into something. Has all the tools, always finds a way.",
  },
];

export function FriendshipTarot() {
  const [flippedCount, setFlippedCount] = useState(0);

  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2
        className="font-serif gradient-text"
        style={{
          fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}
      >
        Secret Friendship Tarot ✨
      </h2>
      <p
        style={{
          color: "#C7B6FF",
          fontStyle: "italic",
          marginBottom: "3rem",
          fontSize: "1.05rem",
        }}
      >
        Draw your cards...
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem",
          marginBottom: "3rem",
        }}
      >
        {CARDS.map((card) => (
          <FlipCard
            key={card.id}
            height="360px"
            onFlip={() => setFlippedCount((c) => c + 1)}
            front={
              <div
                style={{
                  height: "100%",
                  borderRadius: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(160deg, rgba(30,35,70,0.7), rgba(58,42,138,0.8))",
                  border: "1px solid rgba(199,182,255,0.3)",
                  gap: "1rem",
                  backdropFilter: "blur(10px)",
                }}
              >
                <img
                  src="/assets/generated/tarot-card-back.dim_300x500.png"
                  alt="tarot back"
                  style={{
                    width: "110px",
                    borderRadius: "0.8rem",
                    boxShadow: "0 4px 20px rgba(3,81,163,0.4)",
                  }}
                />
                <p
                  style={{
                    color: "rgba(199,182,255,0.7)",
                    fontSize: "0.85rem",
                  }}
                >
                  tap to draw
                </p>
              </div>
            }
            back={
              <div
                style={{
                  height: "100%",
                  borderRadius: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.5rem",
                  background:
                    "linear-gradient(160deg, rgba(238,38,137,0.25), rgba(3,81,163,0.35))",
                  border: "1px solid rgba(238,38,137,0.4)",
                  gap: "0.8rem",
                  backdropFilter: "blur(12px)",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "2.2rem" }}>{card.symbol}</span>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {card.name}
                </h3>
                <p
                  style={{
                    color: "rgba(245,242,255,0.85)",
                    fontSize: "0.9rem",
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

      {flippedCount >= 3 && (
        <div
          className="animate-reveal-up"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "2.5rem",
            borderRadius: "1.5rem",
            background:
              "linear-gradient(160deg, rgba(238,38,137,0.2), rgba(3,81,163,0.25))",
            border: "1px solid rgba(238,38,137,0.35)",
            backdropFilter: "blur(14px)",
          }}
        >
          <p
            style={{
              color: "#EE2689",
              fontWeight: 700,
              fontSize: "1.1rem",
              marginBottom: "0.5rem",
            }}
          >
            Plot twist:
          </p>
          <p
            style={{
              color: "#C7B6FF",
              fontStyle: "italic",
              fontSize: "1.05rem",
              marginBottom: "1rem",
            }}
          >
            All three cards were the same person.
          </p>
          <p
            className="font-serif gradient-text"
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}
          >
            Your twin 🔮
          </p>
          <p
            style={{
              color: "rgba(238,38,137,0.85)",
              fontSize: "0.85rem",
              marginBottom: "1.5rem",
            }}
          >
            hao confirmed ✓
          </p>
          <p
            className="font-serif"
            style={{
              color: "rgba(245,242,255,0.85)",
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Some people are temporary chapters. Some become part of the story.
          </p>
        </div>
      )}
    </section>
  );
}
