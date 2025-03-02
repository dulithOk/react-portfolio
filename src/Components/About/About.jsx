import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col items-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
      <p className="text-md md:text-lg text-center max-w-3xl leading-relaxed mb-8">
        I specialize in building robust backend systems that power seamless
        applications. While my core expertise lies in backend development, I
        also enjoy working on the frontend to deliver full-stack solutions. With
        a strong command of Docker, I ensure smooth deployment and scalability
        of applications, creating reliable and efficient systems.
      </p>

      <div className="w-full max-w-3xl">
        <div className="flex items-start gap-4 py-4">
          <IoArrowForward size={24} className="mt-1 text-blue-400" />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Backend Developer
            </h3>
            <p className="text-sm md:text-md leading-tight">
              I specialize in building robust APIs and backend systems with
              Python (FastAPI, Django), Spring Boot, and databases to support
              scalable applications.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 py-4">
          <IoArrowForward size={24} className="mt-1 text-green-400" />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Frontend Developer
            </h3>
            <p className="text-sm md:text-md leading-tight">
              I design and develop responsive, user-friendly web applications
              using React, Next, JavaScript, HTML, and CSS to create seamless
              user experiences.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 py-4">
          <IoArrowForward size={24} className="mt-1 text-yellow-400" />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Database Developer
            </h3>
            <p className="text-sm md:text-md leading-tight">
              Experienced in designing and optimizing relational and NoSQL
              databases like PostgreSQL, MySQL, and MongoDB to ensure data
              integrity and efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
