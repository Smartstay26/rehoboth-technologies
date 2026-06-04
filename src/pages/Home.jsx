import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import EnterpriseHome from "../components/EnterpriseHome";

export default function Home() {
  return (
    <>
      <Navbar />
      <EnterpriseHome />
      <Footer />
      <WhatsAppButton />
    </>
  );
}