import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Products() {
  return (
    <>
      <Navbar />

      <section className="py-24 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-12">
            Our Products
          </h1>

          <div className="bg-white rounded-2xl shadow-xl p-10">

            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              HotelConnect TZ
            </h2>

            <p className="text-gray-700 mb-6">
              HotelConnect TZ enables hotels, lodges, resorts and
              guest houses to receive bookings through WhatsApp,
              process mobile money payments and automate customer
              confirmations.
            </p>

            <a
              href="https://hotelconnect-landing.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Visit HotelConnect
            </a>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}