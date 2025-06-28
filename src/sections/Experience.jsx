import React from "react";

const experience = {
  title: "SDE Assistant Intern",
  company: "Technology Business Incubator – Graphic Era Hill University",
  year: "July 2024 – Oct 2024",
  bullets: [
    "Built responsive full-stack web applications using the MERN stack, achieving 60% faster page load time and reducing bounce rates by 30%.",
    "Developed and maintained scalable RESTful APIs with Node.js and Express.js, improving data processing speed by 40% and backend performance by 20%.",
    "Led testing and deployment cycles with over 50 test cases and 3 successful production rollouts adhering to industry coding standards.",
    "Collaborated with stakeholders and UI teams to gather requirements and deliver clean, maintainable, and modular code.",
  ],
  stack: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful APIs"],
};

const Experience = () => {
  return (
    <section id="experience" className="bg-background text-text py-20 px-4">
      <h2 className="text-4xl font-bold text-brand text-center mb-4">
        Professional Experience
      </h2>
      <p className="text-center text-gray-400 mb-12 text-md">
        Real-world experience building scalable applications and collaborating across teams.
      </p>

      <div
        className="max-w-4xl mx-auto bg-card p-6 rounded-2xl shadow-lg border border-zinc-700/30"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-brand-light">
            {experience.title}
          </h3>
          <p className="text-sm text-gray-300">{experience.company}</p>
          <span className="text-xs text-zinc-400">{experience.year}</span>
        </div>

        {/* Bullet Points */}
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
          {experience.bullets.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {experience.stack.map((tech, i) => (
            <span
              key={i}
              className="bg-brand-dark text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
