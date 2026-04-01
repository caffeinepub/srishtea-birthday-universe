import { useState } from "react";
import { toast } from "sonner";

interface Props {
  onSecretFound: (id: number) => void;
}

const LETTER = `happy 18th twin,

first of all congrats for having ur boards over and making it till 18 now u no longer a kid \ud83d\ude1d it's been about about 5 months since been blessed by our cute whimsical presence, while a lot has changed during these things one thing dat remained constant was us being present for each other (especially me nigga u slept dat night like a horse), yea you're dumb at times but i have faith in your potential dat you will do something cool in ur life and i hope i am there when to see u making it. I wish you nothing but the best in life I hope you move out soon from dat toxic fam of urs and become independent. I sure hope to see u as magical and whimsical as you are later on in ur life doing all the things u dream of doing. IDK what future holds but twin stay as you are don't ever think low of yourself you're literally made of stardust (i hope we both made from same star dust). bro i swear u make so mad at times by being a rude ah nigga but at the same time i can't seem to think bad of u dats another thing i still haven't forgiven u for not making a blend with me but dat pedo senior of urs and yea u don't share anything as well. you're perfect the way u are don't let anyone say anything else.

But i pray you heal from the things you don't talk about, you tell me things more (plzzzz) and yea buy me stuff too after all i am the goated hb

I hope this year gives you what you actually want not just good marks or success, but also peace of mind, confidence in yourself, and reasons to genuinely smile (not just the polite ones). I also hope you keep becoming more of the person you already are thoughtful, strong in your own quiet way, and someone who knows when to step back and focus on herself.

\u2014 idk`;

export function LetterSection({ onSecretFound }: Props) {
  const [opened, setOpened] = useState(false);

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
      <button
        type="button"
        onClick={() => {
          onSecretFound(2);
          toast("✨ secret twin lore discovered", {
            style: {
              background: "rgba(30,35,70,0.95)",
              color: "#C7B6FF",
              border: "1px solid rgba(199,182,255,0.3)",
              borderRadius: "1rem",
            },
          });
        }}
        data-ocid="letter.secondary_button"
        style={{
          position: "absolute",
          top: "2rem",
          right: "1rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.3rem",
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
        aria-label="secret star"
      >
        ⭐
      </button>

      <h2
        className="font-serif gradient-text"
        style={{
          fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}
      >
        A Letter, Just for You
      </h2>
      <p
        style={{ color: "#C7B6FF", fontStyle: "italic", marginBottom: "3rem" }}
      >
        sealed with love and questionable decisions
      </p>

      <div
        className="glass-card"
        style={{
          borderRadius: "1.5rem",
          padding: "2.5rem 2rem",
          background:
            "linear-gradient(160deg, rgba(245,242,255,0.15), rgba(3,81,163,0.15))",
          border: "1px solid rgba(255,255,255,0.3)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            filter: "drop-shadow(0 0 8px rgba(238,38,137,0.6))",
          }}
          className="animate-float-slow"
        >
          🎀
        </div>

        {!opened ? (
          <>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✉️</div>
            <p
              className="font-serif"
              style={{
                color: "rgba(245,242,255,0.9)",
                fontSize: "1rem",
                marginBottom: "1.5rem",
                fontStyle: "italic",
              }}
            >
              Open if you are Srishtea
              <br />
              <span style={{ fontSize: "0.85rem", color: "#C7B6FF" }}>
                (hao verification required)
              </span>
            </p>
            <button
              type="button"
              onClick={() => setOpened(true)}
              data-ocid="letter.primary_button"
              style={{
                background: "linear-gradient(135deg, #EE2689, #0351A3)",
                color: "white",
                border: "none",
                borderRadius: "999px",
                padding: "0.85rem 2.2rem",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 0 20px rgba(238,38,137,0.4)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "";
              }}
            >
              Open Letter 💌
            </button>
          </>
        ) : (
          <div className="animate-reveal-up">
            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
              ✉️ ✨
            </div>
            <pre
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(0.88rem, 2vw, 1rem)",
                lineHeight: 1.85,
                color: "rgba(245,242,255,0.92)",
                whiteSpace: "pre-wrap",
                textAlign: "left",
                background: "rgba(245,242,255,0.06)",
                borderRadius: "1rem",
                padding: "1.5rem",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {LETTER}
            </pre>
            <button
              type="button"
              onClick={() => setOpened(false)}
              data-ocid="letter.close_button"
              style={{
                marginTop: "1.5rem",
                background: "none",
                border: "1px solid rgba(199,182,255,0.5)",
                borderRadius: "999px",
                padding: "0.5rem 1.5rem",
                color: "#C7B6FF",
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              seal again 💌
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
