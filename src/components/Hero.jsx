import hero from "../assets/hero.png";

export default function Hero() {
  return (
    
<section className="bg-gradient-to-r from-blue-900 to-blue-600">
      <div className="max-w-7xl mx-auto px-6 py-28">

        <h1 className="text-5xl font-bold mb-6">
          Innovative Technology.
          Reliable Solutions.
          Real Impact.
        </h1>

        <p className="text-xl mb-8">
          Software Development, ICT Infrastructure,
          Automation, Cybersecurity and Digital Transformation.
        </p>

        <div className="flex gap-4">
          <a
            href="/contact"
            className="bg-white text-blue-700 px-6 py-3 rounded"
          >
            Contact Us
          </a>

          <a
            href="/services"
            className="border border-white px-6 py-3 rounded"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}