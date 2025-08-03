import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  // Group technologies by rows
  const firstRow = technologies.slice(0, 6); // HTML5, CSS3, Tailwind, JS, React, Redux
  const secondRow = technologies.slice(6, 12); // Node, MongoDB, Python, Pandas, Anaconda, TensorFlow
  const thirdRow = technologies.slice(12); // AWS, Docker, Git

  return (
    <div className='flex flex-col gap-12'>
      {/* First Row */}
      <div className='flex flex-row flex-wrap justify-center gap-16'>
        {firstRow.map((technology) => (
          <div className='flex flex-col items-center justify-center' key={technology.name}>
            <img 
              src={technology.icon} 
              alt={technology.name}
              className='w-20 h-20 object-contain'
            />
            <span className='text-sm text-secondary mt-3 text-center'>
              {technology.name}
            </span>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className='flex flex-row flex-wrap justify-center gap-16'>
        {secondRow.map((technology) => (
          <div className='flex flex-col items-center justify-center' key={technology.name}>
            <img 
              src={technology.icon} 
              alt={technology.name}
              className='w-20 h-20 object-contain'
            />
            <span className='text-sm text-secondary mt-3 text-center'>
              {technology.name}
            </span>
          </div>
        ))}
      </div>

      {/* Third Row */}
      <div className='flex flex-row flex-wrap justify-center gap-16'>
        {thirdRow.map((technology) => (
          <div className='flex flex-col items-center justify-center' key={technology.name}>
            <img 
              src={technology.icon} 
              alt={technology.name}
              className='w-20 h-20 object-contain'
            />
            <span className='text-sm text-secondary mt-3 text-center'>
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
