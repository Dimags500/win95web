import React from "react";
import Taskbar from "../Taskbar/Taskbar";
import Styles from "./styles.module.css";
import background from "../../assents/img/1.png";

import Draggable from "react-draggable";

import Browser from "../browser/Browser";
import Taskbar2 from "../Taskbar/Taskbar2";
import { TaskBar } from "@react95/core";
import { Fieldset, Frame, Modal } from "@react95/core";

const Desktop = () => {
  return (
    <div className={Styles.main}>
      <div
        className={Styles.centerImage}
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* <Browser /> */}
      </div>

      <div className={Styles.taskBar}>{/* <Taskbar /> */}</div>
      <Taskbar2 />
    </div>
  );
};

export default Desktop;
