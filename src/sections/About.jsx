import React from "react";
import tarunPhoto from "../assets/tarun.jpg"; // 🖼 Replace with your photo

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#0f172a] text-gray-100"  >
        
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT - Description */}
        <div>
          <h2 className="text-4xl font-bold text-brand mb-6"  >About Me</h2>
          <p className="mb-4">
            I'm <span className="text-brand-light font-semibold">Tarun Yadav</span>, a B.Tech student in Computer Science, passionate about building full stack web applications and secure systems.
          </p>
          <p className="mb-4">
            I have experience with the MERN stack, Flask, and Python-based security tools. I've built apps like a drowsiness detection system, RSA encryption tools, and compiler visualizers.
          </p>
          <p>
            I love solving real-world problems through technology and enjoy collaborating on challenging projects that make an impact. Currently exploring cloud technologies (AWS) and system security.
          </p>
        </div>

        {/* RIGHT - Profile Card */}
        <div className="bg-[#1e293b] p-6 rounded-xl text-center shadow-lg">
          <img
            src={tarunPhoto}
            alt="Tarun Yadav"
            className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-brand"
            data-aos-delay="100" 
          />
          <h3 className="text-xl font-bold text-brand">Tarun Yadav</h3>
          <p className="text-sm text-gray-400">Full Stack Developer</p>
          <p className="text-sm text-gray-500">B.Tech Computer Science</p>
        </div>
      </div>
    </section>
  );
};

export default About;