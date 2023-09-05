import React, { useState } from "react";
import imagePaths from "./imagePaths";
import imagePaths_Chinelo from "./imagePaths_Chinelo";
import "./Generator.css";
import buttonNames from "./buttonNames";

const Generator = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [animation, setAnimation] = useState(true);

  const [selection, setSelection] = useState(1);

  const handleClick = (index) => {
    setSelectedImage(index);
    setAnimation(false);
  };
  const handleClickleave = () => {
    setAnimation(true);
  };
 
  const handleClickedButton = (buttonId) => {
    setSelection(buttonId);
   
  };
  const selectionCollection = selection === 1 ? imagePaths : imagePaths_Chinelo;

  const duplicatedImagePaths = [];
  for (let i = 0; i < 3; i++) {
    duplicatedImagePaths.push(...selectionCollection);
  }

  return (
    <div
      className={` relative flex justify-around items-center  bg-black flex-col w-screen  h-screen`}
    >
      <div
        className={` items-center flex flex-col duration-[4s] ease-in-out `}
      >
        <div className={`${animation ? "maindiv" : ""} flex  gap-7  p-4 `}>
          {duplicatedImagePaths.map((path, index) => (
            <img
              key={index}
              src={path}
              alt={` ${index}`}
              width={200}
              height={200}
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
      <div
        className={` flex flex-col  justify-end w-screen  text-white duration-[4s] ease-in-out`}
      >
        <ul className={`justify-around  flex   text-md`}>
          {buttonNames.map((names, index) => (
            <button
              key={index}
              onClick={() => handleClickedButton(index + 1)}
              className="w-fit p-2 h-fit border-2 border-white rounded-lg hover:bg-white hover:text-black duration-1000 ease-in-out "
            >
              {names}
            </button>
          ))}
        </ul>
      </div>
   
    </div>
  );
};

export default Generator;
