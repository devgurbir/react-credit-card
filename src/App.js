import PinInput from "./Components/PinInput";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [pin, setPin] = useState("");
  const handlePinChange = (val) => {
    setPin(val);
  };
  return (
    <div className="App">
      <h1>Credit Card</h1>
      <PinInput len={4} inputBoxLength={4} handlePinChange={handlePinChange} />
      <h5>{pin}</h5>
    </div>
  );
}
