// import react from "react";
import { createSudoku } from "../game/algorithm";
import { Link } from "react-router-dom";
import "./main.css";
import { theTimer } from "../game/field";
import { useConfig } from "../game/config";
export default function Main() {
  const config = useConfig();
  function clickMainHndlr() {
    createSudoku(config.size, config.difficult);
    localStorage.removeItem("ans");
    localStorage.removeItem("min");
    localStorage.removeItem("sec");
    theTimer();
  }
  function clickLoadHndlr() {
    theTimer();
  }

  return (
    <div className="main-field">
      <Link to={"/game"}>
        <button onClick={clickLoadHndlr}>Load game</button>
      </Link>
      <Link to={"/game"}>
        <button onClick={clickMainHndlr}>New game</button>
      </Link>
      <Link to={"/score"}>
        <button>Score</button>
      </Link>
      <Link to={"/settings"}>
        <button>Settings</button>
      </Link>
    </div>
  );
}
