import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Hero() {
  const { language } = useLanguage();
  const sw = language === "sw";
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-kicker"><span className="pulse-dot" /> {sw ? "Teknolojia kwa biashara za Tanzania" : "Technology for Tanzanian businesses"}</span>
          <h1>{sw ? <>Teknolojia bunifu.<br /><em>Suluhisho za kuaminika.</em></> : <>Innovative technology.<br /><em>Reliable solutions.</em></>}</h1>
          <p>{sw ? "Tunatengeneza programu na mifumo ya kidijitali inayorahisisha shughuli za biashara, kuboresha huduma na kusaidia ukuaji." : "We build practical software and digital systems that simplify operations, improve service delivery and help organisations grow."}</p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-light">{sw ? "Gundua bidhaa zetu" : "Explore our products"} <FaArrowRight /></Link>
            <a href="https://wa.me/255768910194" target="_blank" rel="noreferrer" className="btn hero-outline"><FaWhatsapp /> {sw ? "Zungumza nasi" : "Talk to our team"}</a>
          </div>
          <div className="hero-proof"><span><FaCheckCircle /> {sw ? "Inazingatia mahitaji ya ndani" : "Designed around local needs"}</span><span><FaCheckCircle /> {sw ? "Kiingereza na Kiswahili" : "English and Kiswahili-ready"}</span></div>
        </div>
        <div className="hero-visual" aria-label="Rehoboth Technologies digital solutions illustration">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="visual-main">
            <div className="visual-brand">RT<span>+</span></div>
            <div className="visual-title">Digital operations</div>
            <div className="visual-subtitle">Software · Cloud · Integration</div>
            <div className="visual-bars"><span style={{height:"42%"}} /><span style={{height:"67%"}} /><span style={{height:"54%"}} /><span style={{height:"86%"}} /><span style={{height:"72%"}} /><span style={{height:"100%"}} /></div>
            <div className="visual-stat-row"><div><small>Business systems</small><strong>Connected</strong></div><div className="visual-check"><FaCheckCircle /></div></div>
          </div>
          <div className="floating-chip chip-one"><span>✓</span> Inventory control</div>
          <div className="floating-chip chip-two"><span>↗</span> Digital growth</div>
          <div className="hero-grid-pattern" />
        </div>
      </div>
      <div className="hero-bottom"><div className="container hero-bottom-inner"><span>{sw ? "Mifumo inayolingana na mazingira ya biashara za Tanzania" : "Technology that fits the way Tanzanian businesses work"}</span><span className="hero-bottom-line" /><span>Dar es Salaam · Tanzania</span></div></div>
    </section>
  );
}
