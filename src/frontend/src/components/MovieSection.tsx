import { toast } from "sonner";
import { FlipCard } from "./FlipCard";

interface Props {
  onSecretFound: (id: number) => void;
}

const MOVIES = [
  {
    id: "dead-poets",
    title: "Dead Poets Society",
    year: "1989",
    emoji: "📚",
    gradient:
      "linear-gradient(160deg, rgba(20,20,40,0.85), rgba(3,81,163,0.4))",
    message: "carpe diem... seize the day",
    quote: "O Captain, My Captain",
  },
  {
    id: "corpse-bride",
    title: "Corpse Bride",
    year: "2005",
    emoji: "💜",
    gradient:
      "linear-gradient(160deg, rgba(30,10,50,0.85), rgba(130,0,100,0.4))",
    message: "Tell me my dear can a heart still break once it stopped beating",
    quote: "Till death do us part",
  },
  {
    id: "black-swan",
    title: "Black Swan",
    year: "2010",
    emoji: "🧙\u200d\u2640\ufe0f",
    gradient: "linear-gradient(160deg, rgba(5,5,15,0.9), rgba(70,0,120,0.4))",
    message: "The only person standing on your way is you",
    quote: "I was perfect",
  },
];

export function MovieSection({ onSecretFound }: Props) {
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
          onSecretFound(4);
          toast("✨ secret twin lore discovered", {
            style: {
              background: "rgba(30,35,70,0.95)",
              color: "#C7B6FF",
              border: "1px solid rgba(199,182,255,0.3)",
              borderRadius: "1rem",
            },
          });
        }}
        data-ocid="movie.secondary_button"
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "1.5rem",
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
        aria-label="secret gem"
      >
        💎
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
          Films for a Main Character Era 🎬
        </h2>
        <p style={{ color: "#C7B6FF", fontStyle: "italic" }}>
          tap to reveal the message
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem",
        }}
      >
        {MOVIES.map((movie) => (
          <FlipCard
            key={movie.id}
            height="340px"
            front={
              <div
                style={{
                  height: "100%",
                  borderRadius: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: movie.gradient,
                  border: "1px solid rgba(199,182,255,0.25)",
                  backdropFilter: "blur(10px)",
                  gap: "0.8rem",
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "3rem" }}>{movie.emoji}</span>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {movie.title}
                </h3>
                <p
                  style={{
                    color: "rgba(199,182,255,0.7)",
                    fontSize: "0.85rem",
                  }}
                >
                  {movie.year}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.8rem",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{movie.quote}&rdquo;
                </p>
                <p
                  style={{
                    color: "rgba(199,182,255,0.5)",
                    fontSize: "0.75rem",
                    marginTop: "0.5rem",
                  }}
                >
                  tap for message
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
                  padding: "2rem 1.5rem",
                  background:
                    "linear-gradient(160deg, rgba(238,38,137,0.3), rgba(3,81,163,0.35))",
                  border: "1px solid rgba(238,38,137,0.4)",
                  backdropFilter: "blur(12px)",
                  gap: "1rem",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "2rem" }}>{movie.emoji}</span>
                <p
                  className="font-serif"
                  style={{
                    color: "rgba(245,242,255,0.95)",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                  }}
                >
                  &ldquo;{movie.message}&rdquo;
                </p>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}
