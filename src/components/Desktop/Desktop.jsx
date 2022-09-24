import React from "react";
import Taskbar from "../Taskbar/Taskbar";
import Styles from "./styles.module.css";
import background from "../../assents/img/0.jpg";
import Draggable from "react-draggable";

import { Window, WindowHeader, WindowContent, Button } from "react95";
import Browser from "../browser/Browser";

const Desktop = () => {
  return (
    <div className={Styles.main}>
      <div
        className={Styles.centerImage}
        style={{ backgroundImage: `url(${background})` }}
      >
        <Draggable>
          <div>
            <Window className={Styles.window} resizable={true}>
              <WindowHeader active={true} className={Styles.windowHeader}>
                <span>not-active.exe</span>
                <Button>
                  <span className={Styles.closeIcon}> X </span>
                </Button>
              </WindowHeader>
              <WindowContent>some Chat Room Can be </WindowContent>
            </Window>
          </div>
        </Draggable>

        <div>
          <Browser browser={Styles.browser} />
        </div>
      </div>
      <div className={Styles.taskBar}>
        <Taskbar />
      </div>
    </div>
  );
};

export default Desktop;
