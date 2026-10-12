import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import Consultation from "./pages/Consultation.jsx";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    const titles = {
      "/": "Rehoboth Technologies | Software & ICT Solutions in Tanzania",
      "/about": "About Us | Rehoboth Technologies",
      "/services": "Services | Rehoboth Technologies",
      "/products": "Software Products | Rehoboth Technologies",
      "/contact": "Contact Us | Rehoboth Technologies",
      "/consultation": "Request a Consultation | Rehoboth Technologies",
      "/privacy-policy": "Privacy Policy | Rehoboth Technologies",
      "/terms": "Terms of Use | Rehoboth Technologies",
      "/thank-you": "Thank You | Rehoboth Technologies",
    };
    document.title = titles[location.pathname] || titles["/"];
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);
  return <><Navbar /><main><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/products" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/privacy-policy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/thank-you" element={<ThankYou />} />
    <Route path="/consultation" element={<Consultation />} />
    <Route path="*" element={<Home />} />
  </Routes></main><Footer /><WhatsAppButton /></>;
}
