"use client";

import { useState } from "react";

const ProjectCard = ({ title, main, image, video, link }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="p-6 flex flex-col bg-[#0c0e19] shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300">
      <img
        className="rounded-xl object-cover h-48 w-full"
        src={image || "/placeholder.svg"}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-sm md:text-md text-gray-300 mt-2">{main}</p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => setIsPlaying(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Demo
          </button>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
              Source Code
            </button>
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative bg-black p-4 rounded-lg w-[90vw] md:w-[60vw] lg:w-[50vw] max-w-4xl">
            {/* Close Button */}
            <button
              className="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors duration-300"
              onClick={() => setIsPlaying(false)}
            >
              X
            </button>
            {/* Video Player */}
            <video controls autoPlay className="w-full h-auto rounded-lg">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
