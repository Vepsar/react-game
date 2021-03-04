import { useEffect, useState } from "react";
import "./field.css";
import { sudokuArray, sudokuAns } from "./algorithm";
import Popup from "../popup/popup";
import { useConfig } from "./config";
import bckgrSnd from "../sounds/bckgrnd.mp3";
import erSound from "../sounds/err.mp3"
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, yellow, blue, red } from '@material-ui/core/colors'
import bckgr1 from '../assets/backgr1.jpg'
import bckgr2 from '../assets/backgr2.jpg'
import bckgr3 from '../assets/backgr3.jpg'
import Time from "./time";

let ans = [];

const bckgrSound = new Audio();
bckgrSound.src = bckgrSnd;
const errSound = new Audio();
errSound.src = erSound;


export default function Field() {
  const config = useConfig();
  const [col, setCol] = useState(0);
  const [rw, setRw] = useState(0);
  const [win, setWin] = useState(false);
  
  const theme = createMuiTheme({
    palette: {
      primary: config.color === 'green' ? green : config.color === 'red' ? red:config.color === 'blue' ? blue: yellow,
    },
  });

  const backgroundStyle ={
    backgroundImage: `url(${config.backgr === '1' ? bckgr1 :config.backgr === '2' ? bckgr2 : bckgr3})`,
    backgroundSize: 'cover',
    backgroundPosition: "center",
    width: "100vw",
    height: "86vh",
    display: 'flex',
    justifyContent: 'center'
  }

  
  const styles ={
    sudokuCell: {
      width: config.size === '4' ? 35 : 60,
      height: config.size === '4' ? 35 : 60,
      fontSize: config.size === '4' ? 22  : 50,
      border: `1px solid ${config.color}`
    },
    inputCell: {
      width: config.size === '4' ? 30: 50,
      height: config.size === '4' ? 30 : 50,
      fontSize: config.size === '4' ? 22 : 50,
      
    },
  };
  
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
          config.soundHandler(errSound)
          return setWin(false);
        }
      }
    }
    return setWin(true);
  }
  let retArr = [];
  if ("ans" in localStorage && config.load) {
    config.setLoad(false)
    retArr = JSON.parse(localStorage.ans);
  } else {
    retArr = sudokuAns;
  }
  useEffect(()=>{
    config.musicHandler(bckgrSound);
  },[])
 
  return (
    <div style={backgroundStyle}>
<div className="game-container" style={backgroundStyle}>
      <div className='sudoku-container'>
      <table className="game-table">
        <tbody className="game-field">
          {retArr.map((row, ind) => {
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
                    <td style={styles.sudokuCell} key={index}>
                      <input
                        className="input-field"
                        style={styles.inputCell}
                        type="text"
                        onChange={inputHandler}
                        onClick={clickHandler.bind(this, ind, index)}
                      />
                    </td>
                  ) : (
                    <td style={styles.sudokuCell} key={index}>
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
          <Time className='timer'/>
          <ThemeProvider theme={theme}>
        <Button variant='contained' color='primary' onClick={checkSudoku} >Check Sudoku</Button>
        </ThemeProvider>
          </div>
    </div>
    </div>
  );
}
