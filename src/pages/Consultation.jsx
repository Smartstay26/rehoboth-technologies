export default function Consultation() {
  return (
    <div className="container">
      <h1>Request a Consultation</h1>

      <p>
        Tell us about your project and our team will contact you.
      </p>

      <form
        name="consultation"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="consultation" />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
        />

        <textarea
          name="project"
          placeholder="Describe your project"
          rows="6"
          required
        ></textarea>

        <button type="submit">
          Submit Request
        </button>
      </form>
    </div>
  );
}