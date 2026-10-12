import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle, FaLaptopCode, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products.js";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Home() {
  const { language } = useLanguage();
  const sw = language === "sw";
  return <>
    <Hero />
    <section className="trust-strip"><div className="container trust-grid"><div><FaLaptopCode /><span>{sw ? "Programu za biashara" : "Business software"}</span></div><div><FaMobileAlt /><span>{sw ? "Uzoefu unaofaa simu" : "Mobile-friendly experiences"}</span></div><div><FaMapMarkerAlt /><span>{sw ? "Imejengwa kwa Tanzania" : "Built with Tanzania in mind"}</span></div></div></section>
    <section className="section"><div className="container">
      <div className="section-heading"><div><span className="eyebrow">{sw ? "Tunachofanya" : "What we do"}</span><h2 className="section-title">{sw ? "Teknolojia inayotatua changamoto halisi" : "Technology that solves real business challenges"}</h2><p className="section-lead">{sw ? "Kutoka mifumo ya biashara hadi huduma za kidijitali, tunalenga suluhisho rahisi kutumia, zinazoweza kukua na zinazoendana na mazingira ya ndani." : "From business systems to digital services, we focus on useful, scalable solutions that fit local operating conditions."}</p></div><Link to="/services" className="text-link">{sw ? "Huduma zote" : "All services"} <FaArrowRight /></Link></div>
      <Services compact />
    </div></section>
    <section className="section products-section"><div className="container">
      <div className="section-heading"><div><span className="eyebrow">{sw ? "Bidhaa za programu" : "Software products"}</span><h2 className="section-title">{sw ? "Suluhisho za sekta mbalimbali" : "Solutions for everyday operations"}</h2><p className="section-lead">{sw ? "Chunguza bidhaa zilizopo katika majaribio na mawazo ya bidhaa zinazopangwa. Hali ya kila bidhaa imewekwa wazi." : "Explore products in pilot and solutions planned for future development. Each product’s status is stated clearly."}</p></div><Link to="/products" className="text-link">{sw ? "Angalia katalogi" : "View catalogue"} <FaArrowRight /></Link></div>
      <div className="product-grid home-products">{products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}</div>
    </div></section>
    <section className="section about-preview"><div className="container about-preview-grid"><div className="about-art"><div className="about-art-circle">RT<span>+</span></div><div className="about-art-caption">{sw ? "Ubunifu • Uaminifu • Matokeo" : "Innovation • Reliability • Impact"}</div></div><div><span className="eyebrow">{sw ? "Kwa nini Rehoboth" : "Why Rehoboth"}</span><h2 className="section-title">{sw ? "Mshirika wako katika safari ya kidijitali" : "A practical partner for your digital journey"}</h2><p className="section-lead">{sw ? "Tunaanza kwa kuelewa biashara yako, kisha tunapendekeza njia inayofaa—iwe ni programu maalum, kuboresha mchakato au kuunganisha mifumo." : "We start by understanding your organisation, then recommend a fit-for-purpose path—whether that means custom software, process improvement or connecting existing systems."}</p><ul className="check-list"><li><FaCheckCircle />{sw ? "Suluhisho kulingana na mahitaji yako" : "Solutions shaped around your needs"}</li><li><FaCheckCircle />{sw ? "Mawasiliano ya wazi na hatua zinazoeleweka" : "Clear communication and practical milestones"}</li><li><FaCheckCircle />{sw ? "Uzingatiaji wa mazingira ya biashara za Tanzania" : "Attention to Tanzanian operating conditions"}</li></ul><Link to="/about" className="btn btn-primary">{sw ? "Kuhusu kampuni" : "About our company"} <FaArrowRight /></Link></div></div></section>
    <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">{sw ? "Tuanze mazungumzo" : "Let's start a conversation"}</span><h2>{sw ? "Una changamoto ya biashara tunazoweza kusaidia?" : "Have a business challenge we can help solve?"}</h2><p>{sw ? "Tuambie unachotaka kuboresha, tutajadili hatua inayofaa." : "Tell us what you want to improve and we’ll discuss a practical next step."}</p></div><Link className="btn btn-light" to="/consultation">{sw ? "Panga mashauriano" : "Book a consultation"} <FaArrowRight /></Link></div></section>
  </>;
}
