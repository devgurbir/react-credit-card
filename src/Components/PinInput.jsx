import PinItem from "./PinItem";
import { useState, useRef } from "react";

const PinInput = ({ len, inputBoxLength, handlePinChange }) => {
  const boxes = new Array(len).fill("");
  const [values, setValue] = useState(new Array(len).fill(""));
  const inputRefs = useRef(new Array(len).fill(null));

  const handleChange = (val, index) => {
    values[index] = val;
    setValue([...values]);
    if (val.length === inputBoxLength && index < len - 1) {
      inputRefs.current[index + 1].focus();
    }
    handlePinChange(values.join(" "));
  };

  const handleBackspace = (val, index) => {
    let temp = values[index];
    console.log(temp, val);

    values[index] = val;
    setValue([...values]);

    if (temp.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    handlePinChange(values.join(" "));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text");
    console.log(data);

    const slicedData = data.split("").slice(0, len * inputBoxLength);
    console.log(slicedData);

    // const newValues = values.map((el) => (el = ""));
    // setValue(newValues);

    // console.log("New Values: ", newValues);

    slicedData.map((char, i) => {
      console.log(~~(i / inputBoxLength));
      values[Math.floor(i / inputBoxLength)] += char;
    });

    console.log("Line 50", values);
    setValue([...values]);

    values.map((el, i) => {
      inputRefs.current[i].value = el;
      if (i < len - 1 && el !== "") {
        if (el.length === inputBoxLength) {
          inputRefs.current[i + 1].focus();
        } else {
          inputRefs.current[i].focus();
        }
      }
    });

    handlePinChange(values.join(" "));
  };

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      {boxes?.map((_, i) => (
        <PinItem
          ref={(el) => (inputRefs.current[i] = el)}
          inputBoxLength={inputBoxLength}
          index={i}
          key={i}
          handleChange={handleChange}
          handleBackspace={handleBackspace}
          handlePaste={handlePaste}
          value={values[i]}
        />
      ))}
    </div>
  );
};

export default PinInput;
