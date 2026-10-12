import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Contact() {
  const { language } = useLanguage(); const sw = language === "sw";
  const [params] = useSearchParams(); const product = params.get("product") || "";
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: product ? `I would like to enquire about ${product}.` : "" });
  useEffect(() => { if (product) setForm((old) => ({ ...old, message: `I would like to enquire about ${product}.` })); }, [product]);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const body = new URLSearchParams({ "form-name": "contact", ...form }).toString();
    fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body })
      .then(() => setSubmitted(true))
      .catch(() => {
        const mailBody = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`;
        window.location.href = `mailto:info@rehobothtechnologies.co.tz?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(mailBody)}`;
      });
  };
  return <><section className="page-hero"><div className="container"><span className="eyebrow">{sw ? "Wasiliana nasi" : "Contact us"}</span><h1>{sw ? "Tuambie tunavyoweza kukusaidia" : "Tell us how we can help"}</h1><p>{sw ? "Tuma ujumbe kuhusu biashara yako, huduma au bidhaa unayotaka kujadili." : "Send us a message about your organisation, a service or a product you would like to discuss."}</p></div></section>
    <section className="section"><div className="container contact-grid"><div className="contact-details"><span className="eyebrow">{sw ? "Mawasiliano ya moja kwa moja" : "Direct contact"}</span><h2 className="section-title">{sw ? "Tuanze mazungumzo" : "Start a conversation"}</h2><p className="section-lead">{sw ? "Tunaweza kupanga mazungumzo ya awali ili kuelewa mahitaji na hatua zinazofuata." : "We can arrange an initial discussion to understand your needs and identify sensible next steps."}</p><a href="tel:+255768910194" className="contact-method"><span><FaPhoneAlt /></span><div><small>{sw ? "Simu" : "Phone"}</small><strong>+255 768 910 194</strong></div></a><a href="https://wa.me/255768910194" target="_blank" rel="noreferrer" className="contact-method"><span><FaWhatsapp /></span><div><small>WhatsApp</small><strong>+255 768 910 194</strong></div></a><a href="mailto:info@rehobothtechnologies.co.tz" className="contact-method"><span><FaEnvelope /></span><div><small>Email</small><strong>info@rehobothtechnologies.co.tz</strong></div></a><div className="contact-method"><span><FaMapMarkerAlt /></span><div><small>{sw ? "Tunafanya kazi" : "Serving"}</small><strong>Tanzania</strong></div></div></div>
      <div className="contact-form-card card"><h2>{sw ? "Tuma ujumbe" : "Send an enquiry"}</h2>{submitted ? <div className="success-state"><span>✓</span><h3>{sw ? "Asante kwa kuwasiliana nasi" : "Thank you for contacting us"}</h3><p>{sw ? "Ujumbe wako umetumwa kupitia fomu ya tovuti." : "Your message has been submitted through the website form."}</p></div> : <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit}><input type="hidden" name="form-name" value="contact" /><p className="hidden"><label>Leave this empty: <input name="bot-field" /></label></p><label>{sw ? "Jina kamili" : "Full name"}<input name="name" value={form.name} onChange={update} required placeholder={sw ? "Jina lako" : "Your name"} /></label><label>Email<input type="email" name="email" value={form.email} onChange={update} required placeholder="you@example.com" /></label><label>{sw ? "Simu (si lazima)" : "Phone (optional)"}<input name="phone" value={form.phone} onChange={update} placeholder="+255 ..." /></label><label>{sw ? "Ungependa kujadili nini?" : "What would you like to discuss?"}<textarea name="message" value={form.message} onChange={update} required rows="5" placeholder={sw ? "Eleza mahitaji yako..." : "Tell us about your needs..."} /></label><button type="submit" className="btn btn-primary">{sw ? "Tuma ujumbe" : "Send message"}</button><p className="form-note">{sw ? "Taarifa zako zitatumika kujibu ombi lako." : "Your details will be used to respond to your enquiry."}</p></form>}</div>
    </div></section></>;
}
