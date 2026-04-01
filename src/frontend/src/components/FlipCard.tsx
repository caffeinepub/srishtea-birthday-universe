import { useState } from "react";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  height?: string;
  onFlip?: () => void;
}

export function FlipCard({
  front,
  back,
  height = "360px",
  onFlip,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((f) => !f);
    if (!flipped && onFlip) onFlip();
  };

  return (
    <button
      type="button"
      className="flip-card w-full"
      style={{
        height,
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        display: "block",
      }}
      onClick={handleFlip}
    >
      <div className={`flip-card-inner ${flipped ? "is-flipped" : ""}`}>
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </button>
  );
}
