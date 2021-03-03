import React, { useContext, useState } from "react";
import { difficult } from "./algorithm";

const config = {
  sound: false,
  soundVolume: 30,
  music: false,
  musicVolume: 30,
  size: "3",
  difficult: "55",
  color: 1,
  backgr: 1,
};

const ConfigContext = React.createContext();

export const useConfig = () => {
  return useContext(ConfigContext);
};

export const ConfigProvider = ({ children }) => {
  const [soundVolume, setSoundVolume] = useState(config.soundVolume);
  const [musicVolume, setMusicVolume] = useState(config.musicVolume);
  // const [sound, setSound] = useState(config.sound);?
  // const [music, setMusic] = useState(config.music);?
  const [size, setSize] = useState(config.size);
  const [difficult, setDifficult] = useState(config.difficult);
  const [color, setColor] = useState(config.color);
  const [backgr, setBackgr] = useState(config.backgr);

  // const soundVolumeHandler = (soundVolume) => {
  //   setSoundVolume(soundVolume);
  // };

  const soundHandler = (sound) => {
    sound.load();
    sound.volume = soundVolume / 100;
    sound.play();
  };

  const musicHandler = (music) => {
    music.load();
    music.volume = musicVolume / 100;
    music.play();
  };

  // const musicVolumeHandler = (musicVolume) => {
  //   setMusicVolume(musicVolume);
  // };
  // const soundHandler = (sound) => {
  //   setSound(sound);
  // };
  // const musicHandler = (music) => {
  //   setMusic(music);
  // };
  // const trackHandler = (track) => {
  //   setTrack(track);
  // };
  // const speedHandler = (speed) => {
  //   setSpeed(speed);
  // };
  // const mapHandler = (number) => {
  //   setMap(number);
  // };
  // const skinHandler = (skin) => {
  //   setSkin(skin);
  // };
  return (
    <ConfigContext.Provider
      value={{
        soundVolume,
        soundHandler,
        musicVolume,
        musicHandler,
        // sound,
        setSoundVolume,
        // music,
        setMusicVolume,
        size,
        setSize,
        difficult,
        setDifficult,
        color,
        setColor,
        backgr,
        setBackgr,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
