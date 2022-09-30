import React from "react";
import Styles from "./styles.module.css";
import background from "../../assents/img/1.png";
import { Computer, Mshtml32534, Mmsys113, Inetcfg2300 } from "@react95/icons";
import Draggable from "react-draggable";
import Browser from "../browser/Browser";
import Taskbar2 from "../Taskbar/Taskbar2";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const Desktop = () => {
  return (
    <div className={Styles.main}>
      <div
        className={Styles.centerImage}
        style={{ backgroundImage: `url(${background})` }}
      >
        <Draggable>
          <Computer />
        </Draggable>
        <Draggable>
          <Mshtml32534 />
        </Draggable>
        <Browser />
        <VideoPlayer />
      </div>

      <div className={Styles.taskBar}>{/* <Taskbar /> */}</div>
      <Taskbar2 />
    </div>
  );
};

export default Desktop;
