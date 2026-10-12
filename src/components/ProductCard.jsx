import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function ProductCard({ product }) {
  const { language } = useLanguage();
  const sw = language === "sw";
  const status = product.status === "Pilot" ? "pilot" : product.status === "Available" ? "available" : "coming";
  const statusLabel = sw ? (product.statusSw || product.status) : product.status;
  return (
    <article className="product-card card">
      <div className="product-card-top">
        <div className="product-icon" aria-hidden="true">{product.icon}</div>
        <span className={`status status-${status}`}>{statusLabel}</span>
      </div>
      <p className="product-category">{product.category}</p>
      <h3>{product.name}</h3>
      <p className="product-summary">{sw ? product.summarySw : product.summary}</p>
      <ul className="feature-list">
        {(sw ? product.featuresSw : product.features).slice(0, 4).map((feature) => <li key={feature}><FaCheckCircle />{feature}</li>)}
      </ul>
      <Link className="text-link" to={`/contact?product=${encodeURIComponent(product.name)}`}>{sw ? "Uliza kuhusu bidhaa" : "Enquire about this product"} <FaArrowRight /></Link>
    </article>
  );
}
