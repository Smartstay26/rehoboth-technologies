import { FaCode, FaCloud, FaShieldAlt, FaServer, FaLink, FaChartLine } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext.jsx";

const serviceItems = [
  { icon: FaCode, title: "Software development", sw: "Utengenezaji wa programu", desc: "Web platforms, business applications and workflows tailored to your operations.", swDesc: "Tovuti, programu za biashara na mifumo inayolingana na shughuli zako." },
  { icon: FaCloud, title: "Cloud and business systems", sw: "Mifumo ya biashara na cloud", desc: "Practical digital tools that help teams access information and coordinate work.", swDesc: "Zana za kidijitali zinazosaidia timu kupata taarifa na kuratibu kazi." },
  { icon: FaLink, title: "Systems integration", sw: "Uunganishaji wa mifumo", desc: "Connect business processes and services with clear, maintainable integrations.", swDesc: "Unganisha michakato na huduma za biashara kwa mifumo inayoweza kutunzwa." },
  { icon: FaServer, title: "ICT infrastructure", sw: "Miundombinu ya TEHAMA", desc: "Planning, setup and support for dependable ICT environments.", swDesc: "Mipango, usanidi na msaada wa miundombinu ya TEHAMA." },
  { icon: FaShieldAlt, title: "Security and reliability", sw: "Usalama na uaminifu", desc: "Security-minded implementation, access controls and operational guidance.", swDesc: "Utekelezaji unaozingatia usalama, udhibiti wa ufikiaji na ushauri wa uendeshaji." },
  { icon: FaChartLine, title: "Digital transformation", sw: "Mabadiliko ya kidijitali", desc: "Assess manual processes and prioritise useful, measurable improvements.", swDesc: "Tathmini kazi za mikono na panga maboresho yenye manufaa yanayopimika." },
];

export default function Services({ compact = false }) {
  const { language } = useLanguage();
  const sw = language === "sw";
  return <div className={compact ? "service-grid compact" : "service-grid"}>
    {serviceItems.map(({ icon: Icon, title, sw: swTitle, desc, swDesc }) => <article className="service-card card" key={title}><div className="service-icon"><Icon /></div><h3>{sw ? swTitle : title}</h3><p>{sw ? swDesc : desc}</p></article>)}
  </div>;
}
