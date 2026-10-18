import { useState, useEffect } from "react";
import CinematicBackground from "../../assets/components/CinematicBackground";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const features = [
    {
      title: "Luxury Accommodation",
      desc: "Spacious rooms with modern amenities",
      icon: "🛏️",
    },
    {
      title: "Event Hosting",
      desc: "Perfect venues for weddings & conferences",
      icon: "🎉",
    },
    {
      title: "Day Visits",
      desc: "Enjoy our facilities for a daily getaway",
      icon: "☀️",
    },
    {
      title: "Prime Location",
      desc: "Beautiful surroundings with easy access",
      icon: "📍",
    },
  ];

  const coreValues = [
    {
      title: "Hospitality",
      desc: "Warm, caring, and professional service",
      icon: "🤝",
    },
    {
      title: "Excellence",
      desc: "Commitment to top-quality experiences",
      icon: "✨",
    },
    {
      title: "Community",
      desc: "Bringing people together to connect and celebrate",
      icon: "🌍",
    },
    {
      title: "Integrity",
      desc: "Honesty, transparency, and respect in all we do",
      icon: "💎",
    },
  ];

  const milestones = [
    { year: "2015", title: "Founded", desc: "Kwela Inn opens its doors" },
    { year: "2018", title: "Expansion", desc: "Added 25 new luxury suites" },
    { year: "2021", title: "Award", desc: "Best Resort in Limpopo" },
    { year: "2024", title: "Renovation", desc: "Complete facilities upgrade" },
  ];

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <CinematicBackground>
      <section
        id="about-hero-section"
        style={{
          padding: isMobile ? "140px 0 40px" : "130px 0 80px",
          position: "relative",
        }}
      >
        <div className="container" style={styles.container}>
          {/* ==================== HERO HEADER ==================== */}
          <div className="cin-reveal" style={styles.heroHeader}>
            <span style={styles.eyebrow}>OUR STORY</span>
            <h1 style={styles.heroTitle}>
              About <span className="cin-grad-text">Kwela Inn</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Nestled in a serene environment, Kwela Inn offers an all-in-one
              hospitality experience combining luxury, comfort, and exceptional
              service.
            </p>
          </div>

          {/* ==================== VISION & MISSION ==================== */}
          <div style={styles.visionGrid}>
            {/* Vision Card */}
            <div
              className="cin-reveal-left cin-glass-light cin-tilt"
              style={{
                ...styles.pillarCard,
                borderTop: "5px solid #0d9488",
              }}
            >
              <div
                style={{
                  ...styles.pillarIconWrapper,
                  background: "linear-gradient(135deg, #0d9488, #14b8a6)",
                }}
              >
                <span style={styles.pillarIcon}>👁️</span>
              </div>
              <h3 style={styles.pillarTitle}>Our Vision</h3>
              <p style={styles.pillarText}>
                To be Limpopo&apos;s top hospitality and events destination,
                recognized for natural beauty, excellent service, safety, and
                memorable experiences.
              </p>
            </div>

            {/* Mission Card */}
            <div
              className="cin-reveal-right cin-glass-light cin-tilt"
              style={{
                ...styles.pillarCard,
                borderTop: "5px solid #f59e0b",
              }}
            >
              <div
                style={{
                  ...styles.pillarIconWrapper,
                  background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                }}
              >
                <span style={styles.pillarIcon}>🎯</span>
              </div>
              <h3 style={styles.pillarTitle}>Our Mission</h3>
              <p style={styles.pillarText}>
                Our mission is to offer a welcoming space for guests to relax,
                connect, and celebrate, with exceptional hospitality that blends
                comfort, elegance, and nature.
              </p>
            </div>
          </div>

          {/* ==================== SAFETY & SECURITY ==================== */}
          <div className="cin-reveal cin-glass-light" style={styles.safetyCard}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "20px" : "32px",
                flexDirection: isMobile ? "column" : "row",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <div style={styles.safetyIconWrapper}>
                <span style={styles.safetyIcon}>🛡️</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={styles.pillarTitle}>Safety &amp; Security</h3>
                <p style={styles.pillarText}>
                  Your safety is our priority. With secure access, reliable
                  facilities, and attentive staff, we ensure a safe, welcoming
                  environment for every stay, event, or visit.
                </p>
              </div>
            </div>
          </div>

          {/* ==================== CORE VALUES ==================== */}
          <div style={styles.section}>
            <div className="cin-reveal" style={styles.sectionHeader}>
              <span style={styles.eyebrow}>WHAT WE BELIEVE</span>
              <h2 style={styles.sectionTitle}>
                Our <span className="cin-grad-text">Core Values</span>
              </h2>
              <p style={styles.sectionSubtitle}>
                The principles that guide everything we do at Kwela Inn
              </p>
            </div>

            <div
              style={{
                ...styles.valuesGrid,
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : isTablet
                    ? "repeat(2, 1fr)"
                    : "repeat(4, 1fr)",
              }}
            >
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="cin-reveal cin-tilt"
                  style={{
                    ...styles.valueCard,
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  <div style={styles.valueIconWrapper}>
                    <span style={styles.valueIcon}>{value.icon}</span>
                  </div>
                  <h4 style={styles.valueTitle}>{value.title}</h4>
                  <p style={styles.valueDesc}>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== WHAT WE OFFER ==================== */}
          <div style={styles.section}>
            <div className="cin-reveal" style={styles.sectionHeader}>
              <span style={styles.eyebrow}>AMENITIES</span>
              <h2 style={styles.sectionTitle}>
                What We <span className="cin-grad-text">Offer</span>
              </h2>
              <p style={styles.sectionSubtitle}>
                Discover the exceptional amenities and services at Kwela Inn
              </p>
            </div>

            <div
              style={{
                ...styles.featuresGrid,
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : isTablet
                    ? "repeat(2, 1fr)"
                    : "repeat(4, 1fr)",
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="cin-reveal cin-tilt"
                  style={{
                    ...styles.featureCard,
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  <div style={styles.featureIconWrapper}>
                    <span style={styles.featureIcon}>{feature.icon}</span>
                  </div>
                  <h3 style={styles.featureTitle}>{feature.title}</h3>
                  <p style={styles.featureDesc}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== MILESTONES TIMELINE ==================== */}
          <div style={styles.section}>
            <div className="cin-reveal" style={styles.sectionHeader}>
              <span style={styles.eyebrow}>OUR JOURNEY</span>
              <h2 style={styles.sectionTitle}>
                <span className="cin-grad-text">Milestones</span>
              </h2>
              <p style={styles.sectionSubtitle}>
                A look at the moments that shaped Kwela Inn
              </p>
            </div>

            <div
              style={{
                ...styles.timelineGrid,
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : isTablet
                    ? "repeat(2, 1fr)"
                    : "repeat(4, 1fr)",
              }}
            >
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="cin-reveal"
                  style={{
                    ...styles.milestoneCard,
                    transitionDelay: `${index * 0.12}s`,
                  }}
                >
                  <div style={styles.milestoneYear}>{milestone.year}</div>
                  <div style={styles.milestoneLine} />
                  <h4 style={styles.milestoneTitle}>{milestone.title}</h4>
                  <p style={styles.milestoneDesc}>{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== STATS BAND ==================== */}
          <div className="cin-reveal cin-glass" style={styles.statsBand}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "repeat(2, 1fr)"
                  : "repeat(4, 1fr)",
                gap: isMobile ? "24px" : "40px",
                textAlign: "center",
              }}
            >
              {[
                { v: "50+", l: "Rooms & Suites" },
                { v: "1000+", l: "Happy Guests" },
                { v: "15+", l: "Event Spaces" },
                { v: "24/7", l: "Safety & Support" },
              ].map((stat, i) => (
                <div key={i} style={styles.statCard}>
                  <div style={styles.statValue}>{stat.v}</div>
                  <div style={styles.statLabel}>{stat.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== CLOSING CTA ==================== */}
          <div className="cin-reveal cin-glass-light" style={styles.closingCta}>
            <h3 style={styles.closingTitle}>
              Experience the <span className="cin-grad-text">Kwela Inn</span>{" "}
              Difference
            </h3>
            <p style={styles.closingText}>
              Book your stay or event with us today and let us create an
              unforgettable experience for you.
            </p>
            <div style={styles.closingButtons}>
              <a href="/rooms" className="cin-btn cin-btn-primary">
                🛏️ Browse Rooms
              </a>
              <a href="/contact" className="cin-btn cin-btn-gold">
                📞 Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </CinematicBackground>
  );
};

/* ==================== STYLES ==================== */
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  section: {
    margin: "80px 0",
  },
  sectionHeader: {
    textAlign: "center",
    maxWidth: "700px",
    margin: "0 auto 50px",
  },
  eyebrow: {
    display: "inline-block",
    fontSize: "0.75rem",
    fontWeight: "700",
    letterSpacing: "0.25em",
    color: "#0d9488",
    background: "rgba(13, 148, 136, 0.08)",
    padding: "6px 16px",
    borderRadius: "999px",
    marginBottom: "16px",
    border: "1px solid rgba(13, 148, 136, 0.2)",
  },
  sectionTitle: {
    fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
    fontWeight: "800",
    color: "#1e293b",
    margin: "0 0 14px",
    lineHeight: "1.15",
    letterSpacing: "-0.02em",
  },
  sectionSubtitle: {
    fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
    color: "#64748b",
    lineHeight: 1.7,
    margin: 0,
  },

  /* ---------- Hero ---------- */
  heroHeader: {
    textAlign: "center",
    marginBottom: "70px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    fontWeight: "900",
    color: "#1e293b",
    margin: "0 0 20px",
    lineHeight: "1.1",
    letterSpacing: "-0.03em",
  },
  heroSubtitle: {
    fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
    color: "#64748b",
    lineHeight: 1.8,
    margin: 0,
  },

  /* ---------- Vision / Mission ---------- */
  visionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    marginBottom: "50px",
  },
  pillarCard: {
    padding: "40px 30px",
    textAlign: "center",
    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
    position: "relative",
    overflow: "hidden",
  },
  pillarIconWrapper: {
    width: "80px",
    height: "80px",
    margin: "0 auto 24px",
    borderRadius: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
  },
  pillarIcon: {
    fontSize: "2.2rem",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
  },
  pillarTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#1e293b",
    margin: "0 0 16px",
    letterSpacing: "-0.01em",
  },
  pillarText: {
    color: "#475569",
    lineHeight: 1.75,
    fontSize: "1rem",
    margin: 0,
  },

  /* ---------- Safety ---------- */
  safetyCard: {
    padding: "40px",
    marginBottom: "80px",
    borderRadius: "24px",
  },
  safetyIconWrapper: {
    width: "90px",
    height: "90px",
    borderRadius: "24px",
    background: "linear-gradient(135deg, #0d9488, #14b8a6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 15px 30px rgba(13, 148, 136, 0.25)",
  },
  safetyIcon: {
    fontSize: "2.5rem",
  },

  /* ---------- Values ---------- */
  valuesGrid: {
    display: "grid",
    gap: "22px",
  },
  valueCard: {
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    padding: "32px 24px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
    border: "1px solid rgba(226, 232, 240, 0.8)",
    textAlign: "center",
    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  valueIconWrapper: {
    width: "64px",
    height: "64px",
    margin: "0 auto 18px",
    borderRadius: "18px",
    background: "linear-gradient(135deg, #0d9488, #14b8a6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 20px rgba(13, 148, 136, 0.25)",
  },
  valueIcon: {
    fontSize: "1.7rem",
  },
  valueTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#1e293b",
    margin: "0 0 10px",
  },
  valueDesc: {
    color: "#64748b",
    lineHeight: 1.65,
    fontSize: "0.92rem",
    margin: 0,
  },

  /* ---------- Features ---------- */
  featuresGrid: {
    display: "grid",
    gap: "22px",
  },
  featureCard: {
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    padding: "32px 24px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
    border: "1px solid rgba(226, 232, 240, 0.8)",
    textAlign: "center",
    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  featureIconWrapper: {
    width: "64px",
    height: "64px",
    margin: "0 auto 18px",
    borderRadius: "18px",
    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 20px rgba(251, 191, 36, 0.3)",
  },
  featureIcon: {
    fontSize: "1.7rem",
  },
  featureTitle: {
    fontSize: "1.15rem",
    fontWeight: "700",
    color: "#1e293b",
    margin: "0 0 10px",
  },
  featureDesc: {
    color: "#64748b",
    lineHeight: 1.65,
    fontSize: "0.92rem",
    margin: 0,
  },

  /* ---------- Timeline ---------- */
  timelineGrid: {
    display: "grid",
    gap: "24px",
  },
  milestoneCard: {
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    padding: "32px 24px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
    border: "1px solid rgba(226, 232, 240, 0.8)",
    textAlign: "center",
    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
    position: "relative",
  },
  milestoneYear: {
    fontSize: "2rem",
    fontWeight: "900",
    background: "linear-gradient(135deg, #0d9488, #14b8a6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "10px",
    letterSpacing: "-0.02em",
  },
  milestoneLine: {
    width: "40px",
    height: "3px",
    background: "linear-gradient(90deg, #0d9488, #fbbf24)",
    borderRadius: "3px",
    margin: "0 auto 16px",
  },
  milestoneTitle: {
    fontSize: "1.15rem",
    fontWeight: "700",
    color: "#1e293b",
    margin: "0 0 8px",
  },
  milestoneDesc: {
    color: "#64748b",
    lineHeight: 1.6,
    fontSize: "0.9rem",
    margin: 0,
  },

  /* ---------- Stats Band ---------- */
  statsBand: {
    padding: "50px 30px",
    margin: "80px 0",
    background:
      "linear-gradient(135deg, rgba(13,148,136,0.95), rgba(15,118,110,0.95))",
    borderRadius: "28px",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    overflow: "hidden",
    position: "relative",
  },
  statCard: {
    position: "relative",
  },
  statValue: {
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
    fontWeight: "900",
    color: "white",
    marginBottom: "8px",
    letterSpacing: "-0.02em",
    textShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },
  statLabel: {
    fontSize: "0.85rem",
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "500",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },

  /* ---------- Closing CTA ---------- */
  closingCta: {
    padding: "50px 30px",
    textAlign: "center",
    borderRadius: "24px",
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(226, 232, 240, 0.8)",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
  },
  closingTitle: {
    fontSize: "clamp(1.4rem, 3vw, 2rem)",
    fontWeight: "800",
    color: "#1e293b",
    margin: "0 0 16px",
    letterSpacing: "-0.02em",
  },
  closingText: {
    fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
    color: "#64748b",
    maxWidth: "600px",
    margin: "0 auto 32px",
    lineHeight: 1.7,
  },
  closingButtons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

/* ---------- Responsive tweaks ---------- */
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @media (max-width: 480px) {
      .cin-glass-light,
      .cin-glass { border-radius: 18px !important; }
    }

    /* Ensure the About hero always clears the fixed header,
       even if other components inject global \`section\` rules. */
    #about-hero-section {
      padding-top: 130px !important;
    }
    @media (max-width: 768px) {
      #about-hero-section {
        padding-top: 110px !important;
      }
    }
    @media (max-width: 480px) {
      #about-hero-section {
        padding-top: 100px !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default About;
