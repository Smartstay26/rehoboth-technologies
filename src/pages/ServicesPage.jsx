import Services from "../components/Services.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
export default function ServicesPage() {
  const { language } = useLanguage(); const sw = language === "sw";
  return <><section className="page-hero"><div className="container"><span className="eyebrow">{sw ? "Huduma zetu" : "Our services"}</span><h1>{sw ? "Msaada wa teknolojia kutoka wazo hadi utekelezaji" : "Technology support from idea to implementation"}</h1><p>{sw ? "Tunasaidia biashara na taasisi kupanga, kujenga na kuboresha mifumo yao ya kidijitali." : "We help businesses and organisations plan, build and improve their digital systems."}</p></div></section><section className="section"><div className="container"><Services /></div></section><section className="cta-section"><div className="container cta-inner"><div><h2>{sw ? "Unahitaji suluhisho maalum?" : "Need a tailored solution?"}</h2><p>{sw ? "Tuambie kuhusu shughuli na changamoto zako." : "Tell us about your operations and challenges."}</p></div><Link to="/consultation" className="btn btn-light">{sw ? "Zungumza nasi" : "Talk to us"}</Link></div></section></>;
}
