import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background text-text pt-16 pb-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* LEFT: Intro */}
        <div>
          <h3 className="text-xl font-bold text-brand mb-2">Tarun Yadav</h3>
          <p className="text-sm text-gray-400">
            Full-Stack Developer passionate about building secure and scalable
            web applications. Always learning, always building.
          </p>
        </div>

        {/* CENTER: Quick Links */}
        <div>
          <h4 className="text-md font-semibold text-brand mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#achievements" className="hover:underline">Achievements</a></li>
            <li><a href="#experience" className="hover:underline">Experience</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT: Socials */}
        <div>
          <h4 className="text-md font-semibold text-brand mb-3">Connect</h4>
          <div className="flex space-x-4">
            <a
              href="https://github.com/tarunyadav2613"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-3 rounded-full hover:bg-brand transition"
            >
              <FaGithub className="text-brand-light" />
            </a>
            <a
              href="https://www.linkedin.com/in/tarun-yadav-529184238/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-3 rounded-full hover:bg-brand transition"
            >
              <FaLinkedin className="text-brand-light" />
            </a>
            <a
              href="mailto:tarunyadav2613@gmail.com"
              className="bg-card p-3 rounded-full hover:bg-brand transition"
            >
              <FaEnvelope className="text-brand-light" />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="text-center mt-12 text-sm text-gray-500 border-t border-zinc-800 pt-4">
        © {new Date().getFullYear()} Tarun Yadav. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
