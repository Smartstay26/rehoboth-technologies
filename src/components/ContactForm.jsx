export default function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full border p-3 rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full border p-3 rounded"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        className="w-full border p-3 rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
      >
        Send Message
      </button>
    </form>
  );
}