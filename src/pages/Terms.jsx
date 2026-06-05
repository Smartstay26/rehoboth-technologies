import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <>
      <Navbar />

      <section className="py-24 max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8">
          Terms of Service
        </h1>

        <p className="mb-6">
          By accessing and using this website, you agree to comply with
          these terms and conditions.
        </p>

        <p className="mb-6">
          Rehoboth Technologies Company Limited provides information
          and services on an "as available" basis without warranties
          of any kind.
        </p>

        <p className="mb-6">
          We reserve the right to modify these terms at any time
          without prior notice.
        </p>
      </section>

      <Footer />
    </>
  );
}