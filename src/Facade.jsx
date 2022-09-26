import React from "react";
import Desktop from "./components/Desktop/Desktop";
import BlackScreen from "./layout/loading/BlackScreen";
import LoadingScreen from "./layout/loading/LoadingScreen";

const Facade = () => {
  const [startUpScreen, setSatrUpScreen] = React.useState(true);
  const [blackScreen, setBlackScreen] = React.useState(false);

  React.useEffect(() => {
    let loading = () =>
      setTimeout(() => {
        setSatrUpScreen(false);
        setBlackScreen(true);
      }, 2000);

    loading();

    return () => {
      clearTimeout(loading);
    };
  }, [startUpScreen]);

  React.useEffect(() => {
    if (blackScreen) {
      let loading2 = () =>
        setTimeout(() => {
          setBlackScreen(false);
        }, 2000);

      loading2();

      return () => {
        clearTimeout(loading2);
      };
    }
  }, [blackScreen]);

  return (
    <>
      {startUpScreen && <LoadingScreen />}
      {blackScreen && <BlackScreen />}
      {!startUpScreen && !blackScreen && <Desktop />}
    </>
  );
};

export default Facade;
