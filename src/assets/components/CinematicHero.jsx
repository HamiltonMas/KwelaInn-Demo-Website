import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroVideo from "../videos/introduction-video.mp4";

const CinematicHero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tilt effect
  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Generate particles once
  const particles = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 6 + Math.random() * 22,
      duration: 12 + Math.random() * 14,
      delay: Math.random() * 10,
    })),
  ).current;

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "620px",
        overflow: "hidden",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* === Background Video with Ken Burns === */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          transform: `translateY(${scrollY * 0.4}px)`,
          willChange: "transform",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setLoaded(true)}
          className="cin-kenburns"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1.5s ease",
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Fallback gradient while video loads */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 40%, #0d9488 0%, #0f172a 70%)",
            zIndex: -1,
          }}
        />
      </div>

      {/* === Animated Gradient Overlay === */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.75) 0%, rgba(13,148,136,0.45) 50%, rgba(15,23,42,0.85) 100%)",
          zIndex: 1,
        }}
      />

      {/* === Radial Vignette === */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* === Floating Particles === */}
      <div className="cin-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="cin-particle"
            style={{
              left: `${p.left}%`,
              bottom: "-50px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* === Hero Content === */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 20px",
          maxWidth: "900px",
          transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {/* Floating badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 20px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.2)",
            fontSize: "0.85rem",
            fontWeight: "600",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "24px",
            animation: "cinFadeUp 1s ease 0.2s both",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#14b8a6",
              boxShadow: "0 0 12px #14b8a6",
              animation: "cinPulse 2s infinite",
            }}
          />
          Limpopo&apos;s Premier Resort
        </div>

        {/* Title with animated gradient */}
        <h1
          style={{
            fontSize: "clamp(2.4rem, 7vw, 5rem)",
            fontWeight: "900",
            lineHeight: "1.05",
            margin: "0 0 20px",
            letterSpacing: "-0.03em",
            textShadow: "0 10px 40px rgba(0,0,0,0.5)",
            animation: "cinFadeUp 1s ease 0.4s both",
          }}
        >
          Welcome to{" "}
          <span className="cin-grad-text" style={{ display: "inline-block" }}>
            Kwela Inn
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.35rem)",
            maxWidth: "640px",
            margin: "0 auto 40px",
            opacity: 0.92,
            lineHeight: 1.7,
            fontWeight: 400,
            animation: "cinFadeUp 1s ease 0.6s both",
          }}
        >
          Where luxury meets nature. Experience unforgettable stays, world-class
          events, and hospitality that feels like home.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "cinFadeUp 1s ease 0.8s both",
          }}
        >
          <Link to="/rooms" className="cin-btn cin-btn-primary">
            🛏️ Explore Rooms
          </Link>
          <Link to="/contact" className="cin-btn cin-btn-ghost">
            ✨ Book Your Stay
          </Link>
        </div>
      </div>

      {/* === Scroll indicator === */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "cinFadeUp 1s ease 1.2s both",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)",
            animation: "cinScrollDown 2s infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes cinFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cinPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        @keyframes cinScrollDown {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default CinematicHero;
