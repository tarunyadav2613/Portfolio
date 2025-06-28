import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 bg-background text-text flex flex-col justify-center items-center text-center px-6"
    >
      <div className="max-w-3xl space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-up">
          Hi, I'm{" "}
          <span className="text-brand-light drop-shadow-[0_2px_4px_rgba(59,130,246,0.7)]">
            Tarun Yadav
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-light animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Full Stack Developer
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
          I specialize in building secure, scalable web applications using the MERN stack, cloud
          platforms like AWS, and robust backend services. Welcome to my digital space!
        </p>

        <div className="animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#contact"
            className="bg-black text-brand font-semibold text-lg px-8 py-3 rounded-full drop-shadow-md shadow-brand hover:bg-zinc-900 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
