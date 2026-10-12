import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
export default function ThankYou() { const { language } = useLanguage(); const sw = language === "sw"; return <section className="section"><div className="container success-page"><div className="success-mark">✓</div><h1>{sw ? "Asante kwa ujumbe wako" : "Thank you for your message"}</h1><p>{sw ? "Tumepokea ombi lako." : "Your enquiry has been received."}</p><Link to="/" className="btn btn-primary">{sw ? "Rudi mwanzo" : "Back to home"}</Link></div></section>; }
