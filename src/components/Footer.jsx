export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h3 className="font-bold text-2xl mb-4">
              Rehoboth Technologies
            </h3>

            <p className="text-gray-400">
              Technology solutions for business growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">
              Services
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>Software Development</li>
              <li>Cybersecurity</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">
              Products
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>HotelConnect TZ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">
              Contact
            </h4>

            <p className="text-gray-400">
              +255 768 910 194
            </p>

            <p className="text-gray-400">
              info@rehobothtechnologies.co.tz
            </p>
          </div>

        </div>

      </div>

    </footer>
  );
}