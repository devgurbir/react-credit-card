import React, { useEffect } from "react";
import PropTypes from "prop-types";
const { useState } = require("react");

const PinItem = React.forwardRef(
  (
    { inputBoxLength, index, handleChange, handleBackspace, handlePaste },
    ref
  ) => {
    const handleKeyUp = (e) => {
      console.log(e.code);
      switch (e.code) {
        case "Backspace":
          return handleBackspace(e.target.value, index);
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
        case "Tab":
          break;
        default:
          return handleChange(e.target.value, index);
      }
    };

    return (
      <div>
        <input
          ref={ref}
          style={{ width: "2rem", padding: ".5rem" }}
          maxLength={inputBoxLength}
          onKeyUp={(e) => handleKeyUp(e)}
          onPaste={(e) => handlePaste(e)}
          // onChange={(e) => {
          //   handleChange(e.target.value, index);
          // }}
        />
      </div>
    );
  }
);

PinItem.propTypes = {
  value: PropTypes.number
};

export default PinItem;
