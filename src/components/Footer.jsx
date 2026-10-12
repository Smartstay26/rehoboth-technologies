import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Footer() {
  const { language } = useLanguage();
  const sw = language === "sw";
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-monogram">RT</div>
          <h3>Rehoboth Technologies</h3>
          <p>{sw ? "Teknolojia bunifu. Suluhisho za kuaminika. Matokeo halisi." : "Innovative Technology. Reliable Solutions. Real Impact."}</p>
        </div>
        <div><h4>{sw ? "Tovuti" : "Explore"}</h4><Link to="/about">{sw ? "Kuhusu sisi" : "About us"}</Link><Link to="/services">{sw ? "Huduma" : "Services"}</Link><Link to="/products">{sw ? "Bidhaa za programu" : "Software products"}</Link></div>
        <div><h4>{sw ? "Suluhisho" : "Solutions"}</h4><Link to="/products">Commerce Cloud</Link><Link to="/products">HotelConnect TZ</Link><Link to="/contact">{sw ? "Omba huduma maalum" : "Custom solutions"}</Link></div>
        <div><h4>{sw ? "Wasiliana nasi" : "Contact us"}</h4><a href="tel:+255768910194"><FaPhoneAlt /> +255 768 910 194</a><a href="https://wa.me/255768910194" target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp</a><a href="mailto:info@rehobothtechnologies.co.tz"><FaEnvelope /> info@rehobothtechnologies.co.tz</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Rehoboth Technologies Company Limited</span><span>{sw ? "Imetengenezwa kwa kuzingatia biashara za Tanzania." : "Built with Tanzanian businesses in mind."}</span><Link to="/privacy-policy">{sw ? "Faragha" : "Privacy"}</Link></div>
    </footer>
  );
}
