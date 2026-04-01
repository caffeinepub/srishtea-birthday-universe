import { useState } from "react";

export function ChaiSection() {
  const [clicked, setClicked] = useState(false);

  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        textAlign: "center",
        background:
          "linear-gradient(160deg, rgba(100,40,10,0.25), rgba(160,60,20,0.15), rgba(238,38,137,0.1))",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
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
        Chai &amp; Conversations ☕
      </h2>
      <p
        style={{
          color: "#C7B6FF",
          fontStyle: "italic",
          fontSize: "1.05rem",
          marginBottom: "3rem",
        }}
      >
        for all the chai conversations we haven&apos;t had yet ☕
      </p>

      <button
        type="button"
        onClick={() => setClicked((c) => !c)}
        data-ocid="chai.primary_button"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "block",
          margin: "0 auto 2rem",
        }}
        aria-label="Click the chai cup"
      >
        <img
          src="/assets/generated/chai-cup-bow-transparent.dim_400x400.png"
          alt="kawaii chai cup"
          style={{
            width: "min(220px, 55vw)",
            transition: "transform 0.3s, filter 0.3s",
            filter: clicked
              ? "drop-shadow(0 0 20px rgba(238,38,137,0.7))"
              : "drop-shadow(0 0 8px rgba(238,100,30,0.4))",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform =
              "scale(1.08) rotate(-3deg)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "";
          }}
        />
      </button>

      {clicked && (
        <div
          className="animate-reveal-up"
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            padding: "1.8rem 2rem",
            borderRadius: "1.2rem",
            background:
              "linear-gradient(135deg, rgba(160,60,20,0.3), rgba(238,38,137,0.2))",
            border: "1px solid rgba(255,180,100,0.3)",
            backdropFilter: "blur(12px)",
          }}
        >
          <p
            className="font-serif"
            style={{
              color: "rgba(245,242,255,0.95)",
              fontSize: "1.1rem",
              fontStyle: "italic",
              lineHeight: 1.7,
            }}
          >
            someday soon. a cup of chai. just us.
          </p>
          <p style={{ fontSize: "1.5rem", marginTop: "0.8rem" }}>☕🌸</p>
        </div>
      )}
    </section>
  );
}
