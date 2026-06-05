import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="py-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-8">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Company Information
              </h3>

              <p className="mb-3">
                <strong>Company:</strong><br />
                Rehoboth Technologies Company Limited
              </p>

              <p className="mb-3">
                <strong>Address:</strong><br />
                Plot No. 37 Block A,
                Regent Estate,
                Mikocheni,
                Dar es Salaam,
                Tanzania
              </p>

              <p className="mb-3">
                <strong>Phone:</strong><br />
                +255 768 910 194
              </p>

              <p className="mb-3">
                <strong>Email:</strong><br />
                info@rehobothtechnologies.co.tz
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Quick Contact
              </h3>

              <a
                href="mailto:info@rehobothtechnologies.co.tz"
                className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                Email Us
              </a>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}