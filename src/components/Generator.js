import React, { useState } from "react";
import imagePaths from "./imagePaths";

const Generator = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="flex p-10 bg-black flex-col w-max h-screen justify-center ">
      <h1 className="text-9xl opacity-60 absolute top-24 -rotate-45 -z-20">
        IMG GENERATOR
      </h1>
      <div className="flex  flex-wrap  gap-7 relative ">
        {imagePaths.map((path, index) => (
          <img
            key={index}
            src={path}
            alt={` ${index}`}
            width={
              [0, 1, 7, 8, 9].includes(index) && selectedImage === index
                ? 600
                : 300
            }
            
            height={
              [0, 1, 7, 8, 9].includes(index) && selectedImage === index
                ? 400
                : 400
            }
            onMouseOver={() => handleClick(index)}
            style={{
              opacity: selectedImage === index ? 1 : 0.1,
            }}
            className="z-50 rounded-xl object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Generator;
