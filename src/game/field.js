import { /*react,*/ useState, useEffect } from "react";
import "./field.css";
import { sudokuArray, sudokuAns } from "./algorithm";
import Popup from "../popup/popup";
import { useConfig } from "./config";

let ans = [];
let timerValue = null;
export default function Field() {
  const [col, setCol] = useState(0);
  const [rw, setRw] = useState(0);
  const [win, setWin] = useState(false);
  const config = useConfig();

  function clickHandler(row, column) {
    setCol(column);
    setRw(row);
  }

  function inputHandler(event) {
    if (event.target.value.length > 1) {
      event.target.value = event.target.value.substr(0, 1);
    }
    ans[rw][col] = event.target.value;
  }

  function checkSudoku() {
    for (let i = 0; i < sudokuAns.length; i++) {
      for (let j = 0; j < sudokuAns[i].length; j++) {
        if (sudokuArray[i][j] !== ans[i][j]) {
          return setWin(false);
        }
      }
    }
    return setWin(true);
  }

  return (
    <div className="game-container">
      {win ? <Popup /> : null}
      <table className="game-table">
        <tbody className="game-field">
          {sudokuAns.map((row, ind) => {
            // console.log("ind", ind);
            if (ans.length < config.size ** 2) {
              ans.push([]);
            }
            return (
              <tr className="sudoku-row" key={ind}>
                {row.map((cell, index) => {
                  if (ans[ind].length < config.size ** 2) {
                    ans[ind].push(cell);
                  }
                  return cell === 0 ? (
                    <td key={index}>
                      <input
                        className="input-field"
                        type="text"
                        onChange={inputHandler}
                        onClick={clickHandler.bind(this, ind, index)}
                      />
                    </td>
                  ) : (
                    <td key={index}>{cell}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={checkSudoku}>Проверить</button>
      <div className="timer">00 : 00</div>
    </div>
  );
}

function theTimer() {
  clearInterval(timerValue);
  var min = 0;
  var sec = 0;
  const timmer = document.querySelector(".timer");
  let time;
  timerValue = setInterval(() => {
    sec++;
    if (min < 10) {
      if (sec < 10) {
        time = `0${min} : 0${sec}`;
      } else {
        time = `0${min} : ${sec}`;
      }
    } else {
      if (sec < 10) {
        time = `${min} : 0${sec}`;
      } else {
        time = `${min} : ${sec}`;
      }
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    timmer.textContent = time;
  }, 1000);
}

export { theTimer, timerValue };
