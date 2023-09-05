// imageStyles.js

export const imageStyles = {
  none: {
    opacity: 0.3,
    transform: "scale(1)",
    transition: "transform 0.7s ease-in-out",
  
  },
  zero: {
    zIndex:4,
    transform: "scale(1.3)",
    transition: "transform 0.7s ease-in-out",
    filter: "brightness(80%)",
  },
  one: {
    filter: "brightness(45%)",
    zIndex:3,
    transform: "scale(1.2)",
    transition: "transform 0.5s ease-in-out",
  },
  two: {
    filter: "brightness(35%)",
    zIndex:2,
    transform: "scale(1.1)",
    transition: "transform 0.6s ease-in-out",
  },
  rest: {
    filter: "brightness(25%)",
    zIndex:1,
    transform: "scale(1)",
  },
};
