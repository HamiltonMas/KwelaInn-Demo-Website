import { useEffect, useState } from "react";

const CinematicLoader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`cin-loader ${hidden ? "hidden" : ""}`}>
      <div className="cin-loader-logo">Kwela Inn</div>
      <div className="cin-loader-bar" />
      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.85rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginTop: "12px",
        }}
      >
        Preparing your experience
      </p>
    </div>
  );
};

export default CinematicLoader;
