import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    );

    alert("Message sent successfully!");
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-4"
    >
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
        rows="5"
        placeholder="Message"
        className="w-full border p-3 rounded"
        required
      />

      <button
        className="bg-blue-700 text-white px-6 py-3 rounded"
      >
        Send Message
      </button>
    </form>
  );
}