import React, { useState } from "react";
import imagePaths from "./imagePaths";
import imagePaths_Chinelo from "./imagePaths_Chinelo";
import "./Generator.css";
import buttonNames from "./buttonNames";
import { imageStyles } from "./imageStyle";

const Generator = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [animation, setAnimation] = useState(true);
  const [expand, setExpanded] = useState(false);

  const [selection, setSelection] = useState(1);

  const handleClick = (index) => {
    setSelectedImage(index);
    setAnimation(false);
    setExpanded(false)
  };
  const handleClickleave = () => {
    setAnimation(true);
   
  };

  const handleClickedButton = (buttonId) => {
    setSelection(buttonId);
  };
  const handleExpand = (index) => {
    setSelectedImage(index);
    setExpanded(true);
    setAnimation(false);
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
      <div className={` items-center flex flex-col duration-[4s] ease-in-out  mt-10 ml-5`}>
        <div className={`${animation ? "maindiv" : ""} flex  gap-7  p-4`}>
          {duplicatedImagePaths.map((path, index) => (
            <img
              key={index}
              src={path}
              alt={` ${index}`}
              onMouseEnter={() => handleClick(index)}
              onMouseLeave={() => handleClickleave()}
              onClick={() => handleExpand(index)}
              style={{
                width: expand
                  ? selectedImage === index
                    ? "auto"
                    : "200px"
                  : "200px",
                height: "350px",

                ...(animation === false
                  ? selectedImage === index
                    ? imageStyles.zero
                    : selectedImage === index + 1 || selectedImage === index - 1
                    ? imageStyles.one
                    : selectedImage === index + 2 || selectedImage === index - 2
                    ? imageStyles.two
                    : imageStyles.rest
                  : imageStyles.none),
              }}
              className="z-50 rounded-xl object-cover"
            />
          ))}
        </div>
      </div>
      <div
        className={` flex flex-col px-5 justify-end w-screen  text-white duration-[4s] ease-in-out`}
      >
        <ul className={`justify-around  flex flex-wrap   text-md`}>
          {buttonNames.map((names, index) => (
            <button
              key={index}
              onClick={() => handleClickedButton(index + 1)}
              className="w-fit p-2 mb-4 h-fit border-2 border-white rounded-lg opacity-30 hover:opacity-100 hover:bg-zinc-300 hover:text-black duration-1000 ease-in-out "
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
