import { useState } from "react";
import room1 from "../pictures/room-inside-2.jpeg";
import room2 from "../pictures/room-inside-3.jpeg";
import room3 from "../pictures/room-kitchen.jpeg";
import room4 from "../pictures/room-outside.jpeg";
import {
  FaWifi,
  FaTv,
  FaCoffee,
  FaSnowflake,
  FaShower,
  FaBed,
  FaSwimmingPool,
  FaCar,
  FaUtensils,
  FaConciergeBell,
} from "react-icons/fa";
import {
  MdLocalBar,
  MdRoomService,
  MdAcUnit,
  MdSecurity,
} from "react-icons/md";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const roomTypes = [
    {
      id: 1,
      name: "Presidential Suite",
      category: "Luxury",
      description:
        "Ultimate luxury with panoramic mountain views, private jacuzzi, and personalized butler service.",
      detailedDescription:
        "Our most exclusive suite features a separate living area, dining room, private study, and expansive balcony with breathtaking views. Includes 24/7 butler service and complimentary champagne on arrival.",
      price: "From ZAR 4,500/night",
      originalPrice: "ZAR 5,200",
      discount: "15% off",
      image: room1,
      size: "120 m²",
      capacity: "4 guests",
      bedType: "King & Queen",
      amenities: [
        { icon: <FaWifi />, text: "High-speed Wi-Fi" },
        { icon: <FaTv />, text: '65" Smart TV' },
        { icon: <FaSnowflake />, text: "Air Conditioning" },
        { icon: <MdLocalBar />, text: "Premium Minibar" },
        { icon: <FaShower />, text: "Rainfall Shower + Jacuzzi" },
        { icon: <FaConciergeBell />, text: "24/7 Butler Service" },
        { icon: <MdRoomService />, text: "24-hour Room Service" },
        { icon: <FaSwimmingPool />, text: "Private Pool Access" },
      ],
      features: [
        "Private Balcony",
        "Fireplace",
        "Study Room",
        "Wine Cellar",
        "Bose Sound System",
      ],
      rating: 4.9,
      reviews: 128,
      popular: true,
    },
    {
      id: 2,
      name: "Deluxe Garden Suite",
      category: "Premium",
      description:
        "Spacious suite opening to private garden, perfect for couples seeking romance.",
      detailedDescription:
        "Wake up to garden views in this beautifully appointed suite. Features a four-poster bed, sitting area with fireplace, and French doors opening to a private garden patio.",
      price: "From ZAR 2,800/night",
      originalPrice: "ZAR 3,200",
      discount: "12% off",
      image: room2,
      size: "85 m²",
      capacity: "2 guests",
      bedType: "King Bed",
      amenities: [
        { icon: <FaWifi />, text: "High-speed Wi-Fi" },
        { icon: <FaTv />, text: '55" Smart TV' },
        { icon: <FaCoffee />, text: "Nespresso Machine" },
        { icon: <FaShower />, text: "Rainfall Shower" },
        { icon: <FaBed />, text: "Premium Bedding" },
        { icon: <MdAcUnit />, text: "Climate Control" },
        { icon: <MdSecurity />, text: "In-room Safe" },
        { icon: <FaUtensils />, text: "Kitchenette" },
      ],
      features: [
        "Garden Access",
        "Fireplace",
        "Private Patio",
        "Bathrobes & Slippers",
      ],
      rating: 4.7,
      reviews: 94,
      popular: true,
    },
    {
      id: 3,
      name: "Executive Family Room",
      category: "Family",
      description:
        "Perfect for families with interconnected rooms and child-friendly amenities.",
      detailedDescription:
        "Two interconnected rooms with separate sleeping areas for parents and children. Includes gaming console, children's entertainment package, and baby amenities on request.",
      price: "From ZAR 2,200/night",
      image: room3,
      size: "75 m²",
      capacity: "4 guests",
      bedType: "Queen + Twin Beds",
      amenities: [
        { icon: <FaWifi />, text: "High-speed Wi-Fi" },
        { icon: <FaTv />, text: "Dual Smart TVs" },
        { icon: <FaCoffee />, text: "Coffee Station" },
        { icon: <FaBed />, text: "Interconnected Rooms" },
        { icon: <MdSecurity />, text: "Child Safety Features" },
        { icon: <FaUtensils />, text: "Microwave & Fridge" },
        { icon: <FaCar />, text: "Free Parking" },
        { icon: <FaConciergeBell />, text: "Family Concierge" },
      ],
      features: [
        "Interconnected Rooms",
        "Game Console",
        "Baby Amenities",
        "Extra Beds Available",
      ],
      rating: 4.6,
      reviews: 156,
      familyFriendly: true,
    },
    {
      id: 4,
      name: "Standard Superior Room",
      category: "Standard",
      description:
        "Comfortable and elegant room with all essential amenities for a pleasant stay.",
      detailedDescription:
        "Well-appointed room with modern comforts, work desk, and garden views. Perfect for business travelers or couples on a weekend getaway.",
      price: "From ZAR 1,500/night",
      image: room4,
      size: "45 m²",
      capacity: "2 guests",
      bedType: "Queen Bed",
      amenities: [
        { icon: <FaWifi />, text: "High-speed Wi-Fi" },
        { icon: <FaTv />, text: '43" Smart TV' },
        { icon: <FaCoffee />, text: "Tea/Coffee Maker" },
        { icon: <FaSnowflake />, text: "Air Conditioning" },
        { icon: <FaShower />, text: "Modern Bathroom" },
        { icon: <MdSecurity />, text: "Electronic Safe" },
        { icon: <FaCar />, text: "Free Parking" },
        { icon: <FaConciergeBell />, text: "Daily Housekeeping" },
      ],
      features: [
        "Work Desk",
        "Garden View",
        "Blackout Curtains",
        "Ironing Facilities",
      ],
      rating: 4.4,
      reviews: 203,
      bestValue: true,
    },
  ];

  const roomFilters = ["All", "Luxury", "Premium", "Family", "Standard"];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredRooms =
    activeFilter === "All"
      ? roomTypes
      : roomTypes.filter((room) => room.category === activeFilter);

  const handleViewDetails = (room) => {
    setSelectedRoom(room);
    document.body.style.overflow = "hidden";
  };

  const closeDetails = () => {
    setSelectedRoom(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* ===== FIX: real CSS so media queries and :hover actually work ===== */}
      <style>{`
        .rooms-hero {
          background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%);
          color: white;
          padding: 80px 0 60px;
          margin-top: 70px;
          text-align: center;
        }
        .rooms-hero-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .rooms-hero-title {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .rooms-hero-subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        .rooms-hero-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }
        .rooms-stat-item { text-align: center; }
        .rooms-stat-number {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .rooms-stat-label { font-size: 0.9rem; opacity: 0.8; }

        .rooms-section { padding: 60px 0; }
        .rooms-section-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 0 20px;
        }
        .rooms-section-title {
          font-size: 2.3rem;
          color: #1e293b;
          margin-bottom: 15px;
          font-weight: 700;
        }
        .rooms-section-subtitle {
          color: #64748b;
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .rooms-filter-container { margin-bottom: 30px; padding: 0 20px; }
        .rooms-filter-buttons {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .rooms-filter-btn {
          padding: 8px 20px;
          background-color: #f1f5f9;
          border: none;
          border-radius: 30px;
          color: #475569;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .rooms-filter-btn.active {
          background-color: #0d9488;
          color: white;
        }
        .rooms-filter-count {
          background-color: rgba(255,255,255,0.2);
          padding: 2px 6px;
          border-radius: 10px;
          font-size: 0.75rem;
        }
        .rooms-filter-btn.active .rooms-filter-count {
          background-color: rgba(255,255,255,0.35);
        }

        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
          padding: 0 20px;
        }

        .room-card {
          background-color: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
        }
        .room-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
        }

        .card-badges {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 2;
        }
        .badge {
          color: white;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .badge-popular { background-color: #f59e0b; }
        .badge-family { background-color: #3b82f6; }
        .badge-value { background-color: #10b981; }
        .badge-discount { background-color: #ef4444; }

        .room-image-container {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .room-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .room-image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.7));
          padding: 15px;
          color: white;
        }
        .room-category {
          background-color: rgba(255,255,255,0.2);
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          backdrop-filter: blur(5px);
        }
        .room-rating {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }
        .rating-stars { color: #fbbf24; font-size: 0.9rem; }
        .rating-text { font-size: 0.8rem; opacity: 0.9; }

        .room-content { padding: 20px; }
        .room-header { margin-bottom: 12px; }
        .room-name {
          font-size: 1.5rem;
          color: #1e293b;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .room-meta {
          display: flex;
          gap: 15px;
          color: #64748b;
          font-size: 0.85rem;
          flex-wrap: wrap;
        }
        .meta-item { display: flex; align-items: center; gap: 5px; }
        .room-description {
          color: #64748b;
          margin-bottom: 15px;
          line-height: 1.6;
          font-size: 0.9rem;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 15px;
        }
        .amenity-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #475569;
          font-size: 0.85rem;
        }
        .amenity-icon { color: #0d9488; font-size: 0.9rem; }
        .amenity-text { font-size: 0.8rem; }

        .features {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }
        .feature-tag {
          background-color: #f0f9ff;
          color: #0d9488;
          padding: 5px 10px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        .more-features {
          color: #94a3b8;
          font-size: 0.75rem;
          align-self: center;
        }

        .action-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }
        .price-section { flex: 1; min-width: 150px; }
        .original-price {
          color: #94a3b8;
          text-decoration: line-through;
          font-size: 0.85rem;
          margin-bottom: 2px;
        }
        .price {
          font-size: 1.5rem;
          color: #0d9488;
          font-weight: bold;
          margin-bottom: 2px;
        }
        .price-note { color: #94a3b8; font-size: 0.75rem; }

        .action-buttons { display: flex; gap: 10px; }
        .details-button,
        .book-button {
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.3s;
          border: 2px solid #0d9488;
        }
        .details-button {
          background-color: transparent;
          color: #0d9488;
        }
        .details-button:hover {
          background-color: #0d9488;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(13, 148, 136, 0.2);
        }
        .book-button {
          background-color: #0d9488;
          color: white;
          padding: 8px 20px;
        }
        .book-button:hover {
          background-color: #0f766e;
          border-color: #0f766e;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(13, 148, 136, 0.2);
        }

        .all-amenities {
          background-color: #f8fafc;
          padding: 40px 20px;
          border-radius: 12px;
          margin-bottom: 40px;
        }
        .amenities-title {
          font-size: 1.6rem;
          color: #1e293b;
          margin-bottom: 25px;
          text-align: center;
        }
        .amenities-grid-full {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }
        .amenity-category-title {
          color: #0d9488;
          font-size: 1.1rem;
          margin-bottom: 12px;
          font-weight: 600;
        }
        .amenity-list { list-style: none; padding: 0; margin: 0; }
        .amenity-list-item {
          color: #475569;
          padding: 6px 0;
          border-bottom: 1px solid #e2e8f0;
          font-size: 0.9rem;
        }

        .cta-section {
          text-align: center;
          padding: 40px 20px;
          background-color: #1e293b;
          border-radius: 12px;
          color: white;
        }
        .cta-title { font-size: 1.6rem; margin-bottom: 15px; }
        .cta-text {
          font-size: 1rem;
          opacity: 0.9;
          margin-bottom: 25px;
          line-height: 1.6;
        }
        .cta-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-button-primary,
        .cta-button-secondary {
          padding: 10px 25px;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .cta-button-primary {
          background-color: #0d9488;
          color: white;
          border: none;
        }
        .cta-button-primary:hover {
          background-color: #0f766e;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(13, 148, 136, 0.2);
        }
        .cta-button-secondary {
          background-color: transparent;
          color: white;
          border: 2px solid white;
          text-decoration: none;
          display: inline-block;
        }
        .cta-button-secondary:hover {
          background-color: white;
          color: #1e293b;
          transform: translateY(-2px);
        }

        /* ===== Modal ===== */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .modal-content {
          background-color: white;
          border-radius: 12px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }
        .modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background-color: rgba(0,0,0,0.1);
          color: #1e293b;
          border: none;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          font-size: 1rem;
          cursor: pointer;
          z-index: 2001;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .modal-close:hover { background-color: rgba(0,0,0,0.2); }
        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .modal-image { height: 450px; }
        .modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-top-left-radius: 12px;
          border-bottom-left-radius: 12px;
        }
        .modal-info { padding: 30px; }
        .modal-title {
          font-size: 1.8rem;
          color: #1e293b;
          margin-bottom: 8px;
        }
        .modal-category {
          color: #0d9488;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 15px;
        }
        .modal-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 20px;
          padding: 15px;
          background-color: #f8fafc;
          border-radius: 8px;
        }
        .modal-stat { color: #475569; font-size: 0.9rem; }
        .modal-description {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 0.95rem;
        }
        .modal-amenities { margin-bottom: 25px; }
        .modal-amenities h4 { margin-bottom: 12px; }
        .modal-amenities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .modal-amenity {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #475569;
          font-size: 0.9rem;
        }
        .modal-features { margin-bottom: 25px; }
        .modal-features h4 { margin-bottom: 12px; }
        .modal-features-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .modal-feature-tag {
          background-color: #f0f9ff;
          color: #0d9488;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .modal-action {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid #e2e8f0;
          flex-wrap: wrap;
          gap: 15px;
        }
        .modal-price { flex: 1; }
        .modal-price-main {
          font-size: 1.8rem;
          color: #0d9488;
          font-weight: bold;
        }
        .modal-price-old {
          color: #94a3b8;
          text-decoration: line-through;
          font-size: 1rem;
        }
        .modal-book-button {
          padding: 12px 30px;
          background-color: #0d9488;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .modal-book-button:hover {
          background-color: #0f766e;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(13, 148, 136, 0.2);
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 992px) {
          .modal-grid { grid-template-columns: 1fr; }
          .modal-image { height: 300px; }
          .modal-img {
            border-radius: 12px 12px 0 0;
            border-bottom-left-radius: 0;
          }
        }

        @media (max-width: 768px) {
          .rooms-hero { padding: 60px 0 40px; }
          .rooms-hero-title { font-size: 2.2rem; }
          .rooms-hero-subtitle { font-size: 1rem; }
          .rooms-hero-stats { gap: 30px; }
          .rooms-section { padding: 40px 0; }
          .rooms-section-title { font-size: 1.8rem; }
          .rooms-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
          }
          .all-amenities, .cta-section { padding: 30px 20px; }
          .amenities-title, .cta-title { font-size: 1.4rem; }
          .modal-info { padding: 25px; }
        }

        @media (max-width: 480px) {
          .rooms-hero { padding: 40px 0 30px; margin-top: 60px; }
          .rooms-hero-title { font-size: 1.8rem; }
          .rooms-hero-subtitle { font-size: 0.9rem; }
          .rooms-hero-stats { gap: 20px; }
          .rooms-stat-number { font-size: 1.5rem; }
          .rooms-stat-label { font-size: 0.8rem; }
          .rooms-section { padding: 30px 0; }
          .rooms-section-title { font-size: 1.5rem; }
          .rooms-section-subtitle { font-size: 0.9rem; }
          .rooms-filter-btn { padding: 6px 16px; font-size: 0.85rem; }
          .rooms-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0 15px;
          }
          .room-image-container { height: 200px; }
          .room-name { font-size: 1.3rem; }
          .room-meta { font-size: 0.8rem; gap: 12px; }
          .room-description { font-size: 0.85rem; }
          .action-section { flex-direction: column; align-items: stretch; }
          .action-buttons { width: 100%; }
          .details-button, .book-button {
            flex: 1;
            padding: 10px;
            text-align: center;
          }
          .card-badges { top: 8px; left: 8px; }
          .badge { padding: 4px 10px; font-size: 0.7rem; }
          .all-amenities { padding: 20px 15px; }
          .amenities-grid-full { grid-template-columns: 1fr; gap: 20px; }
          .amenities-title { font-size: 1.2rem; margin-bottom: 20px; }
          .amenity-category-title { font-size: 1rem; }
          .amenity-list-item { font-size: 0.85rem; }
          .cta-section { padding: 30px 15px; }
          .cta-title { font-size: 1.2rem; }
          .cta-text { font-size: 0.9rem; }
          .cta-button-primary, .cta-button-secondary {
            padding: 8px 20px;
            font-size: 0.9rem;
            flex: 1;
            text-align: center;
          }
          .modal-overlay { padding: 10px; }
          .modal-info { padding: 20px; }
          .modal-title { font-size: 1.4rem; }
          .modal-stats { grid-template-columns: 1fr; gap: 8px; }
          .modal-amenities-grid { grid-template-columns: 1fr; }
          .modal-action { flex-direction: column; align-items: stretch; }
          .modal-book-button { width: 100%; padding: 12px; }
        }
      `}</style>

      <section className="rooms-hero">
        <div className="container">
          <div className="rooms-hero-content">
            <h1 className="rooms-hero-title">Luxury Accommodations</h1>
            <p className="rooms-hero-subtitle">
              Discover our exquisite collection of rooms and suites, each
              designed to provide exceptional comfort and unforgettable
              experiences.
            </p>
            <div className="rooms-hero-stats">
              <div className="rooms-stat-item">
                <div className="rooms-stat-number">4.7</div>
                <div className="rooms-stat-label">Average Rating</div>
              </div>
              <div className="rooms-stat-item">
                <div className="rooms-stat-number">24/7</div>
                <div className="rooms-stat-label">Room Service</div>
              </div>
              <div className="rooms-stat-item">
                <div className="rooms-stat-number">50+</div>
                <div className="rooms-stat-label">Amenities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rooms-section">
        <div className="container">
          <div className="rooms-section-header">
            <h2 className="rooms-section-title">Our Room Collection</h2>
            <p className="rooms-section-subtitle">
              From luxurious suites to comfortable family rooms, find your
              perfect retreat
            </p>
          </div>

          <div className="rooms-filter-container">
            <div className="rooms-filter-buttons">
              {roomFilters.map((filter) => (
                <button
                  key={filter}
                  className={`rooms-filter-btn ${activeFilter === filter ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                  {filter !== "All" && (
                    <span className="rooms-filter-count">
                      {roomTypes.filter((r) => r.category === filter).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="rooms-grid">
            {filteredRooms.map((room) => (
              <div key={room.id} className="room-card">
                <div className="card-badges">
                  {room.popular && (
                    <span className="badge badge-popular">Most Popular</span>
                  )}
                  {room.familyFriendly && (
                    <span className="badge badge-family">Family Friendly</span>
                  )}
                  {room.bestValue && (
                    <span className="badge badge-value">Best Value</span>
                  )}
                  {room.discount && (
                    <span className="badge badge-discount">
                      {room.discount}
                    </span>
                  )}
                </div>

                <div className="room-image-container">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="room-image"
                  />
                  <div className="room-image-overlay">
                    <span className="room-category">{room.category}</span>
                    <div className="room-rating">
                      <span className="rating-stars">★★★★★</span>
                      <span className="rating-text">
                        {room.rating} ({room.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="room-content">
                  <div className="room-header">
                    <h3 className="room-name">{room.name}</h3>
                    <div className="room-meta">
                      <span className="meta-item">📏 {room.size}</span>
                      <span className="meta-item">👥 {room.capacity}</span>
                      <span className="meta-item">🛏️ {room.bedType}</span>
                    </div>
                  </div>

                  <p className="room-description">{room.description}</p>

                  <div className="amenities-grid">
                    {room.amenities.slice(0, 4).map((amenity, index) => (
                      <div key={index} className="amenity-item">
                        <span className="amenity-icon">{amenity.icon}</span>
                        <span className="amenity-text">{amenity.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="features">
                    {room.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                    {room.features.length > 3 && (
                      <span className="more-features">
                        +{room.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="action-section">
                    <div className="price-section">
                      {room.originalPrice && (
                        <div className="original-price">
                          {room.originalPrice}
                        </div>
                      )}
                      <div className="price">{room.price}</div>
                      <div className="price-note">Including taxes & fees</div>
                    </div>
                    <div className="action-buttons">
                      <button
                        className="details-button"
                        onClick={() => handleViewDetails(room)}
                      >
                        View Details
                      </button>
                      <button className="book-button">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="all-amenities">
            <h3 className="amenities-title">All Room Amenities</h3>
            <div className="amenities-grid-full">
              <div className="amenity-category">
                <h4 className="amenity-category-title">Technology</h4>
                <ul className="amenity-list">
                  <li className="amenity-list-item">
                    High-speed Wi-Fi throughout
                  </li>
                  <li className="amenity-list-item">
                    Smart TVs with streaming
                  </li>
                  <li className="amenity-list-item">USB charging ports</li>
                  <li className="amenity-list-item">Bluetooth speakers</li>
                </ul>
              </div>
              <div className="amenity-category">
                <h4 className="amenity-category-title">Comfort</h4>
                <ul className="amenity-list">
                  <li className="amenity-list-item">
                    Premium bedding & pillows
                  </li>
                  <li className="amenity-list-item">Blackout curtains</li>
                  <li className="amenity-list-item">
                    Individual climate control
                  </li>
                  <li className="amenity-list-item">Soundproof windows</li>
                </ul>
              </div>
              <div className="amenity-category">
                <h4 className="amenity-category-title">Bathroom</h4>
                <ul className="amenity-list">
                  <li className="amenity-list-item">Rainfall showers</li>
                  <li className="amenity-list-item">Luxury toiletries</li>
                  <li className="amenity-list-item">Hairdryers</li>
                  <li className="amenity-list-item">Bathrobes & slippers</li>
                </ul>
              </div>
              <div className="amenity-category">
                <h4 className="amenity-category-title">Services</h4>
                <ul className="amenity-list">
                  <li className="amenity-list-item">24-hour room service</li>
                  <li className="amenity-list-item">Daily housekeeping</li>
                  <li className="amenity-list-item">Turndown service</li>
                  <li className="amenity-list-item">Laundry & dry cleaning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <div className="cta-content">
              <h3 className="cta-title">Need Help Choosing?</h3>
              <p className="cta-text">
                Our concierge team is available 24/7 to help you select the
                perfect room and arrange any special requests.
              </p>
              <div className="cta-buttons">
                <button className="cta-button-primary">
                  Contact Concierge
                </button>
                <a href="tel:+27765117835" className="cta-button-secondary">
                  Call: +27 76 511 7835
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedRoom && (
        <div className="modal-overlay" onClick={closeDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeDetails}>
              ✕
            </button>

            <div className="modal-grid">
              <div className="modal-image">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="modal-img"
                />
              </div>

              <div className="modal-info">
                <h2 className="modal-title">{selectedRoom.name}</h2>
                <p className="modal-category">{selectedRoom.category} Suite</p>

                <div className="modal-stats">
                  <div className="modal-stat">
                    <strong>Size:</strong> {selectedRoom.size}
                  </div>
                  <div className="modal-stat">
                    <strong>Capacity:</strong> {selectedRoom.capacity}
                  </div>
                  <div className="modal-stat">
                    <strong>Bed Type:</strong> {selectedRoom.bedType}
                  </div>
                  <div className="modal-stat">
                    <strong>Rating:</strong> {selectedRoom.rating}/5 (
                    {selectedRoom.reviews} reviews)
                  </div>
                </div>

                <p className="modal-description">
                  {selectedRoom.detailedDescription}
                </p>

                <div className="modal-amenities">
                  <h4>All Amenities</h4>
                  <div className="modal-amenities-grid">
                    {selectedRoom.amenities.map((amenity, index) => (
                      <div key={index} className="modal-amenity">
                        {amenity.icon}
                        <span>{amenity.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-features">
                  <h4>Special Features</h4>
                  <div className="modal-features-list">
                    {selectedRoom.features.map((feature, index) => (
                      <span key={index} className="modal-feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-action">
                  <div className="modal-price">
                    <div className="modal-price-main">{selectedRoom.price}</div>
                    {selectedRoom.originalPrice && (
                      <div className="modal-price-old">
                        {selectedRoom.originalPrice}
                      </div>
                    )}
                  </div>
                  <button className="modal-book-button">Book This Room</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rooms;
