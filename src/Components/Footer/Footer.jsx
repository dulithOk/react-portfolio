import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="bg-[#465697] text-white p-10 md:p-16 flex flex-col items-center justify-center space-y-8"
    >
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide mb-4">
          Contact Me
        </h1>
        <h3 className="text-lg md:text-xl font-light mb-6">
          Feel free to reach out, I'm always happy to connect!
        </h3>
      </div>

      <ul className="space-y-4 text-lg md:text-xl">
        <li className="flex gap-3 items-center justify-center hover:text-yellow-500 transition-all duration-300">
          <MdOutlineEmail
            size={30}
            className="text-white hover:text-yellow-500"
          />
          <a href="mailto:myemail@gmail.com" className="hover:underline">
            dahanayakad22@gmail.com
          </a>
        </li>
        <li className="flex gap-3 items-center justify-center hover:text-yellow-500 transition-all duration-300">
          <CiLinkedin size={30} className="text-white hover:text-yellow-500" />
          <a
            href="https://www.linkedin.com/in/duli12/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/duli12
          </a>
        </li>
        <li className="flex gap-3 items-center justify-center hover:text-yellow-500 transition-all duration-300">
          <FaGithub size={30} className="text-white hover:text-yellow-500" />
          <a
            href="https://github.com/dulithOk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/dulithOk
          </a>
        </li>
      </ul>

      <div className="mt-8 text-center">
        <p className="text-sm md:text-lg font-light">
          &copy; 2025 Dulith. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
