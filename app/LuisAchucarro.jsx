"use client";
import { useState, useEffect, useRef } from "react";

const translations = {
  es: {
    nav: { services: "Servicios", about: "Sobre Mí", experience: "Experiencia", contact: "Contacto" },
    hero: {
      pre: "Chef Ejecutivo · Buenos Aires",
      title1: "Cocinas",
      title2: "del Mundo",
      subtitle: "Dos décadas llevando la alta gastronomía internacional a las mesas más distinguidas de la Argentina y el mundo diplomático.",
      cta: "Agendar una Consulta",
    },
    services: {
      tag: "Servicios",
      title: "Experiencias a medida",
      subtitle: "Cada evento es único. Cada menú, una obra pensada para la ocasión.",
      items: [
        { title: "Cenas Privadas", desc: "Experiencias gastronómicas íntimas en su hogar o locación elegida, con menús personalizados que recorren los sabores del mundo." },
        { title: "Recepciones & Cócteles", desc: "Propuestas sofisticadas para encuentros diplomáticos, corporativos y sociales de alto nivel." },
        { title: "Eventos Corporativos", desc: "Gastronomía de excelencia para lanzamientos, cierres de año y reuniones ejecutivas que necesitan estar a la altura." },
        { title: "Celebraciones Especiales", desc: "Cumpleaños, aniversarios y momentos que merecen una mesa memorable. Del concepto al último detalle." },
      ],
    },
    about: {
      tag: "Sobre Luis",
      title: "Donde el protocolo se encuentra con la pasión",
      p1: "Con más de 20 años de trayectoria, Luis Achucarro ha construido una carrera al servicio de quienes entienden que la mesa es un lenguaje.",
      p2: "Formado en las cocinas del mundo y curtido en el exigente circuito diplomático, su cocina fusiona técnica internacional con la calidez que define a la hospitalidad argentina.",
      p3: "Desde cenas de Estado hasta celebraciones íntimas, cada plato que sale de sus manos es una declaración de respeto por el producto, la cultura y el comensal.",
      stats: [
        { number: "20+", label: "Años de experiencia" },
        { number: "5", label: "Continentes explorados" },
        { number: "∞", label: "Cocinas del mundo" },
      ],
    },
    experience: {
      tag: "Trayectoria",
      title: "Un recorrido por las mesas del mundo",
      items: [
        { title: "Cocina Diplomática", desc: "Años de servicio para embajadas y cuerpo diplomático, dominando los códigos del protocolo internacional y las preferencias culinarias de cada cultura." },
        { title: "Versatilidad Multicultural", desc: "Cocina francesa, asiática, mediterránea, latinoamericana y de Medio Oriente. Cada tradición culinaria es un capítulo de su repertorio." },
        { title: "Servicio Integral", desc: "Del diseño del menú a la coordinación del servicio, pasando por el montaje y la experiencia completa. Todo bajo una misma dirección." },
      ],
    },
    contact: {
      tag: "Contacto",
      title: "Hablemos de su próximo evento",
      subtitle: "Complete el formulario y nos pondremos en contacto dentro de las 24 horas para coordinar una consulta personalizada.",
      name: "Nombre completo",
      email: "Email",
      phone: "Teléfono",
      event: "Tipo de evento",
      eventOptions: ["Cena privada", "Recepción / Cóctel", "Evento corporativo", "Celebración especial", "Otro"],
      guests: "Cantidad estimada de invitados",
      date: "Fecha tentativa",
      message: "Cuéntenos sobre su evento",
      send: "Enviar Consulta",
      or: "o escríbanos por",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      tagline: "Cocinas del Mundo · Buenos Aires, Argentina",
    },
  },
  en: {
    nav: { services: "Services", about: "About", experience: "Experience", contact: "Contact" },
    hero: {
      pre: "Executive Chef · Buenos Aires",
      title1: "World",
      title2: "Cuisine",
      subtitle: "Two decades bringing international haute cuisine to Argentina's most distinguished tables and the diplomatic world.",
      cta: "Schedule a Consultation",
    },
    services: {
      tag: "Services",
      title: "Bespoke Experiences",
      subtitle: "Every event is unique. Every menu, a work of art crafted for the occasion.",
      items: [
        { title: "Private Dinners", desc: "Intimate culinary experiences at your home or chosen venue, with personalized menus that traverse the world's flavors." },
        { title: "Receptions & Cocktails", desc: "Sophisticated proposals for diplomatic, corporate, and high-level social gatherings." },
        { title: "Corporate Events", desc: "Excellence in gastronomy for launches, year-end celebrations, and executive meetings that demand the highest standards." },
        { title: "Special Celebrations", desc: "Birthdays, anniversaries, and moments that deserve a memorable table. From concept to the last detail." },
      ],
    },
    about: {
      tag: "About Luis",
      title: "Where protocol meets passion",
      p1: "With over 20 years of experience, Luis Achucarro has built a career serving those who understand that the table is a language.",
      p2: "Trained in kitchens around the world and forged in the demanding diplomatic circuit, his cuisine fuses international technique with the warmth that defines Argentine hospitality.",
      p3: "From state dinners to intimate celebrations, every dish from his hands is a statement of respect for the product, the culture, and the guest.",
      stats: [
        { number: "20+", label: "Years of experience" },
        { number: "5", label: "Continents explored" },
        { number: "∞", label: "World cuisines" },
      ],
    },
    experience: {
      tag: "Background",
      title: "A journey through the world's tables",
      items: [
        { title: "Diplomatic Cuisine", desc: "Years of service for embassies and the diplomatic corps, mastering international protocol and the culinary preferences of each culture." },
        { title: "Multicultural Versatility", desc: "French, Asian, Mediterranean, Latin American, and Middle Eastern cuisine. Every culinary tradition is a chapter in his repertoire." },
        { title: "Full-Service", desc: "From menu design to service coordination, including setup and the complete experience. All under one direction." },
      ],
    },
    contact: {
      tag: "Contact",
      title: "Let's discuss your next event",
      subtitle: "Fill out the form and we'll get in touch within 24 hours to arrange a personalized consultation.",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      event: "Event type",
      eventOptions: ["Private dinner", "Reception / Cocktail", "Corporate event", "Special celebration", "Other"],
      guests: "Estimated number of guests",
      date: "Tentative date",
      message: "Tell us about your event",
      send: "Send Inquiry",
      or: "or reach us via",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "World Cuisine · Buenos Aires, Argentina",
    },
  },
};

