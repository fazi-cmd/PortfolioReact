import { useState } from "react";
import emailService from "../utils/emailService";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = Object.fromEntries(new FormData(e.target));

    const result = await emailService.sendEmail(formData);

    if (result.success) {
      setSubmitStatus({
        type: "success",
        message: "✅ Message Sent Successfully!",
      });
      e.target.reset();
    } else {
      setSubmitStatus({ type: "error", message: "❌ Failed to send message" });
    }

    setIsSubmitting(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-box">
          <h2>Let's Work Together</h2>
          <p className="desc">
            Ready to contribute my skills and passion to impactful
            research—let's connect and create opportunities together.
          </p>
          <div className="contact-detail">
            <div className="detail">
              <i className="fa-solid fa-phone"></i>
              <p>
                Phone
                <br />
                <span>(+92)3104735375</span>
              </p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="detail">
              <i className="fa-solid fa-envelope"></i>
              <p>
                Email
                <br />
                <span>fhatzsff@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="detail">
              <i className="fa-solid fa-location-dot"></i>
              <p>
                Address
                <br />
                <span>Rehman Park Daoke Muridke</span>
              </p>
            </div>
          </div>
        </div>

        <div className="contact-box">
          <form id="contact-form" onSubmit={handleSubmit}>
            <h2 className="heading">
              Contact <span>Me!</span>
            </h2>
            {submitStatus && (
              <div
                className={`alert ${
                  submitStatus.type === "success" ? "success" : "error"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <div className="field-box">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
