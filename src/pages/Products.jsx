import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products.js";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Products() {
  const { language } = useLanguage(); const sw = language === "sw";
  const [filter, setFilter] = useState("all"); const [search, setSearch] = useState("");
  const filtered = useMemo(() => products.filter((p) => {
    const matchesStatus = filter === "all" || (filter === "pilot" ? p.status === "Pilot" : p.status === "Coming soon");
    const haystack = `${p.name} ${p.category} ${p.summary} ${p.summarySw}`.toLowerCase();
    return matchesStatus && haystack.includes(search.toLowerCase());
  }), [filter, search]);
  return <><section className="page-hero"><div className="container"><span className="eyebrow">{sw ? "Katalogi ya bidhaa" : "Product catalogue"}</span><h1>{sw ? "Programu zinazolenga mahitaji ya biashara za Tanzania" : "Software designed around Tanzanian business needs"}</h1><p>{sw ? "Bidhaa zetu zinajumuisha mifumo ya biashara na suluhisho maalum kwa sekta mbalimbali. Hali ya kila bidhaa imeelezwa kwa uwazi." : "Our portfolio includes business systems and proposed solutions for different sectors. Product availability is shown transparently."}</p></div></section>
    <section className="section"><div className="container">
      <div className="catalogue-toolbar"><label className="search-box"><FaSearch /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={sw ? "Tafuta bidhaa..." : "Search products..."} /></label><div className="filter-buttons"><button className={filter === "all" ? "filter-active" : ""} onClick={() => setFilter("all")}>{sw ? "Zote" : "All products"}</button><button className={filter === "pilot" ? "filter-active" : ""} onClick={() => setFilter("pilot")}>{sw ? "Majaribio" : "Pilot"}</button><button className={filter === "coming" ? "filter-active" : ""} onClick={() => setFilter("coming")}>{sw ? "Zinazopangwa" : "Coming soon"}</button></div></div>
      <div className="catalogue-note"><strong>{sw ? "Kumbuka hali ya bidhaa:" : "Product status note:"}</strong> {sw ? "Bidhaa zilizoandikwa “Awamu ya majaribio” zinahitaji majadiliano na uthibitisho wa mahitaji kabla ya matumizi. Bidhaa zilizoandikwa “Inakuja” bado ni mipango ya maendeleo." : "Products marked “Pilot” require a discussion and scope confirmation before use. “Coming soon” products are planned concepts, not claims of current availability."}</div>
      {filtered.length ? <div className="product-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state">{sw ? "Hakuna bidhaa zilizopatikana. Jaribu neno lingine." : "No products found. Try another search term."}</div>}
    </div></section>
    <section className="cta-section"><div className="container cta-inner"><div><h2>{sw ? "Una hitaji ambalo halijaorodheshwa?" : "Looking for something not listed?"}</h2><p>{sw ? "Tunaweza kujadili utengenezaji wa programu maalum kwa mahitaji yako." : "We can discuss custom software based on your requirements."}</p></div><Link to="/contact" className="btn btn-light">{sw ? "Eleza hitaji lako" : "Tell us what you need"}</Link></div></section>
  </>;
}
