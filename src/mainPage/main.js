// import react from "react";
import { createSudoku } from "../game/algorithm";
import { Link } from "react-router-dom";
import "./main.css";
import { useConfig } from "../game/config";
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, yellow, blue, red } from '@material-ui/core/colors'

export default function Main() {
  const config = useConfig();
  function clickMainHndlr() {
    createSudoku(config.size, config.difficult);
    localStorage.removeItem("ans");
    localStorage.removeItem("min");
    localStorage.removeItem("sec");
    config.theTimer()
  }
  function clickLoadHndlr() {
    config.setLoad(true)
    config.theTimer()
  }
  const theme = createMuiTheme({
    palette: {
      primary: config.color === 'green' ? green : config.color === 'red' ? red:config.color === 'blue' ? blue: yellow,
    },
  });

  return (
    <div className="main-field">
      <Link className='main-link' to={'ans'in localStorage ? "/game" : '/'}>
        <ThemeProvider theme={theme}>
        <Button variant='contained' color='primary' onClick={clickLoadHndlr} disabled={'ans'in localStorage? false : true}>Load game</Button>
        </ThemeProvider>
      </Link>
      <Link className='main-link' to={"/game"}>
      <ThemeProvider theme={theme}>
        <Button variant='contained' color='primary' onClick={clickMainHndlr}>New game</Button>
        </ThemeProvider>
      </Link>
      <Link className='main-link' to={"/score"}>
      <ThemeProvider theme={theme}>
        <Button variant='contained' color='primary' >Score</Button>
        </ThemeProvider>
      </Link>
      <Link className='main-link' to={"/settings"}>
      <ThemeProvider theme={theme}>
        <Button variant='contained' color='primary'>Settings</Button>
        </ThemeProvider>
      </Link>
    </div>
  );
}
