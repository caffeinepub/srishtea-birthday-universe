import { useEffect } from "react";

const SYMBOLS = ["✨", "⭐", "🎀", "💫", "✦", "★"];

export function SparkleTrail() {
  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let lastTime = 0;

    const onMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 60) return; // throttle to ~16 fps
      lastTime = now;

      const symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      const el = document.createElement("div");
      el.textContent = symbol;
      const size = 10 + Math.random() * 14;
      el.style.cssText = [
        "position:fixed",
        `left:${e.clientX}px`,
        `top:${e.clientY}px`,
        "pointer-events:none",
        "z-index:99999",
        `font-size:${size}px`,
        "animation:sparkle-fade 0.9s ease-out forwards",
        "transform:translate(-50%,-50%)",
        "user-select:none",
      ].join(";");
      document.body.appendChild(el);
      setTimeout(() => {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 950);
    };

    // Custom cursor dot
    const dot = document.createElement("div");
    dot.id = "cursor-dot";
    dot.style.cssText = [
      "position:fixed",
      "width:10px",
      "height:10px",
      "border-radius:50%",
      "background:linear-gradient(135deg,#EE2689,#0351A3)",
      "pointer-events:none",
      "z-index:99998",
      "transform:translate(-50%,-50%)",
      "transition:left 0.05s,top 0.05s",
      "box-shadow:0 0 8px rgba(238,38,137,0.8)",
    ].join(";");
    document.body.appendChild(dot);

    const moveDot = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", moveDot);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", moveDot);
      if (dot.parentNode) dot.parentNode.removeChild(dot);
    };
  }, []);

  return null;
}
