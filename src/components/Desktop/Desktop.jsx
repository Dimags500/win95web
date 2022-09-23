import React from "react";
import Taskbar from "../Taskbar/Taskbar";
import Styles from "./styles.module.css";
import background from "../../assents/img/0.jpg";

const Desktop = () => {
  return (
    <div className={Styles.main}>
      <div
        className={Styles.centerImage}
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* <img src={background} /> */}
      </div>
      <div className={Styles.taskBar}>{/* <Taskbar /> */}</div>
      <div> sdsdsd</div>
    </div>
  );
};

export default Desktop;
