import React from "react";
import { FaAws, FaCloud, FaCode, FaTrophy } from "react-icons/fa";

const achievements = [
  {
    title: "AWS Certified Cloud Practitioner",
    description:
      "Officially certified in AWS cloud services including compute, IAM, S3, billing, and architecture.",
    year: "2025",
    icon: <FaAws className="text-2xl text-brand" />,
  },
  {
    title: "AWS Skills Center: Cloud Basics",
    description:
      "Completed beginner training on cloud infrastructure fundamentals including IAM, EC2, and cloud billing.",
    year: "2025",
    icon: <FaCloud className="text-2xl text-brand" />,
  },
  {
    title: "LeetCode Top 8.68% – 600+ Problems Solved",
    description:
      "Achieved a global top 8.68% ranking by solving over 600 data structures and algorithms problems.",
    year: "2024",
    icon: <FaCode className="text-2xl text-brand" />,
  },
  {
    title: "6th Rank – Coding Contest (600+ participants)",
    description:
      "Ranked 6th in an intra-college coding competition out of more than 600 skilled coders.",
    year: "2024",
    icon: <FaTrophy className="text-2xl text-brand" />,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-background text-text py-20 px-4"  >
      <h2 className="text-4xl font-bold text-brand text-center mb-12">
        Achievements & Certifications
      </h2>

      <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="relative bg-card border border-zinc-700/30 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Year Badge */}
            <div className="absolute top-4 right-4 bg-zinc-900 text-xs text-white px-3 py-1 rounded-full shadow-sm">
              {item.year}
            </div>

            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
