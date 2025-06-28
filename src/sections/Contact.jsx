import React, { useRef } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_t1lj1og',     // Replace with your EmailJS service ID
        'template_umcmuqm',    // Replace with your template ID
        form.current,
        '7FNlui2G94KsW8YFu'      // Replace with your public key (user ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-background text-text py-20 px-6" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-brand text-center mb-4">Let&apos;s Work Together</h2>
      <p className="text-center text-gray-400 mb-12 text-md">
        Ready to bring your ideas to life? Let's connect and create something amazing!
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT - Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-brand-dark p-3 rounded-full">
              <FaEnvelope className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-brand">Email</h4>
              <p className="text-sm">tarunyadav2613@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-brand-dark p-3 rounded-full">
              <FaLinkedin className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-brand">LinkedIn</h4>
              <p className="text-sm break-all">
                https://www.linkedin.com/in/tarun-yadav-529184238/
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-brand-dark p-3 rounded-full">
              <FaGithub className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-brand">GitHub</h4>
              <p className="text-sm break-all">https://github.com/tarunyadav2613</p>
            </div>
          </div>

          <a
            href="/Tarun_Yadav_Resume.pdf"
            download
            className="inline-block mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>
        </div>

        {/* RIGHT - Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="bg-card p-6 rounded-xl shadow-md space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-zinc-900 text-white p-2 rounded-md border border-zinc-700"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-zinc-900 text-white p-2 rounded-md border border-zinc-700"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full bg-zinc-900 text-white p-2 rounded-md border border-zinc-700"
              placeholder="Project inquiry"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              required
              className="w-full bg-zinc-900 text-white p-2 h-32 rounded-md border border-zinc-700"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-brand text-white py-2 rounded-full hover:bg-brand-dark transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
