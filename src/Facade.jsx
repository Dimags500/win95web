import React, { useRef, useEffect } from "react";
import Desktop from "./components/Desktop/Desktop";
import BlackScreen from "./layout/loading/BlackScreen";
import LoadingScreen from "./layout/loading/LoadingScreen";
import sound from "./assents/sound/startup.mp3";
import PowerOnScreen from "./layout/loading/PowerOnScreen";

const Facade = () => {
  const [powerOnScreen, setPowerOnScreen] = React.useState(true);
  const [startUpScreen, setSatrUpScreen] = React.useState(false);
  const [blackScreen, setBlackScreen] = React.useState(false);
  const audio = new Audio(sound);

  React.useEffect(() => {
    if (!powerOnScreen) {
      setSatrUpScreen(true);

      let loading = () =>
        setTimeout(() => {
          setSatrUpScreen(false);
          setBlackScreen(true);
        }, 6000);

      loading();

      return () => {
        clearTimeout(loading);
      };
    }
  }, [powerOnScreen]);

  React.useEffect(() => {
    if (blackScreen) {
      let loading2 = () => audio.play();
      setTimeout(() => {
        setBlackScreen(false);
      }, 1400);

      loading2();

      return () => {
        clearTimeout(loading2);
      };
    }
  }, [blackScreen]);

  return (
    <>
      {/* {powerOnScreen && (
        <PowerOnScreen toggleScreen={() => setPowerOnScreen(false)} />
      )}
      {startUpScreen && <LoadingScreen />}
      {blackScreen && <BlackScreen />}
      {!startUpScreen && !blackScreen && !powerOnScreen && <Desktop />} */}

      <Desktop />
    </>
  );
};

export default Facade;
