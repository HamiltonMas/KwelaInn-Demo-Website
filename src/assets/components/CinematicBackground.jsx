const CinematicBackground = ({ children, variant = "light" }) => {
  const isDark = variant === "dark";

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background: isDark
          ? "radial-gradient(circle at 20% 20%, #0f172a 0%, #020617 60%)"
          : "radial-gradient(circle at 20% 20%, #f0fdfa 0%, #f8fafc 60%)",
      }}
    >
      {/* Animated gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(13, 148, 136, 0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "cinOrb1 18s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "cinOrb2 22s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "40%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "cinOrb3 26s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: isDark
            ? "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
            : "linear-gradient(rgba(13,148,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 90%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>

      <style>{`
        @keyframes cinOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-60px, 40px) scale(1.15); }
        }
        @keyframes cinOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(80px, -50px) scale(1.1); }
        }
        @keyframes cinOrb3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, 30px) scale(1.2); }
          66% { transform: translate(-40px, -30px) scale(0.9); }
        }
      `}</style>
    </div>
  );
};

export default CinematicBackground;
