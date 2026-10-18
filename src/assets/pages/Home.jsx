import { Link } from "react-router-dom";
import room1 from "../pictures/room-inside-2.jpeg";
import room2 from "../pictures/room-outside.jpeg";
import gallery1 from "../pictures/room-outside.jpeg";
import gallery2 from "../pictures/pool-2.jpeg";
import gallery3 from "../pictures/room-kitchen.jpeg";
import gallery4 from "../pictures/kids-pool.jpeg";
import CinematicHero from "../../assets/components/CinematicHero";
import CinematicBackground from "../../assets/components/CinematicBackground";

const Home = () => {
  // Featured rooms for homepage preview
  const featuredRooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      description:
        "Spacious suite with king bed, balcony, and luxury bathroom.",
      price: "From ZAR 1,800/night",
      image: room1,
    },
    {
      id: 2,
      name: "Executive Room",
      description: "Comfortable room with garden view and modern amenities.",
      price: "From ZAR 1,200/night",
      image: room2,
    },
  ];

  // Featured gallery items
  const featuredGallery = [
    { id: 1, src: gallery1, alt: "Resort Pool", category: "Facilities" },
    { id: 2, src: gallery2, alt: "Luxury Room", category: "Rooms" },
    { id: 3, src: gallery3, alt: "Dining Area", category: "Dining" },
    { id: 4, src: gallery4, alt: "Spa Center", category: "Wellness" },
  ];

  // Key features
  const keyFeatures = [
    {
      title: "Luxury Accommodation",
      desc: "50+ elegantly designed rooms and suites",
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

  // Stats
  const stats = [
    { value: "50+", label: "Rooms & Suites" },
    { value: "1000+", label: "Happy Guests" },
    { value: "15+", label: "Event Spaces" },
    { value: "24/7", label: "Concierge Service" },
  ];

  return (
    <div>
      {/* ==================== CINEMATIC HERO ==================== */}
      <CinematicHero />

      {/* ==================== REST OF PAGE ==================== */}
      <CinematicBackground>
        {/* ---------- Why Choose Section ---------- */}
        <section style={styles.section}>
          <div className="container" style={styles.container}>
            <div className="cin-reveal" style={styles.sectionHeader}>
              <span style={styles.eyebrow}>EXPERIENCE EXCELLENCE</span>
              <h2 style={styles.sectionTitle}>
                Why Choose <span className="cin-grad-text">Kwela Inn</span>?
              </h2>
              <p style={styles.sectionSubtitle}>
                Experience unparalleled hospitality and comfort at our
                award-winning resort.
              </p>
            </div>

            <div style={styles.featuresGrid}>
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="cin-reveal cin-tilt"
                  style={{
                    ...styles.featureCard,
                    transitionDelay: `${index * 0.12}s`,
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

            <div className="cin-reveal" style={styles.centerButton}>
              <Link to="/about" className="cin-btn cin-btn-primary">
                Learn More About Us →
              </Link>
            </div>
          </div>
        </section>

        {/* ---------- Featured Rooms ---------- */}
        <section style={{ ...styles.section, backgroundColor: "transparent" }}>
          <div className="container" style={styles.container}>
            <div className="cin-reveal" style={styles.sectionHeader}>
              <span style={styles.eyebrow}>ACCOMMODATIONS</span>
              <h2 style={styles.sectionTitle}>
                Featured <span className="cin-grad-text">Accommodations</span>
              </h2>
              <p style={styles.sectionSubtitle}>
                Discover our most popular rooms and suites designed for your
                comfort.
              </p>
            </div>

            <div style={styles.roomsGrid}>
              {featuredRooms.map((room, index) => (
                <div
                  key={room.id}
                  className="cin-reveal cin-tilt"
                  style={{
                    ...styles.roomCard,
                    transitionDelay: `${index * 0.15}s`,
                  }}
                >
                  <div style={styles.imageContainer}>
                    <img
                      src={room.image}
                      alt={room.name}
                      style={styles.roomImage}
                    />
                    <div style={styles.imageGradient} />
                    <div style={styles.roomBadge}>⭐ Featured</div>
                  </div>
                  <div style={styles.roomContent}>
                    <h3 style={styles.roomName}>{room.name}</h3>
                    <p style={styles.roomDesc}>{room.description}</p>
                    <div style={styles.priceContainer}>
                      <p style={styles.price}>{room.price}</p>
                      <span style={styles.arrow}>→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cin-reveal" style={styles.centerButton}>
              <Link to="/rooms" className="cin-btn cin-btn-primary">
                View All Rooms & Suites →
              </Link>
            </div>
          </div>
        </section>

        {/* ---------- Stats Band ---------- */}
        <section style={styles.statsBand}>
          <div className="container" style={styles.container}>
            <div style={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="cin-reveal"
                  style={{
                    ...styles.statCard,
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  <div style={styles.statValue}>{stat.value}</div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Gallery Preview ---------- */}
        <section style={styles.section}>
          <div className="container" style={styles.container}>
            <div className="cin-reveal" style={styles.sectionHeader}>
              <span style={styles.eyebrow}>VISUAL TOUR</span>
              <h2 style={styles.sectionTitle}>
                Glimpse of <span className="cin-grad-text">Our Resort</span>
              </h2>
              <p style={styles.sectionSubtitle}>
                Take a visual tour of our beautiful facilities and surroundings.
              </p>
            </div>

            <div style={styles.galleryGrid}>
              {featuredGallery.map((image, index) => (
                <div
                  key={image.id}
                  className="cin-reveal-zoom"
                  style={{
                    ...styles.galleryItem,
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={styles.galleryImage}
                  />
                  <div style={styles.imageOverlay}>
                    <p style={styles.imageCategory}>{image.category}</p>
                    <p style={styles.imageCaption}>{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cin-reveal" style={styles.centerButton}>
              <Link to="/gallery" className="cin-btn cin-btn-primary">
                Explore Full Gallery →
              </Link>
            </div>
          </div>
        </section>

        {/* ---------- Contact CTA ---------- */}
        <section style={{ ...styles.section, paddingBottom: "100px" }}>
          <div className="container" style={styles.container}>
            <div className="cin-glass cin-reveal" style={styles.ctaCard}>
              <div style={styles.ctaOrb1} />
              <div style={styles.ctaOrb2} />

              <div style={styles.ctaContent}>
                <h2 style={styles.ctaTitle}>
                  Ready to Experience{" "}
                  <span style={{ color: "#fbbf24" }}>Luxury</span>?
                </h2>
                <p style={styles.ctaText}>
                  Contact us today to book your stay or inquire about our event
                  hosting services. Our team is available 24/7 to assist you.
                </p>
                <div style={styles.ctaButtons}>
                  <Link to="/contact" className="cin-btn cin-btn-gold">
                    ✨ Get In Touch
                  </Link>
                  <a href="tel:+27765117835" className="cin-btn cin-btn-ghost">
                    📞 +27 76 511 7835
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CinematicBackground>
    </div>
  );
};

/* ==================== STYLES ==================== */
const styles = {
  section: {
    padding: "80px 0",
    position: "relative",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  sectionHeader: {
    textAlign: "center",
    maxWidth: "700px",
    margin: "0 auto 60px",
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
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
    fontWeight: "800",
    color: "#1e293b",
    margin: "0 0 16px",
    lineHeight: "1.15",
    letterSpacing: "-0.02em",
  },
  sectionSubtitle: {
    fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
    color: "#64748b",
    lineHeight: 1.7,
    margin: 0,
  },

  /* ---------- Features ---------- */
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
    marginBottom: "50px",
  },
  featureCard: {
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    padding: "32px 26px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
    border: "1px solid rgba(226, 232, 240, 0.8)",
    textAlign: "center",
    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
    cursor: "pointer",
  },
  featureIconWrapper: {
    width: "70px",
    height: "70px",
    margin: "0 auto 20px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #0d9488, #14b8a6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 25px rgba(13, 148, 136, 0.25)",
  },
  featureIcon: {
    fontSize: "1.9rem",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
  },
  featureTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#1e293b",
    margin: "0 0 10px",
  },
  featureDesc: {
    color: "#64748b",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    margin: 0,
  },

  /* ---------- Rooms ---------- */
  roomsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
    marginBottom: "50px",
  },
  roomCard: {
    background: "white",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.08)",
    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
    cursor: "pointer",
  },
  imageContainer: {
    height: "240px",
    overflow: "hidden",
    position: "relative",
  },
  roomImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  imageGradient: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 60%)",
    pointerEvents: "none",
  },
  roomBadge: {
    position: "absolute",
    top: "16px",
    left: "16px",
    padding: "6px 14px",
    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    color: "#1e293b",
    fontSize: "0.75rem",
    fontWeight: "700",
    borderRadius: "999px",
    letterSpacing: "0.05em",
    boxShadow: "0 4px 12px rgba(251, 191, 36, 0.4)",
  },
  roomContent: {
    padding: "26px",
  },
  roomName: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#1e293b",
    margin: "0 0 10px",
  },
  roomDesc: {
    color: "#64748b",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    marginBottom: "20px",
  },
  priceContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "18px",
    borderTop: "1px solid #f1f5f9",
  },
  price: {
    fontSize: "1.25rem",
    fontWeight: "800",
    color: "#0d9488",
    margin: 0,
  },
  arrow: {
    fontSize: "1.2rem",
    color: "#0d9488",
    fontWeight: "700",
  },

  /* ---------- Stats Band ---------- */
  statsBand: {
    padding: "60px 0",
    background: "linear-gradient(135deg, #0d9488, #0f766e)",
    position: "relative",
    overflow: "hidden",
    margin: "40px 0",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "30px",
    textAlign: "center",
  },
  statCard: {
    padding: "20px",
  },
  statValue: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: "900",
    color: "white",
    marginBottom: "8px",
    letterSpacing: "-0.02em",
    textShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },
  statLabel: {
    fontSize: "0.9rem",
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "500",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },

  /* ---------- Gallery ---------- */
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "50px",
  },
  galleryItem: {
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    height: "260px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
    cursor: "pointer",
    transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  galleryImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  imageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "20px",
    background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
    color: "white",
    transform: "translateY(20px)",
    opacity: 0,
    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  imageCaption: {
    margin: "4px 0 0",
    fontSize: "1.05rem",
    fontWeight: "600",
  },
  imageCategory: {
    margin: 0,
    fontSize: "0.75rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#14b8a6",
    fontWeight: "700",
  },

  /* ---------- CTA ---------- */
  ctaCard: {
    padding: "60px 40px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    background:
      "linear-gradient(135deg, rgba(13,148,136,0.95), rgba(15,118,110,0.95))",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    position: "relative",
    overflow: "hidden",
    borderRadius: "28px",
  },
  ctaOrb1: {
    position: "absolute",
    top: "-40%",
    right: "-20%",
    width: "400px",
    height: "400px",
    background:
      "radial-gradient(circle, rgba(20, 184, 166, 0.5) 0%, transparent 70%)",
    filter: "blur(40px)",
    pointerEvents: "none",
  },
  ctaOrb2: {
    position: "absolute",
    bottom: "-40%",
    left: "-20%",
    width: "400px",
    height: "400px",
    background:
      "radial-gradient(circle, rgba(251, 191, 36, 0.35) 0%, transparent 70%)",
    filter: "blur(40px)",
    pointerEvents: "none",
  },
  ctaContent: {
    position: "relative",
    zIndex: 1,
  },
  ctaTitle: {
    fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
    fontWeight: "800",
    color: "white",
    margin: "0 0 20px",
    lineHeight: 1.2,
  },
  ctaText: {
    fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
    color: "rgba(255, 255, 255, 0.92)",
    maxWidth: "620px",
    margin: "0 auto 32px",
    lineHeight: 1.7,
  },
  ctaButtons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  centerButton: {
    textAlign: "center",
    marginTop: "20px",
  },
};

/* ---------- Responsive tweaks ---------- */
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @media (max-width: 768px) {
      section { padding: 60px 0 !important; }
    }
    @media (max-width: 480px) {
      section { padding: 50px 0 !important; }
    }
  `;
  document.head.appendChild(style);
}

export default Home;
