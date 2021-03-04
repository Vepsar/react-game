import "./header.css";
import React from "react";
import clsx from "clsx";
import { createSudoku } from "../game/algorithm";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ReceiptIcon from "@material-ui/icons/Receipt";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import SettingsIcon from "@material-ui/icons/Settings";
import { NavLink } from "react-router-dom";
import { theTimer } from "../game/field";
import { useConfig } from "../game/config";

const useStyles = makeStyles({
  list: {
    width: 400,
    textDecoration: 'none'
  },
  fullList: {
    width: "auto",
    
  },
});

export default function Header() {
  const classes = useStyles();
  const config = useConfig();
  const [state, setState] = React.useState({
    top: false,
  });

  function clickHandlr() {
    createSudoku(config.size, config.difficult);
    localStorage.removeItem("ans");
    localStorage.removeItem("min");
    localStorage.removeItem("sec");
    config.theTimer()
    config.setTimer('00 : 00')
  }
  const headerStyle = {
      backgroundColor: config.color
  }

    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Main menu", "New Game", "Settings", "Score"].map((text, index) => (
          <NavLink
            to={index === 1 ? "/game" : index === 2 ? "/settings" : index === 0 ? "/" : "/score"}
            onClick={index === 1 ? clickHandlr : false}
          >
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 1 ? (
                  <FiberNewIcon />
                ) : index === 2 ? (
                  <SettingsIcon />
                ) : index === 0 ? (
                  <MenuOpenIcon />
                ) : (
                  <ReceiptIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <div className={`header-container`} style={headerStyle}>
      {
        <React.Fragment>
          <div className='header-title'>SUDOKU</div>
          <Button className='header-menu' onClick={toggleDrawer("top", true)}>
            <MenuIcon />
            <p>MENU</p>
          </Button>
          <Drawer anchor={"top"} open={state["top"]} onClose={toggleDrawer("top", false)}>
            {list("top")}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
