import { useEffect, useState } from "react";
import "./field.css";
import { sudokuArray, sudokuAns } from "./algorithm";
import Popup from "../popup/popup";
import { useConfig } from "./config";
import { makeStyles } from "@material-ui/core";
import bckgrSnd from "../sounds/bckgrnd.mp3";

let ans = [];

const bckgrSound = new Audio();
bckgrSound.src = bckgrSnd;

export default function Field() {
  const [col, setCol] = useState(0);
  const [rw, setRw] = useState(0);
  const [win, setWin] = useState(false);
  

  const config = useConfig();
  const useStyles = makeStyles({
    sudokuCell: {
      width: config.size === 4 ? 45 : 60,
      height: config.size === 4 ? 45 : 60,
      fontSize: config.size === 4 ? 30 : 50,
    },
    inputCell: {
      width: config.size === 4 ? 40 : 50,
      height: config.size === 4 ? 40 : 50,
      fontSize: config.size === 4 ? 30 : 50,
    },
  });
  const styles = useStyles();
  function clickHandler(row, column) {
    setCol(column);
    setRw(row);
  }
  
  function inputHandler(event) {
    if (event.target.value.length > 1) {
      event.target.value = event.target.value.substr(0, 1);
    }
    ans[rw][col] = event.target.value;
    localStorage.ans = JSON.stringify(ans);
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
  let retArr = [];
  if ("ans" in localStorage) {
    retArr = JSON.parse(localStorage.ans);
  } else {
    retArr = sudokuAns;
  }
  config.musicHandler(bckgrSound);
  return (
    <div className="game-container">
      <div className='sudoku-container'>
      <table className="game-table">
        <tbody className="game-field">
          {retArr.map((row, ind) => {
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
                    <td className={styles.sudokuCell} key={index}>
                      <input
                        className={(styles.inputCell, "input-field")}
                        type="text"
                        onChange={inputHandler}
                        onClick={clickHandler.bind(this, ind, index)}
                      />
                    </td>
                  ) : (
                    <td className={styles.sudokuCell} key={index}>
                      {cell}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      {win ? <Popup /> : null}
          <div className='control-container'>
          <button onClick={checkSudoku}>Проверить</button>
      <div className="timer" id='time'>{config.timer}</div>
          </div>
    </div>
  );
}


// export {theTimer}