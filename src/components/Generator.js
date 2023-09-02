import React, { useState } from "react";
import imagePaths from "./imagePaths";
import "./Generator.css";

const Generator = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className=" relative flex p-10 bg-black flex-col w-fit h-screen justify-center ">
      
      <div className="flex maindiv gap-7  p-4 ">
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
              opacity: selectedImage === index ? 1 : 0.2,
            }}
            className="z-50 rounded-xl object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Generator;