// Decorative SVG patterns
const GoldLine = () => (
  <svg width="60" height="2" viewBox="0 0 60 2" fill="none" style={{ display: "block" }}>
    <rect width="60" height="2" rx="1" fill="#C9A96E" />
  </svg>
);

const DiamondDivider = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center" }}>
    <div style={{ width: "40px", height: "1px", background: "linear-gradient(to right, transparent, #C9A96E)" }} />
    <div style={{ width: "6px", height: "6px", background: "#C9A96E", transform: "rotate(45deg)" }} />
    <div style={{ width: "40px", height: "1px", background: "linear-gradient(to left, transparent, #C9A96E)" }} />
  </div>
);

export default function LuisAchucarro() {
  const [lang, setLang] = useState("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const isVisible = (id) => visibleSections.has(id);

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#F5F0EB", background: "#0D0D0D", minHeight: "100vh", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: #C9A96E; color: #0D0D0D; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 60px; }
        }
        @keyframes gentlePulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes heroShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes marqueeLtoR {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes marqueeRtoL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .fade-up { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }

        .nav-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #B8B0A4;
          text-decoration: none;
          cursor: pointer;
          padding: 8px 0;
          position: relative;
          transition: color 0.3s;
          background: none;
          border: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #C9A96E;
          transition: width 0.3s;
        }
        .nav-link:hover { color: #C9A96E; }
        .nav-link:hover::after { width: 100%; }

        .hero-title {
          font-size: clamp(3.5rem, 10vw, 8rem);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.02em;
          color: #F5F0EB;
        }
        .hero-title-accent {
          font-style: italic;
          font-weight: 300;
          background: linear-gradient(135deg, #C9A96E, #E8D5B0, #C9A96E);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: heroShimmer 4s ease-in-out infinite;
        }

        .section-tag {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #C9A96E;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-tag::before {
          content: '';
          display: block;
          width: 30px;
          height: 1px;
          background: #C9A96E;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 300;
          line-height: 1.2;
          color: #F5F0EB;
          max-width: 600px;
        }

        .body-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: #9A9490;
        }

        .service-card {
          background: linear-gradient(160deg, rgba(201,169,110,0.06) 0%, rgba(201,169,110,0.02) 100%);
          border: 1px solid rgba(201,169,110,0.12);
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #C9A96E, transparent);
          opacity: 0;
          transition: opacity 0.5s;
        }
        .service-card:hover {
          background: linear-gradient(160deg, rgba(201,169,110,0.1) 0%, rgba(201,169,110,0.04) 100%);
          border-color: rgba(201,169,110,0.25);
          transform: translateY(-4px);
        }
        .service-card:hover::before { opacity: 1; }

        .cta-button {
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: transparent;
          color: #C9A96E;
          border: 1px solid #C9A96E;
          padding: 16px 40px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s;
          text-decoration: none;
          display: inline-block;
        }
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #C9A96E;
          transition: left 0.4s;
          z-index: 0;
        }
        .cta-button:hover::before { left: 0; }
        .cta-button:hover { color: #0D0D0D; }
        .cta-button span { position: relative; z-index: 1; }

        .form-input {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 300;
          background: rgba(245,240,235,0.04);
          border: 1px solid rgba(201,169,110,0.15);
          color: #F5F0EB;
          padding: 14px 18px;
          width: 100%;
          outline: none;
          transition: border-color 0.3s;
        }
        .form-input:focus {
          border-color: #C9A96E;
        }
        .form-input::placeholder {
          color: #6A6460;
          font-weight: 300;
        }
        select.form-input { appearance: none; }
        textarea.form-input { resize: vertical; min-height: 100px; font-family: 'Montserrat', sans-serif; }

        .experience-item {
          padding: 36px 0;
          border-bottom: 1px solid rgba(201,169,110,0.1);
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 32px;
          align-items: start;
        }
        .experience-item:last-child { border-bottom: none; }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 300;
          color: #C9A96E;
          line-height: 1;
        }
        .stat-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #7A7470;
          margin-top: 8px;
        }

        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #25D366;
          text-decoration: none;
          padding: 12px 24px;
          border: 1px solid rgba(37,211,102,0.3);
          transition: all 0.3s;
        }
        .whatsapp-btn:hover {
          background: rgba(37,211,102,0.08);
          border-color: rgba(37,211,102,0.5);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: rgba(13,13,13,0.97);
          backdrop-filter: blur(20px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 32px;
          transition: all 0.5s;
        }

        .grain-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .lang-btn {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 1.5px;
          background: none;
          border: 1px solid rgba(201,169,110,0.3);
          color: #B8B0A4;
          padding: 6px 12px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .lang-btn.active {
          background: rgba(201,169,110,0.15);
          color: #C9A96E;
          border-color: #C9A96E;
        }
        .lang-btn:hover { border-color: #C9A96E; color: #C9A96E; }

        .marquee-track {
          display: flex;
          gap: 20px;
          animation: marqueeLtoR 40s linear infinite;
          width: max-content;
        }
        .marquee-track.reverse {
          animation: marqueeRtoL 40s linear infinite;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-duration: 80s;
        }
        .marquee-wrapper:hover .marquee-track.reverse {
          animation-duration: 80s;
        }
        .marquee-item {
          flex-shrink: 0;
          width: 330px;
          height: 220px;
          border-radius: 4px;
          overflow: hidden;
          transition: transform 0.4s ease, filter 0.4s ease;
        }
        .marquee-item:hover {
          transform: scale(1.03);
          filter: brightness(1.15);
        }
        @media (max-width: 768px) {
          .marquee-item {
            width: 240px;
            height: 160px;
          }
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 8px;
          z-index: 1001;
        }
        .hamburger span {
          width: 24px;
          height: 1.5px;
          background: #C9A96E;
          transition: all 0.3s;
          display: block;
        }

        @media (max-width: 768px) {
          .hamburger { display: flex; }
          .desktop-nav { display: none !important; }
          .hero-title { font-size: clamp(2.8rem, 12vw, 5rem); }
          .section-title { font-size: clamp(1.8rem, 5vw, 2.5rem); }
          .services-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .about-content { grid-template-columns: 1fr !important; }
          .experience-item { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
        }
      `}</style>

      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 clamp(24px, 5vw, 80px)",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrollY > 50 ? "rgba(13,13,13,0.92)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
        borderBottom: scrollY > 50 ? "1px solid rgba(201,169,110,0.08)" : "1px solid transparent",
        transition: "all 0.4s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 600, letterSpacing: "0.02em", color: "#F5F0EB" }}>LUIS</span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 300, fontStyle: "italic", color: "#C9A96E" }}>Achucarro</span>
        </div>

        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          <button className="nav-link" onClick={() => scrollTo("services")}>{t.nav.services}</button>
          <button className="nav-link" onClick={() => scrollTo("about")}>{t.nav.about}</button>
          <button className="nav-link" onClick={() => scrollTo("experience")}>{t.nav.experience}</button>
          <button className="nav-link" onClick={() => scrollTo("contact")}>{t.nav.contact}</button>
          <div style={{ display: "flex", gap: "4px", marginLeft: "12px" }}>
            <button className={`lang-btn ${lang === "es" ? "active" : ""}`} onClick={() => setLang("es")}>ES</button>
            <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
          </div>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={menuOpen ? { transform: "rotate(45deg) translate(4px, 4px)" } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: "rotate(-45deg) translate(4px, -4px)" } : {}} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          <button className="nav-link" style={{ fontSize: "16px" }} onClick={() => scrollTo("services")}>{t.nav.services}</button>
          <button className="nav-link" style={{ fontSize: "16px" }} onClick={() => scrollTo("about")}>{t.nav.about}</button>
          <button className="nav-link" style={{ fontSize: "16px" }} onClick={() => scrollTo("experience")}>{t.nav.experience}</button>
          <button className="nav-link" style={{ fontSize: "16px" }} onClick={() => scrollTo("contact")}>{t.nav.contact}</button>
          <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
            <button className={`lang-btn ${lang === "es" ? "active" : ""}`} onClick={(e) => { e.stopPropagation(); setLang("es"); }}>ES</button>
            <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={(e) => { e.stopPropagation(); setLang("en"); }}>EN</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px clamp(24px, 5vw, 80px) 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Subtle background elements */}
        <div style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)",
          animation: "gentlePulse 6s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "1px",
          height: "120px",
          background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.2), transparent)",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
          <div style={{ animation: "fadeUp 1s ease-out 0.2s both" }}>
            <span className="section-tag" style={{ marginBottom: "32px" }}>
              {t.hero.pre}
            </span>
          </div>

          <h1 style={{ animation: "fadeUp 1s ease-out 0.4s both", marginBottom: "12px" }}>
            <span className="hero-title">{t.hero.title1}</span>
          </h1>
          <h1 style={{ animation: "fadeUp 1s ease-out 0.6s both", marginBottom: "40px" }}>
            <span className="hero-title hero-title-accent">{t.hero.title2}</span>
          </h1>

          <p className="body-text" style={{ maxWidth: "520px", fontSize: "15px", lineHeight: "1.9", animation: "fadeUp 1s ease-out 0.8s both", marginBottom: "48px" }}>
            {t.hero.subtitle}
          </p>

          <div style={{ animation: "fadeUp 1s ease-out 1s both" }}>
            <button className="cta-button" onClick={() => scrollTo("contact")}>
              <span>{t.hero.cta}</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "fadeIn 1s ease-out 1.5s both",
        }}>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(201,169,110,0.4), transparent)" }} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" data-animate style={{
        padding: "120px clamp(24px, 5vw, 80px)",
        background: "linear-gradient(180deg, #0D0D0D 0%, #111110 100%)",
      }}>
        <div className={`fade-up ${isVisible("services") ? "visible" : ""}`}>
          <span className="section-tag" style={{ marginBottom: "20px" }}>{t.services.tag}</span>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>{t.services.title}</h2>
          <p className="body-text" style={{ maxWidth: "500px", marginBottom: "64px" }}>{t.services.subtitle}</p>
        </div>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", maxWidth: "1000px" }}>
          {t.services.items.map((item, i) => (
            <div
              key={i}
              className={`service-card fade-up stagger-${i + 1} ${isVisible("services") ? "visible" : ""}`}
            >
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 400, color: "#F5F0EB", marginBottom: "12px" }}>{item.title}</h3>
              <p className="body-text" style={{ fontSize: "13px" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Marquee Carousel */}
      <section style={{
        padding: "80px 0",
        background: "#0D0D0D",
        overflow: "hidden",
      }}>
        <div className="marquee-wrapper" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Row 1: left to right */}
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-track">
              {[...Array(12)].map((_, i) => (
                <div key={`r1-${i}`} className="marquee-item">
                  <img
                    src={`/platos/plato-${(i % 6) + 1}.png`}
                    alt={`Plato ${(i % 6) + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Row 2: right to left */}
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-track reverse">
              {[...Array(12)].map((_, i) => (
                <div key={`r2-${i}`} className="marquee-item">
                  <img
                    src={`/platos/plato-${(i % 6) + 1}.png`}
                    alt={`Plato ${(i % 6) + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div style={{ padding: "40px 0", background: "#111110" }}>
        <DiamondDivider />
      </div>

      {/* About Section */}
      <section id="about" data-animate style={{
        padding: "120px clamp(24px, 5vw, 80px)",
        background: "linear-gradient(180deg, #111110 0%, #13120F 100%)",
      }}>
        <div className="about-content" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", maxWidth: "1100px" }}>
          <div>
            <div className={`fade-up ${isVisible("about") ? "visible" : ""}`}>
              <span className="section-tag" style={{ marginBottom: "20px" }}>{t.about.tag}</span>
              <h2 className="section-title" style={{ marginBottom: "40px" }}>{t.about.title}</h2>
            </div>

            <div className={`fade-up stagger-1 ${isVisible("about") ? "visible" : ""}`}>
              <p className="body-text" style={{ marginBottom: "20px" }}>{t.about.p1}</p>
            </div>
            <div className={`fade-up stagger-2 ${isVisible("about") ? "visible" : ""}`}>
              <p className="body-text" style={{ marginBottom: "20px" }}>{t.about.p2}</p>
            </div>
            <div className={`fade-up stagger-3 ${isVisible("about") ? "visible" : ""}`}>
              <p className="body-text">{t.about.p3}</p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {/* Photo de Luis */}
            <div className={`fade-up stagger-2 ${isVisible("about") ? "visible" : ""}`} style={{
              width: "100%",
              aspectRatio: "3/4",
              border: "1px solid rgba(201,169,110,0.12)",
              overflow: "hidden",
              position: "relative",
            }}>
              <img
                src="/luis-foto.png"
                alt={lang === "es" ? "Luis Achucarro - Chef Ejecutivo" : "Luis Achucarro - Executive Chef"}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Stats */}
            <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginTop: "40px" }}>
              {t.about.stats.map((stat, i) => (
                <div key={i} className={`fade-up stagger-${i + 3} ${isVisible("about") ? "visible" : ""}`} style={{ textAlign: "center" }}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" data-animate style={{
        padding: "120px clamp(24px, 5vw, 80px)",
        background: "#0D0D0D",
      }}>
        <div className={`fade-up ${isVisible("experience") ? "visible" : ""}`}>
          <span className="section-tag" style={{ marginBottom: "20px" }}>{t.experience.tag}</span>
          <h2 className="section-title" style={{ marginBottom: "60px" }}>{t.experience.title}</h2>
        </div>

        <div style={{ maxWidth: "800px" }}>
          {t.experience.items.map((item, i) => (
            <div key={i} className={`experience-item fade-up stagger-${i + 1} ${isVisible("experience") ? "visible" : ""}`}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "48px",
                fontWeight: 300,
                color: "rgba(201,169,110,0.2)",
                lineHeight: 1,
                width: "60px",
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "24px",
                  fontWeight: 400,
                  color: "#F5F0EB",
                  marginBottom: "12px",
                }}>{item.title}</h3>
                <p className="body-text" style={{ fontSize: "13px" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote divider */}
      <div style={{
        padding: "80px clamp(24px, 5vw, 80px)",
        background: "linear-gradient(160deg, rgba(201,169,110,0.04) 0%, rgba(13,13,13,1) 100%)",
        textAlign: "center",
      }}>
        <DiamondDivider />
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "rgba(201,169,110,0.5)",
          maxWidth: "700px",
          margin: "32px auto",
          lineHeight: 1.6,
        }}>
          {lang === "es"
            ? "\"La mesa es donde las culturas se encuentran, donde los negocios se sellan y donde los recuerdos se crean.\""
            : "\"The table is where cultures meet, where deals are sealed, and where memories are created.\""}
        </p>
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(201,169,110,0.3)" }}>— Luis Achucarro</span>
      </div>

      {/* Contact Section */}
      <section id="contact" data-animate style={{
        padding: "120px clamp(24px, 5vw, 80px)",
        background: "linear-gradient(180deg, #0D0D0D 0%, #0A0A0A 100%)",
      }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", maxWidth: "1100px" }}>
          <div>
            <div className={`fade-up ${isVisible("contact") ? "visible" : ""}`}>
              <span className="section-tag" style={{ marginBottom: "20px" }}>{t.contact.tag}</span>
              <h2 className="section-title" style={{ marginBottom: "20px" }}>{t.contact.title}</h2>
              <p className="body-text" style={{ marginBottom: "48px" }}>{t.contact.subtitle}</p>
            </div>

            <div className={`fade-up stagger-2 ${isVisible("contact") ? "visible" : ""}`}>
              <p className="body-text" style={{ marginBottom: "16px" }}>{t.contact.or}</p>
              <a className="whatsapp-btn" href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          <div className={`fade-up stagger-1 ${isVisible("contact") ? "visible" : ""}`}>
            <form style={{ display: "flex", flexDirection: "column", gap: "16px" }} onSubmit={(e) => e.preventDefault()}>
              <input className="form-input" type="text" placeholder={t.contact.name} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <input className="form-input" type="email" placeholder={t.contact.email} />
                <input className="form-input" type="tel" placeholder={t.contact.phone} />
              </div>
              <select className="form-input">
                <option value="" disabled selected style={{ color: "#6A6460" }}>{t.contact.event}</option>
                {t.contact.eventOptions.map((opt, i) => (
                  <option key={i} value={opt} style={{ background: "#1a1a1a", color: "#F5F0EB" }}>{opt}</option>
                ))}
              </select>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <input className="form-input" type="text" placeholder={t.contact.guests} />
                <input className="form-input" type="text" placeholder={t.contact.date} />
              </div>
              <textarea className="form-input" placeholder={t.contact.message} rows={4} />
              <button className="cta-button" type="submit" style={{ alignSelf: "flex-start", marginTop: "8px" }}>
                <span>{t.contact.send}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "60px clamp(24px, 5vw, 80px) 40px",
        borderTop: "1px solid rgba(201,169,110,0.08)",
        background: "#0A0A0A",
      }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "40px", alignItems: "center", maxWidth: "1100px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 600, color: "#F5F0EB" }}>LUIS</span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 300, fontStyle: "italic", color: "#C9A96E" }}>Achucarro</span>
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "#5A5650", letterSpacing: "0.5px" }}>
              {t.footer.tagline}
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <a href="https://www.instagram.com/luisachucarro" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#7A7470",
              textDecoration: "none",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              transition: "color 0.3s",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Instagram
            </a>
          </div>

          <div style={{ textAlign: "right" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "#3A3630", letterSpacing: "0.5px" }}>
              © {new Date().getFullYear()} Luis Achucarro. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}