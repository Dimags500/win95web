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
        }, 6000);

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
        <div
          style={{
            marginTop: "150px",
            textAlign: "center",
            backgroundColor: "black",
          }}
        >
          <button
            style={{
              width: "100px",
              height: "100px",
            }}
            onClick={() => setIntro(false)}
          >
            Start Windows
          </button>
        </div>
      )}
      {startUpScreen && <LoadingScreen />}
      {blackScreen && <BlackScreen />}
      {!startUpScreen && !blackScreen && !intro && <Desktop />}
    </>
  );
};

export default Facade;
