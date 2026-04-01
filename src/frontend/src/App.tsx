import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import { toast } from "sonner";
import { ChaiSection } from "./components/ChaiSection";
import { Confetti } from "./components/Confetti";
import { CrystalBallSection } from "./components/CrystalBallSection";
import { FinalEnding } from "./components/FinalEnding";
import { FriendshipTarot } from "./components/FriendshipTarot";
import { LandingSection } from "./components/LandingSection";
import { LetterSection } from "./components/LetterSection";
import { MovieSection } from "./components/MovieSection";
import { PassportSection } from "./components/PassportSection";
import { SparkleTrail } from "./components/SparkleTrail";
import { TarotSection } from "./components/TarotSection";
import { TimelineSection } from "./components/TimelineSection";

// Pre-defined sparkle positions for background (stable, no random)
const BG_SPARKLES = [
  { id: "bgs-0", sym: "✨", left: 5, top: 10, fs: 0.7, dd: 0.0, dr: 1.8 },
  { id: "bgs-1", sym: "⭐", left: 30, top: 85, fs: 0.6, dd: 0.5, dr: 2.2 },
  { id: "bgs-2", sym: "✦", left: 52, top: 20, fs: 0.8, dd: 1.1, dr: 1.6 },
  { id: "bgs-3", sym: "★", left: 78, top: 60, fs: 0.6, dd: 0.3, dr: 2.0 },
  { id: "bgs-4", sym: "💫", left: 93, top: 35, fs: 0.7, dd: 1.8, dr: 2.4 },
  { id: "bgs-5", sym: "✨", left: 15, top: 50, fs: 0.6, dd: 0.7, dr: 1.9 },
  { id: "bgs-6", sym: "⭐", left: 44, top: 75, fs: 0.8, dd: 2.1, dr: 2.1 },
  { id: "bgs-7", sym: "✦", left: 68, top: 15, fs: 0.6, dd: 0.9, dr: 1.7 },
  { id: "bgs-8", sym: "★", left: 87, top: 90, fs: 0.7, dd: 1.4, dr: 2.3 },
  { id: "bgs-9", sym: "💫", left: 22, top: 40, fs: 0.6, dd: 0.2, dr: 2.6 },
  { id: "bgs-10", sym: "✨", left: 60, top: 55, fs: 0.7, dd: 1.6, dr: 1.8 },
  { id: "bgs-11", sym: "⭐", left: 38, top: 5, fs: 0.6, dd: 2.5, dr: 2.0 },
  { id: "bgs-12", sym: "✦", left: 75, top: 30, fs: 0.8, dd: 0.6, dr: 2.2 },
  { id: "bgs-13", sym: "★", left: 10, top: 70, fs: 0.6, dd: 1.3, dr: 1.6 },
  { id: "bgs-14", sym: "💫", left: 55, top: 95, fs: 0.7, dd: 0.8, dr: 2.8 },
  { id: "bgs-15", sym: "✨", left: 82, top: 45, fs: 0.6, dd: 2.0, dr: 1.9 },
  { id: "bgs-16", sym: "⭐", left: 27, top: 65, fs: 0.8, dd: 1.1, dr: 2.1 },
  { id: "bgs-17", sym: "✦", left: 48, top: 28, fs: 0.6, dd: 0.4, dr: 1.7 },
  { id: "bgs-18", sym: "★", left: 66, top: 80, fs: 0.7, dd: 1.9, dr: 2.3 },
  { id: "bgs-19", sym: "💫", left: 91, top: 12, fs: 0.6, dd: 2.3, dr: 2.0 },
];

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [secretsFound, setSecretsFound] = useState<Set<number>>(new Set());
  const [allSecretsModal, setAllSecretsModal] = useState(false);
  const [confettiTrigger, setConfettiTrigger] = useState(0);

  const handleSecretFound = (id: number) => {
    if (secretsFound.has(id)) return;
    const next = new Set([...secretsFound, id]);
    setSecretsFound(next);
    if (next.size === 5) {
      setTimeout(() => {
        setAllSecretsModal(true);
        setConfettiTrigger((c) => c + 1);
      }, 800);
    }
  };

  const handleChaiSecret = () => {
    handleSecretFound(5);
    toast("✨ secret twin lore discovered", {
      style: {
        background: "rgba(30,35,70,0.95)",
        color: "#C7B6FF",
        border: "1px solid rgba(199,182,255,0.3)",
        borderRadius: "1rem",
      },
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #0351A3 0%, #3a2a8a 30%, #7a1a6a 60%, #EE2689 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <SparkleTrail />
      <Toaster position="bottom-center" />
      <Confetti trigger={confettiTrigger} count={80} />

      {!showContent && (
        <LandingSection
          onEnter={() => setShowContent(true)}
          onSecretFound={handleSecretFound}
        />
      )}

      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.5s ease-in",
          transitionDelay: showContent ? "0.2s" : "0s",
          pointerEvents: showContent ? "auto" : "none",
        }}
      >
        {/* Fixed background sparkles */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          {BG_SPARKLES.map((sp) => (
            <div
              key={sp.id}
              className="animate-twinkle"
              style={{
                position: "absolute",
                left: `${sp.left}%`,
                top: `${sp.top}%`,
                fontSize: `${sp.fs}rem`,
                animationDelay: `${sp.dd}s`,
                animationDuration: `${sp.dr}s`,
                opacity: 0.3,
              }}
            >
              {sp.sym}
            </div>
          ))}
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ height: "4rem" }} />

          <TarotSection onSecretFound={handleSecretFound} />
          <div className="section-divider" style={{ margin: "2rem auto" }} />

          <FriendshipTarot />
          <div className="section-divider" style={{ margin: "2rem auto" }} />

          <LetterSection onSecretFound={handleSecretFound} />
          <div className="section-divider" style={{ margin: "2rem auto" }} />

          <CrystalBallSection onSecretFound={handleSecretFound} />
          <div className="section-divider" style={{ margin: "2rem auto" }} />

          <MovieSection onSecretFound={handleSecretFound} />

          <ChaiSection />
          <div className="section-divider" style={{ margin: "2rem auto" }} />

          <PassportSection />
          <div className="section-divider" style={{ margin: "2rem auto" }} />

          <TimelineSection />
          <div className="section-divider" style={{ margin: "2rem auto" }} />

          <FinalEnding />

          <footer
            style={{
              background: "rgba(5,5,20,0.95)",
              padding: "3rem 1.5rem",
              textAlign: "center",
              borderTop: "1px solid rgba(199,182,255,0.15)",
              position: "relative",
            }}
          >
            <button
              type="button"
              onClick={handleChaiSecret}
              data-ocid="footer.secondary_button"
              style={{
                position: "absolute",
                bottom: "1.5rem",
                right: "1.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.1rem",
                opacity: 0.3,
                transition: "opacity 0.3s",
                padding: "0.5rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.3";
              }}
              aria-label="secret chai"
            >
              ☕
            </button>

            {secretsFound.size > 0 && secretsFound.size < 5 && (
              <p
                style={{
                  color: "rgba(199,182,255,0.5)",
                  fontSize: "0.8rem",
                  marginBottom: "1.5rem",
                }}
              >
                {secretsFound.size}/5 secret lore discovered ✨
              </p>
            )}

            <p
              style={{
                color: "rgba(199,182,255,0.5)",
                fontSize: "0.85rem",
                fontStyle: "italic",
                marginBottom: "0.5rem",
              }}
            >
              Built with sleepless boredom nights and questionable decisions.
            </p>
            <p
              style={{
                color: "rgba(238,38,137,0.6)",
                fontSize: "0.85rem",
                fontStyle: "italic",
                marginBottom: "1.5rem",
              }}
            >
              by your twin
            </p>
            <p style={{ color: "rgba(199,182,255,0.35)", fontSize: "0.75rem" }}>
              &copy; {new Date().getFullYear()}. Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(238,38,137,0.5)",
                  textDecoration: "none",
                }}
              >
                caffeine.ai
              </a>
            </p>
          </footer>
        </div>
      </div>

      {allSecretsModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 8000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.6)",
            padding: "1.5rem",
          }}
        >
          <div
            className="animate-bounce-in"
            style={{
              background:
                "linear-gradient(160deg, rgba(238,38,137,0.3), rgba(3,81,163,0.35))",
              border: "2px solid rgba(238,38,137,0.6)",
              borderRadius: "2rem",
              padding: "2.5rem",
              maxWidth: "420px",
              width: "100%",
              textAlign: "center",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0 0 60px rgba(238,38,137,0.4), 0 0 100px rgba(3,81,163,0.2)",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💫</div>
            <h3
              className="font-serif gradient-text"
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                marginBottom: "0.5rem",
              }}
            >
              100% Twin Bond Achieved
            </h3>
            <p
              style={{
                color: "#C7B6FF",
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
              }}
            >
              you found all the secret twin lore ✨
            </p>
            <button
              type="button"
              onClick={() => setAllSecretsModal(false)}
              data-ocid="secrets.close_button"
              style={{
                background: "linear-gradient(135deg, #EE2689, #0351A3)",
                color: "white",
                border: "none",
                borderRadius: "999px",
                padding: "0.7rem 2rem",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              ✨ yay!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
