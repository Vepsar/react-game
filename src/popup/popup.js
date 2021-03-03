import { useState } from "react";
import { Link } from "react-router-dom";
import "./popup.css";
import { timerValue } from "../game/field";

export default function Popup() {
  const [name, setName] = useState("Unknown");

  function toTheRecord() {
    console.log(name);
  }

  function nameHandler(event) {
    setName(event.target.value);
  }

  return (
    <div className="popup-container">
      CONGRATULATION!!! YOU WIN
      <form>
        <label>Enter your name:</label>
        <input onChange={nameHandler} />
        <Link to={"/"} onClick={toTheRecord}>
          <input type="submit" value="Submit" />
        </Link>
      </form>
    </div>
  );
}
