import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { useConfig } from "../game/config";
import { Link } from "react-router-dom";
import { createSudoku } from "../game/algorithm";
import '../settings/setings.css'

const useStyles = makeStyles({
  root: {
    width: 500,
    alignItems: 'center'
  },
});

export default function Settings() {
  const classes = useStyles();
  const config = useConfig();

  function clickHandlr() {
    createSudoku(config.size, config.difficult);
    localStorage.removeItem("ans");
    localStorage.removeItem("min");
    localStorage.removeItem("sec");
    config.theTimer();
  }

  const handleMusicChange = (event, newValue) => {
    config.setMusicVolume(newValue);
  };
  const handleSoundChange = (event, newValue) => {
    config.setSoundVolume(newValue);
  };

  const handleRadioSizeChange = (event) => {
    config.setSize(event.target.value);
  };
  const handleRadioDiffChange = (event) => {
    config.setDifficult(event.target.value);
  };
  const handleRadioColorChange = (event) => {
    config.setColor(event.target.value);
  };
  const handleRadioBackgrChange = (event) => {
    config.setBackgr(event.target.value);
  };

  return (
    <div className={`${classes.root} settings-container`}>
      <FormControl component="fieldset">
        <Typography id="continuous-slider" gutterBottom>
          Select size
        </Typography>
        <RadioGroup row aria-label="gender" name="gender1" value={config.size} onChange={handleRadioSizeChange}>
          <FormControlLabel value="3" control={<Radio />} label="3x3" />
          <FormControlLabel value="4" control={<Radio />} label="4x4" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <Typography id="continuous-slider" gutterBottom>
          Select difficult
        </Typography>
        <RadioGroup row className='radio-container' aria-label="gender" name="gender1" value={config.difficult} onChange={handleRadioDiffChange}>
          <FormControlLabel value="45" control={<Radio />} label="Easy" />
          <FormControlLabel value="55" control={<Radio />} label="Normal" />
          <FormControlLabel value="70" control={<Radio />} label="Hard" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <Typography id="continuous-slider" gutterBottom>
          Select color
        </Typography>
        <RadioGroup row aria-label="gender" name="gender1" value={config.color} onChange={handleRadioColorChange}>
          <FormControlLabel color='red' value="red" control={<Radio />} label="Red" />
          <FormControlLabel value="green" control={<Radio />} label="Green" />
          <FormControlLabel value="blue" control={<Radio />} label="Blue" />
          <FormControlLabel value="yellow" control={<Radio />} label="Yellow" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <Typography id="continuous-slider" gutterBottom>
          Select background
        </Typography>
        <RadioGroup row aria-label="gender" name="gender1" value={config.backgr} onChange={handleRadioBackgrChange}>
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
        </RadioGroup>
      </FormControl>
      <Typography id="continuous-slider" gutterBottom>
        Music Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={config.musicVolume} onChange={handleMusicChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
      <Typography id="continuous-slider" gutterBottom>
        Sound Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={config.soundVolume} onChange={handleSoundChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
      <Link to="/game" onClick={clickHandlr}>
        <button>Save</button>
      </Link>
    </div>
  );
}
