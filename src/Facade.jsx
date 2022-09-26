import React, { useRef, useEffect } from "react";
import Desktop from "./components/Desktop/Desktop";
import BlackScreen from "./layout/loading/BlackScreen";
import LoadingScreen from "./layout/loading/LoadingScreen";
import sound from "./assents/sound/startup.mp3";
const Facade = () => {
  const [intro, setIntro] = React.useState(true);
  const [startUpScreen, setSatrUpScreen] = React.useState(false);
  const [blackScreen, setBlackScreen] = React.useState(false);
  const audio = new Audio(sound);

  React.useEffect(() => {
    if (!intro) {
      setSatrUpScreen(true);

      let loading = () =>
        setTimeout(() => {
          setSatrUpScreen(false);
          setBlackScreen(true);
        }, 4500);

      loading();

      return () => {
        clearTimeout(loading);
      };
    }
  }, [intro]);

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
      {intro && (
        <div>
          <button onClick={() => setIntro(false)}>Go</button>
        </div>
      )}
      {startUpScreen && <LoadingScreen />}
      {blackScreen && <BlackScreen />}
      {!startUpScreen && !blackScreen && !intro && <Desktop />}
    </>
  );
};

export default Facade;
