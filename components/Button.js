import React from "react";
// basic button component to be reused throughout the pages
const Button = ({ children, onClick, variant = "default", style = {} }) => {
  const baseStyle = {
    padding: "5px 10px",
    margin: "0 5px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    fontFamily: "inherit",
  };
  // different style variants of the button
  const variants = {
    default: {
      backgroundColor: "white",
      color: "black",
    },
    delete: {
      backgroundColor: "red",
      color: "white",
    },
    // nav style has two variants to allow indication of what page the user is on
    nav: {
      backgroundColor: "transparent",
      borderRadius: 0,
      color: "white",
      borderBottom: "2px solid transparent",
    },
    "nav-active": {
      backgroundColor: "transparent",
      borderRadius: 0,
      color: "white",
      borderBottom: "2px solid white",
    },
  };
  // on click holds the button click functions
  // style holds the style
  // children holds whatever in inside the button (text)
  return (
    <button
      onClick={onClick}
      style={{
        ...baseStyle,
        ...variants[variant],
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
