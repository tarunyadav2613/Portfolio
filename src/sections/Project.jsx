import React from "react";
import astImage from "../assets/ast.jpg";       // Replace with your own images
import rsaImage from "../assets/rsa.jpg";
import drowsyImage from "../assets/drowsy.jpg";

const projects = [
  {
    title: "AST Visualizer",
    description:
      "GUI-based mini-compiler that parses arithmetic, logical, and conditional expressions, and displays a real-time Abstract Syntax Tree (AST) using Graphviz.",
    tech: ["Python", "Tkinter", "Graphviz"],
    image: astImage,
    github: "https://github.com/tarunyadav2613",
  },
  {
    title: "RSA Encryption Web App",
    description:
      "A Flask-based web platform that securely encrypts text, files, and images using RSA. Integrated with NumPy and SymPy for performance.",
    tech: ["Python", "Flask", "NumPy", "SymPy", "PIL"],
    image: rsaImage,
    github: "https://github.com/tarunyadav2613",
  },
  {
    title: "Drowsiness Detection System",
    description:
      "Monitors driver alertness in real-time using eye aspect ratio and head pose estimation. Achieves over 90% accuracy in real-world conditions.",
    tech: ["Python", "OpenCV", "DLib", "Tkinter"],
    image: drowsyImage,
    github: "https://github.com/tarunyadav2613",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background text-text text-center">
      <h2 className="text-4xl font-bold mb-4 text-brand">Featured Projects</h2>
      <p className="text-gray-400 mb-12">
        A showcase of my recent work, featuring innovative solutions and cutting-edge technologies
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-light mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-brand-dark/30 text-xs text-brand px-3 py-1 rounded-full hover:bg-brand-dark/50 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-brand-dark text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-brand transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
