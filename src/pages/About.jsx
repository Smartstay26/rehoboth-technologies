import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="py-24 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-8">
            About Rehoboth Technologies
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Rehoboth Technologies Company Limited is a Tanzanian
            technology company dedicated to delivering innovative,
            reliable and scalable digital solutions for businesses,
            institutions and organizations.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            We specialize in software development, ICT infrastructure,
            cybersecurity, automation, cloud solutions and digital
            transformation services that help organizations improve
            efficiency, productivity and growth.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-700">
            To empower businesses through innovative technology
            solutions that create measurable value and sustainable
            growth.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">
            Our Vision
          </h2>

          <p className="text-gray-700">
            To become a leading technology solutions provider in
            Tanzania and across Africa.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}