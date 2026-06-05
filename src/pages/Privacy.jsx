import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <>
      <Navbar />

      <section className="py-24 max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8">
          Privacy Policy
        </h1>

        <p className="mb-6">
          Rehoboth Technologies Company Limited respects your privacy
          and is committed to protecting your personal information.
        </p>

        <p className="mb-6">
          We collect information only when necessary for communication,
          service delivery, customer support and business operations.
        </p>

        <p className="mb-6">
          We do not sell, rent or share personal information with third
          parties except where required by law.
        </p>
      </section>

      <Footer />
    </>
  );
}