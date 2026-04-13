"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Simple mailto fallback
    const mailto = `mailto:mubarakmmm5@gmail.com?subject=${encodeURIComponent(
      subject || "Message from lugandaquran.online"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    // In a real app, we'd use a server action or API call here
    window.location.href = mailto;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <>
      <Navbar />
      <main className="legal-page" style={{ paddingTop: "140px" }}>
        <div className="legal-container" style={{ maxWidth: 660 }}>
          <div className="legal-header">
            <p className="legal-breadcrumb">
              <a href="/">Quran Luganda</a> / Contact
            </p>
            <h1>Contact Us</h1>
            <p className="legal-updated">
              We would love to hear from you. Use the form below to get in touch.
            </p>
          </div>

          {submitted ? (
            <div className="contact-success">
              <div className="contact-success-icon">✓</div>
              <h2>Message Prepared</h2>
              <p>
                JazakAllah khair for reaching out. Your email client should have opened with the message ready.
                Please click send to complete the process.
              </p>
              <a href="/" className="contact-back">
                ← Back to home
              </a>
            </div>
          ) : (
            <div className="legal-body">
              <p>
                Have a question, a suggestion, or found a problem with the site?
                We welcome all feedback from the community. You can also reach us
                if you would like to report a broken audio file or suggest an
                improvement.
              </p>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <span className="contact-info-label">Website</span>
                  <span>lugandaquran.online</span>
                </div>
                <div className="contact-info-card">
                  <span className="contact-info-label">Location</span>
                  <span>Uganda</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Musa Abdullah"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. musa@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  >
                    <option value="">Select a subject...</option>
                    <option value="General question">General question</option>
                    <option value="Broken audio report">Broken audio report</option>
                    <option value="Content suggestion">Content suggestion</option>
                    <option value="Technical issue">Technical issue</option>
                    <option value="Partnership or collaboration">
                      Partnership or collaboration
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Write your message here..."
                    required
                  />
                </div>

                <button type="submit" className="contact-submit" disabled={loading}>
                  {loading ? "Preparing..." : "Send message"}
                </button>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
