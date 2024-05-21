import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubUrl: string;
}

const ProjectCard = ({ src, title, description, githubUrl }: Props) => {
  return (
    <div className="w-[100vw] lg:w-[32%] p-4 bg-[#1a1a2e] rounded-lg shadow-lg flex flex-col justify-between">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="flex flex-col flex-grow p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 flex-grow">{description}</p>

        
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className=" py-2 button-primary text-center text-white cursor-pointer rounded-lg w-full mt-4 z-30"
        >
         
          Go to code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
