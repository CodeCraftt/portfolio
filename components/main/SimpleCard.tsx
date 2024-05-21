import React from 'react';

interface SimpleCardProps {
  href: string;
  imgSrc: string;
  title: string;
  borderColor: string; // For dynamic border color
}

const SimpleCard: React.FC<SimpleCardProps> = ({ href, imgSrc, title, borderColor }) => {
  return (
    <div
      className="w-full max-w-xs mx-auto my-4 p-1  bg-[#151030] shadow-lg hover:transform hover:scale-105 transition-transform duration-300 z-30"
      style={{
        borderImageSource: borderColor,
        borderImageSlice: 1,
        borderWidth: '2px',
        borderStyle: 'solid'
      }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center bg-tertiary rounded-xl py-5 px-4"
      >
        <img
          src={imgSrc}
          alt={title}
          className="w-16 h-16 object-contain mb-2"
        />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </a>
    </div>
  );
};

export default SimpleCard;
