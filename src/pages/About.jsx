import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About(){
  return(
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-20 px-6">

        <h1 className="text-4xl font-bold mb-6">
          About Us
        </h1>

        <p>
          Rehoboth Technologies Company Limited is a
          Tanzanian technology company providing
          software development, ICT infrastructure,
          cybersecurity, automation and digital
          transformation services.
        </p>

      </div>

      <Footer />
    </>
  )
}