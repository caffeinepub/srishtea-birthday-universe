import { useState } from "react";
import { Confetti } from "./Confetti";

const STATS = [
  { label: "Chaos", value: 90, color: "#EE2689" },
  { label: "Kindness", value: 85, color: "#C7B6FF" },
  { label: "Drama", value: 100, color: "#FF69B4" },
  { label: "Loyalty", value: 95, color: "#0351A3" },
  { label: "Sleep", value: 30, color: "#888" },
];

const STAMPS = [
  "✔ Twin verified",
  "✔ Emotional support human",
  "✔ Chai partner",
  "✔ Tarot approved",
  "✔ Plot relevant character",
];

const DETAILS: [string, string][] = [
  ["Name", "Srishtea"],
  ["Alias", "Twin"],
  ["Species", "Certified Hao user"],
  ["Class", "Chaos Witch"],
  ["Level", "18"],
  ["Skill", "Dramatic dialogue, tarot master"],
  ["Energy", "Chai & Pav Bhaji"],
  ["Alignment", "Chaotic Good"],
  ["Status", "Main Character"],
];

export function PassportSection() {
  const [stamped, setStamped] = useState(false);
  const [confettiTrigger, setConfettiTrigger] = useState(0);

  const handleStamp = () => {
    setStamped(true);
    setConfettiTrigger((c) => c + 1);
  };

  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Confetti trigger={confettiTrigger} />

      <h2
        className="font-serif gradient-text"
        style={{
          fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}
      >
        Twin Friendship Passport 🛂
      </h2>
      <p
        style={{ color: "#C7B6FF", fontStyle: "italic", marginBottom: "3rem" }}
      >
        official documentation of twin-certified chaos
      </p>

      <div
        style={{
          borderRadius: "1.5rem",
          overflow: "hidden",
          border: "2px solid rgba(3,81,163,0.5)",
          boxShadow:
            "0 0 40px rgba(3,81,163,0.3), 0 0 80px rgba(238,38,137,0.15)",
        }}
      >
        <div
          style={{
            background: "linear-gradient(160deg, #0a1535, #1E2346, #2a1460)",
            padding: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            src="/assets/generated/passport-cover.dim_400x550.png"
            alt="passport cover"
            style={{ width: "80px", borderRadius: "0.5rem" }}
          />
          <div style={{ textAlign: "left" }}>
            <p
              style={{
                color: "#C7B6FF",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Twin Certified Document
            </p>
            <h3
              className="font-serif"
              style={{ color: "white", fontSize: "1.3rem", fontWeight: 700 }}
            >
              Friendship Passport
            </h3>
            <p style={{ color: "rgba(199,182,255,0.6)", fontSize: "0.8rem" }}>
              Level 18 Edition
            </p>
          </div>
        </div>

        <div
          style={{
            background: "rgba(20,25,60,0.85)",
            backdropFilter: "blur(12px)",
            padding: "2rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.8rem 2rem",
              marginBottom: "2rem",
              textAlign: "left",
            }}
          >
            {DETAILS.map(([key, val]) => (
              <div key={key}>
                <span
                  style={{
                    color: "rgba(199,182,255,0.6)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {key}
                </span>
                <p
                  style={{
                    color: "rgba(245,242,255,0.95)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                  }}
                >
                  {val}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <p
              style={{
                color: "#C7B6FF",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              Character Stats
            </p>
            {STATS.map((stat) => (
              <div key={stat.label} style={{ marginBottom: "0.7rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0.3rem",
                  }}
                >
                  <span
                    style={{
                      color: "rgba(245,242,255,0.8)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {stat.label}
                  </span>
                  <span
                    style={{
                      color: stat.color,
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    {stat.value}%
                  </span>
                </div>
                <div
                  style={{
                    height: "6px",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "3px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${stat.value}%`,
                      background: stat.color,
                      borderRadius: "3px",
                      boxShadow: `0 0 8px ${stat.color}88`,
                      transition: "width 1.5s ease-out",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "2rem",
              justifyContent: "center",
            }}
          >
            {STAMPS.map((stamp) => (
              <span
                key={stamp}
                style={{
                  background: "rgba(3,81,163,0.3)",
                  border: "1px solid rgba(3,81,163,0.5)",
                  borderRadius: "999px",
                  padding: "0.3rem 0.8rem",
                  color: "#C7B6FF",
                  fontSize: "0.8rem",
                }}
              >
                {stamp}
              </span>
            ))}
          </div>

          {!stamped ? (
            <button
              type="button"
              onClick={handleStamp}
              data-ocid="passport.primary_button"
              style={{
                background: "linear-gradient(135deg, #EE2689, #0351A3)",
                color: "white",
                border: "none",
                borderRadius: "999px",
                padding: "1rem 2.5rem",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 0 24px rgba(238,38,137,0.5)",
                transition: "transform 0.2s",
                letterSpacing: "0.03em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-2px) scale(1.03)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "";
              }}
            >
              Stamp Passport → FOREVER TWIN
            </button>
          ) : (
            <div>
              <div
                className="animate-stamp-in"
                style={{
                  display: "inline-block",
                  background: "rgba(238,38,137,0.15)",
                  border: "3px solid #EE2689",
                  borderRadius: "1rem",
                  padding: "0.8rem 2rem",
                  color: "#EE2689",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  boxShadow: "0 0 20px rgba(238,38,137,0.4)",
                  marginBottom: "1rem",
                  transform: "rotate(-3deg)",
                }}
              >
                FOREVER TWIN ❤️
              </div>
              <p
                style={{
                  color: "rgba(199,182,255,0.7)",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                  display: "block",
                  marginTop: "1rem",
                }}
              >
                Valid for lifetime friendship.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
