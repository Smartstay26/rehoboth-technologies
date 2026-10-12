import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaGlobe, FaTimes } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext.jsx";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const nav = language === "en"
    ? [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Products", "/products"], ["Contact", "/contact"]]
    : [["Mwanzo", "/"], ["Kuhusu", "/about"], ["Huduma", "/services"], ["Bidhaa", "/products"], ["Mawasiliano", "/contact"]];

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Rehoboth Technologies home">
          <img src={logo} alt="Rehoboth Technologies Company Limited logo" />
          <span><strong>REHOBOTH</strong><small>TECHNOLOGIES COMPANY LIMITED</small></span>
        </Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {nav.map(([label, to]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{label}</NavLink>)}
          <button className="language-toggle" onClick={toggleLanguage} aria-label="Switch language"><FaGlobe /> {language === "en" ? "Kiswahili" : "English"}</button>
          <Link className="btn btn-primary nav-cta" to="/consultation" onClick={() => setOpen(false)}>{language === "en" ? "Request a consultation" : "Omba ushauri"}</Link>
        </nav>
      </div>
    </header>
  );
}
