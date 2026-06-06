export default function Consultation() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-blue-900">
            Request a Consultation
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Tell us about your project and our experts will contact you
            within 24 hours.
          </p>
        </div>

        <form
          name="consultation"
          method="POST"
          data-netlify="true"
          className="space-y-6"
        >
          <input
            type="hidden"
            name="form-name"
            value="consultation"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="border border-gray-300 rounded-xl p-4 w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Business Email"
              required
              className="border border-gray-300 rounded-xl p-4 w-full"
            />
          </div>

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="border border-gray-300 rounded-xl p-4 w-full"
          />

          <select
            name="service"
            className="border border-gray-300 rounded-xl p-4 w-full"
          >
            <option>Select Service</option>
            <option>Software Development</option>
            <option>HotelConnect TZ</option>
            <option>ICT Infrastructure</option>
            <option>Cyber Security</option>
            <option>Cloud Solutions</option>
            <option>Business Automation</option>
          </select>

          <textarea
            name="project"
            rows="6"
            placeholder="Describe your project requirements..."
            required
            className="border border-gray-300 rounded-xl p-4 w-full"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl text-lg font-semibold transition"
          >
            Submit Consultation Request
          </button>
        </form>
      </div>
    </div>
  );
}