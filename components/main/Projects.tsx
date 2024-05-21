import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
  className="flex flex-col items-center justify-center py-4 sm:py-[15px] mt-[-100px] sm:mt-[-200px]"
  id="projects"
>
  <h1 className="text-[32px] sm:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-20">
    My Projects
  </h1>
  <div className="w-full flex flex-col sm:flex-row justify-center flex-wrap gap-4 px-4 sm:px-10">
    <ProjectCard
      src="/bb.png"
      title="BeyondBazar: Your Ultimate E-Commerce Experience"
      description="BeyondBazar is a feature-rich e-commerce platform designed for a seamless and secure shopping experience. With a dynamic customer interface and an extensive admin panel, BeyondBazar caters to both customers and administrators, ensuring a comprehensive solution for all."
      githubUrl="https://github.com/CodeCraftt/Beyond-Bazar"
    />

    <ProjectCard
      src="/codefury.png"
      title="Codefury-Online Judge Platform"
      description="Code execution and judgment arena where you sling code like a pro and get instant verdicts on whether your creation is a masterpiece or a wild ride to the bug kingdom."
      githubUrl="https://github.com/CodeCraftt/CODEfury"
    />

    <ProjectCard
      src="/dpr.png"
      title="DriveProtector"
      description="Developed a secure cloud storage application, using Next.js for both frontend and backend. Implemented end-to-end encryption for files stored on Google Drive, ensuring data confidentiality."
      githubUrl="https://github.com/CodeCraftt/DriveProtector"
    />
  </div>
</div>

  );
};

export default Projects;
