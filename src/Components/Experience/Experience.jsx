import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaGoogle,
  FaAmazon,
  FaJava,
  FaDocker,
} from "react-icons/fa";
import {
  SiRedis,
  SiMongodb,
  SiPython,
  SiNextdotjs,
  SiDjango,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Experience</h1>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Skills Section */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { Icon: SiPython, color: "#3776AB" },
            { Icon: FaJava, color: "#007396" },
            { Icon: SiDjango, color: "#092e20" },
            { Icon: SiNextdotjs, color: "#000000" },
            { Icon: FaDocker, color: "#2496ED" },
            { Icon: SiMysql, color: "#00758F" },
            { Icon: SiPostgresql, color: "#336791" },
            { Icon: FaHtml5, color: "#E34F26" },
            { Icon: FaCss3, color: "#1572B6" },
            { Icon: FaReact, color: "#61DAFB" },
            { Icon: FaJs, color: "#F7DF1E" },
            { Icon: FaFigma, color: "#F24E1E" },
            { Icon: SiMongodb, color: "#47A248" },
            { Icon: SiRedis, color: "#FF4438" },
          ].map(({ Icon, color }, index) => (
            <span
              key={index}
              className="p-4 flex flex-col items-center rounded-2xl hover:bg-gray-100 transition-colors duration-300"
            >
              <Icon size={50} color={color} />
            </span>
          ))}
        </div>

        {/* Experience Section */}
        <div className="flex flex-col gap-6">
          <ExperienceCard
            //icon={<FaGoogle color="#4285F4" size={50} />}
            title="Associate Software Engineer - Backend, DataFab.Ai"
            duration="Sept 2024 - Present"
            details={[
              "Develop and maintain scalable backend services using FastAPI and Flask.",
              "Deployed applications on cloud servers and managed CI/CD pipelines.",
              "Implement API integrations and optimize database performance in PostgreSQL.",
              "Collaborate with data scientists to integrate AI-driven analytics into applications.",
            ]}
          />
          <ExperienceCard
            //icon={<FaAmazon color="#FF9900" size={50} />}
            title="Trainee Software Engineer - FullStack, FocalId Technology"
            duration="May - Sept 2024"
            details={[
              "Developed dynamic full-stack applications using NextTs and Python.",
              "Designed and optimized relational databases for efficient data storage and retrieval.",
              "Worked on frontend UI/UX improvements for better user experience.",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ icon, title, duration, details }) => {
  return (
    <div className="flex items-center gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-6">
      {icon}
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm font-light">{duration}</p>
        <ul className="text-sm mt-2 list-disc list-inside">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
