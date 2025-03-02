import React from "react";
import ProjectCard from "./ProjectCard";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
import project1 from "../../assets/shuju.png";
import project2 from "../../assets/banana.png";
import project3 from "../../assets/web-archive.png";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Projects</h1>
      <div className="py-12 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <ProjectCard
          title="Query Builder"
          main="A dynamic query builder web application developed using Python Flask and JavaScript, with SQLite for data storage. This tool allows users to build complex search queries with operators like AND, NOT, and NEAR to filter and retrieve relevant results from the database. The intuitive interface provides a seamless experience for querying data and managing filters"
          image={project1}
          video={video1}
        />
        <ProjectCard
          title="Banana Usage Predicted"
          main="A machine learning-based banana usage prediction system built with Python and ReactJS. The model is trained on a large dataset and predicts the optimal usage for a given banana variety based on user input. This system provides valuable insights by analyzing different banana varieties and their most suitable applications."
          image={project2}
          video={video2}
          link="https://github.com/dulithOk/banana-usage-predicted-ML"
        />
        <ProjectCard
          title="Web Crawler"
          main="A web crawler system developed using Python and Next.js that extracts all URLs from a given domain, retrieves the content of each webpage, and stores the data in PostgreSQL with Paradedb integration for enhanced search capabilities.. The system also includes functionality for extracting content from PDF files, making it a versatile tool for data collection and processing."
          image={project3}
          video={""}
          link="https://github.com/dulithOk/web-crawler-archive"
        />
      </div>
    </div>
  );
};

export default Projects;
