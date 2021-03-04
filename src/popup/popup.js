import { useState } from "react";
import { Link } from "react-router-dom";
import "./popup.css";
import { time } from "../game/field";
import { useConfig } from "../game/config";
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, yellow, blue, red } from '@material-ui/core/colors'
import wnSound from "../sounds/win.mp3"


export default function Popup() {
  const winSound = new Audio();
  winSound.src = wnSound;
  
  const [name, setName] = useState("Unknown");
  const config = useConfig();
  const theme = createMuiTheme({
    palette: {
      primary: config.color === 'green' ? green : config.color === 'red' ? red:config.color === 'blue' ? blue: yellow,
    },
  });
  function toTheRecord() {
    let score = JSON.parse(localStorage.score);
    let winner = {
      name,
      time: config.timer,
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

  config.soundHandler(winSound)
  return (
    <div className="popup-container">
     <p>CONGRATULATION!!!</p> 
     <p>YOU WIN</p> 
       
      <form>
        <label className='popup-label'>Enter your name:</label>
        <input className='popup-input' onChange={nameHandler} />
        <Link className='popup-link'  to={"/"} onClick={toTheRecord}>
        <ThemeProvider theme={theme}>
        <Button variant='contained' color='primary'>Submit</Button>
        </ThemeProvider>
        </Link>
      </form>
    </div>
  );
}
