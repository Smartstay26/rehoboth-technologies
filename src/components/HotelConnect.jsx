export default function HotelConnect() {
  return (
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

            <p className="text-lg text-gray-600 mb-6">
              HotelConnect TZ is an innovative hospitality platform
              developed by Rehoboth Technologies Company Limited.
              It enables hotels, lodges, guest houses and resorts
              to receive bookings through WhatsApp, process mobile
              money payments and automate guest confirmations.
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>✓ WhatsApp Booking Automation</li>
              <li>✓ Mobile Money Integration</li>
              <li>✓ Instant Booking Confirmation</li>
              <li>✓ English & Kiswahili Support</li>
              <li>✓ Hotel Reservation Management</li>
              <li>✓ Guest Experience Enhancement</li>
            </ul>

            <div className="flex gap-4">
              <a
                href="https://hotelconnect-landing.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                Visit Website
              </a>

              <a
                href="https://wa.me/255768910194"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg"
              >
                Request Demo
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-10 shadow-xl">
            <h3 className="text-3xl font-bold mb-6">
              Why Hotels Choose HotelConnect
            </h3>

            <div className="space-y-5">
              <div>
                <h4 className="font-semibold">
                  Automated Reservations
                </h4>
                <p>
                  Reduce manual booking management.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  WhatsApp Integration
                </h4>
                <p>
                  Customers book directly through WhatsApp.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Mobile Payments
                </h4>
                <p>
                  Accept payments using Tanzania mobile money services.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Increased Revenue
                </h4>
                <p>
                  Convert more inquiries into confirmed bookings.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}