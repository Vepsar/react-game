import React, { useContext, useState } from "react";
let timeTime = null;
const config = {
  sound: false,
  soundVolume: 30,
  music: false,
  musicVolume: 30,
  size: "3",
  difficult: "55",
  color: 'green',
  backgr: "1",
  timer: '00 : 00',
  timerOn: false,
  load: false
};

const ConfigContext = React.createContext();

export const useConfig = () => {
  return useContext(ConfigContext);
};

export const ConfigProvider = ({ children }) => {
  const [soundVolume, setSoundVolume] = useState(config.soundVolume);
  const [musicVolume, setMusicVolume] = useState(config.musicVolume);
  const [timerOn, setTimerOn] = useState(config.timerOn);
  const [timer, setTimer] = useState(config.timer);
  const [size, setSize] = useState(config.size);
  const [difficult, setDifficult] = useState(config.difficult);
  const [color, setColor] = useState(config.color);
  const [backgr, setBackgr] = useState(config.backgr);
  const [load, setLoad] = useState(config.load)

  const soundHandler = (sound) => {
    sound.volume = soundVolume / 100;
    sound.play();
  };

  const musicHandler = (music) => {
    music.load();
    music.volume = musicVolume / 100;
    music.play();
  };

  let time;
  
  function theTimer() {
  clearInterval(timeTime); 
  var min = 0;
  var sec = 0;
  "min" in localStorage ? (min = JSON.parse(localStorage.min)) : (min = 0);
  "sec" in localStorage ? (sec = JSON.parse(localStorage.sec)) : (sec = 0);
  timeTime = setInterval(() => {
    sec++;
    localStorage.sec = JSON.stringify(sec);
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
      
      localStorage.min = JSON.stringify(min);
      sec = 0;
    }
    setTimer(time)
  }, 1000);
}

  return (
    <ConfigContext.Provider
      value={{
        soundVolume,
        soundHandler,
        musicVolume,
        musicHandler,
        setTimer,
        setSoundVolume,
        timer,
        setMusicVolume,
        size,
        setSize,
        difficult,
        setDifficult,
        color,
        setColor,
        backgr,
        setBackgr,
        timerOn, 
        setTimerOn,
        theTimer,
        load, 
        setLoad
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
