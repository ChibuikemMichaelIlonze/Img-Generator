import React, { useState } from "react";
import imagePaths from "./imagePaths";
import "./Generator.css";

const Generator = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [animation, setAnimation] = useState(true);

  const handleClick = (index) => {
    setSelectedImage(index);
    setAnimation(false);
  };
  const handleClickleave = () => {
    setAnimation(true);
  };

  const duplicatedImagePaths = [];
  for (let i = 0; i < 3; i++) {
    duplicatedImagePaths.push(...imagePaths);
  }

  return (
    <div className=" relative flex p-10 bg-black flex-col w-fit h-screen justify-center ">
      <div className={`${animation ? "maindiv" : ""} flex  gap-7  p-4 `}>
        {duplicatedImagePaths.map((path, index) => (
          <img
            key={index}
            src={path}
            alt={` ${index}`}
            width={200}
            height={300}
            onMouseEnter={() => handleClick(index)}
            onMouseLeave={() => handleClickleave()}
            style={
              animation === false
                ? {
                    opacity:
                      selectedImage === index
                        ? 0.9
                        : selectedImage === index - 1
                        ? 0.4
                        : selectedImage === index - 2
                        ? 0.3
                        : selectedImage === index + 1
                        ? 0.4
                        : selectedImage === index + 2
                        ? 0.3
                        : 0.2,
                    transform:
                      selectedImage === index
                        ? "scale(1.3)"
                        : selectedImage === index - 1
                        ? "scale(1.2)"
                        : selectedImage === index - 2
                        ? "scale(1.1)"
                        : selectedImage === index + 1
                        ? "scale(1.2)"
                        : selectedImage === index + 2
                        ? "scale(1.1)"
                        : "scale(1)",
                    transition:
                      selectedImage === index
                        ? "transform 0.7s ease-in-out"
                        : selectedImage === index - 1
                        ? "transform 0.5s ease-in-out"
                        : selectedImage === index - 2
                        ? " transform 0.6s ease-in-out"
                        : selectedImage === index + 1
                        ? "transform 0.5s ease-in-out"
                        : selectedImage === index + 2
                        ? " transform 0.6s ease-in-out"
                        : "",
                  }
                : {
                    opacity: 0.2,
                    transform: "scale(1)",
                    transition: "transform 0.7s ease-in-out",
                  }
            }
            className="z-50 rounded-xl object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Generator;
