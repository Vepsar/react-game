import { useState } from "react";
import { Link } from "react-router-dom";
import "./popup.css";
import { time } from "../game/field";
import { useConfig } from "../game/config";

export default function Popup() {
  const [name, setName] = useState("Unknown");
  const config = useConfig();
  function toTheRecord() {
    let score = JSON.parse(localStorage.score);
    let winner = {
      name,
      time: time,
      size: config.size === 3 ? "3x3" : "4x4",
      diff: config.difficult === "45" ? "easy" : config.difficult === "55" ? "normal" : "hard",
    };
    score.push(winner);
    let a = score.sort(function (a, b) {
      if (a.time > b.time) {
        return 1;
      }
      if (a.time < b.time) {
        return -1;
      }
      return 0;
    });

    localStorage.score = JSON.stringify(a);
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
