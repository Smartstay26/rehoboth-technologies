import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Privacy() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">
          Privacy Policy
        </h1>

        <p>
          Rehoboth Technologies Company Limited respects your privacy.
          This website collects only necessary information for
          communication and service delivery.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Privacy;