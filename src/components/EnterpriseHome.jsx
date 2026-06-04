import { motion } from "framer-motion";

export default function EnterpriseHome() {
  const services = [
    "Software Development",
    "ICT Infrastructure",
    "Cybersecurity",
    "Cloud Solutions",
    "Systems Integration",
    "Digital Transformation",
  ];

  const testimonials = [
    {
      name: "Hotel Manager",
      company: "Dar Central Hotel",
      text: "HotelConnect transformed our reservation process and improved customer experience."
    },
    {
      name: "Business Owner",
      company: "SME Tanzania",
      text: "Rehoboth Technologies delivered our business system professionally and on time."
    },
    {
      name: "ICT Officer",
      company: "Private Organization",
      text: "Excellent support, reliable solutions and outstanding technical expertise."
    }
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-28">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-8"
          >
            Technology Solutions
            <br />
            For Business Growth
          </motion.h1>

          <p className="text-xl max-w-3xl mb-10">
            Rehoboth Technologies Company Limited delivers
            innovative software, ICT infrastructure,
            automation, cybersecurity and digital
            transformation solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold"
            >
              Request Consultation
            </a>

            <a
              href="/products"
              className="border border-white px-8 py-4 rounded-xl"
            >
              View Products
            </a>
          </div>
        </div>

      </section>

      {/* STATS */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            {[
              ["50+", "Projects"],
              ["100+", "Clients"],
              ["24/7", "Support"],
              ["5+", "Years Experience"]
            ].map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                className="bg-white shadow-xl rounded-2xl p-8 text-center"
              >
                <h2 className="text-5xl font-bold text-blue-700">
                  {item[0]}
                </h2>

                <p className="mt-3 text-gray-600">
                  {item[1]}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <motion.div
                whileHover={{
                  y: -10
                }}
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {service}
                </h3>

                <p className="text-gray-600">
                  Professional solutions tailored for modern organizations.
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* HOTELCONNECT */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                Flagship Product
              </span>

              <h2 className="text-5xl font-bold mt-6 mb-6">
                HotelConnect TZ
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Automated hotel bookings through WhatsApp,
                mobile money integration and guest management.
              </p>

              <a
                href="https://hotelconnect-landing.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-8 py-4 rounded-xl"
              >
                Visit HotelConnect
              </a>
            </div>

            <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-10 text-white">

              <h3 className="text-3xl font-bold mb-6">
                Key Features
              </h3>

              <ul className="space-y-4">
                <li>✓ WhatsApp Booking Automation</li>
                <li>✓ Mobile Money Payments</li>
                <li>✓ Instant Confirmations</li>
                <li>✓ Hotel Management Tools</li>
                <li>✓ English & Kiswahili Support</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Client Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <p className="text-gray-600 mb-6">
                  "{item.text}"
                </p>

                <h4 className="font-bold">
                  {item.name}
                </h4>

                <p className="text-gray-500">
                  {item.company}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-700 text-white py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-6">
            Ready To Transform Your Business?
          </h2>

          <p className="mb-10 text-xl">
            Let's discuss your technology needs today.
          </p>

          <a
            href="https://wa.me/255768910194"
            className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold"
          >
            Contact Us
          </a>

        </div>

      </section>
    </>
  );
}