import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b4cjpxl",
        "template_23n8qwf",
        form.current,
        "_Zh-svyHqvohlzzP"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-4"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        className="w-full border p-3 rounded"
        required
      />

      <input
        type="email"
        name="user_email"
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