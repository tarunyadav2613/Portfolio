import React from "react";

const skills = {
  "Programming Languages": [
    { name: "C/C++", level: 95 },
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Java", level: 75 },
  ],
  "Frameworks & Libraries": [
    { name: "Django", level: 95 },
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 92 },
  ],
  "Databases & Tools": [
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MySQL", level: 90 },
    { name: "Tailwind CSS", level: 92 },
  ],
  "Specialized Technologies": [
    { name: "OpenCV", level: 80 },
    { name: "Socket.IO", level: 75 },
    { name: "JWT", level: 70 },
    { name: "Arduino", level: 60 },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="bg-background text-text py-20 px-4"   >
      <h2 className="text-4xl font-bold text-brand text-center mb-12">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, skillsList]) => (
          <div
            key={category}
            className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-brand mb-6">
              {category}
            </h3>
            {skillsList.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div
                    className="bg-brand-light h-2 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
