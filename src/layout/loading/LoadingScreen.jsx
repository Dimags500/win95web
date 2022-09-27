import React from "react";
import Styles from "./styles.module.css";
import background from "../../assents/img/0.jpg";

const LoadingScreen = () => {
  return (
    <div>
      <div
        className={Styles.centerImage}
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className={Styles.loadingBar} />
    </div>
  );
};

export default LoadingScreen;
