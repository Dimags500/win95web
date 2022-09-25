import React, { useRef } from "react";

import { TaskBar, Modal, List } from "@react95/core";

import { ReaderClosed, WindowsExplorer, Inetcfg2300 } from "@react95/icons";

import Styles from "../Desktop/styles.module.css";
import Browser from "../browser/Browser";

const Taskbar2 = () => {
  // const [open, setOpen] = React.useState(false);

  // const imga =
  //   "https://cdn.dribbble.com/users/314312/screenshots/14276050/media/7040d10636b787f9549d944d9c4e7b80.png";

  const [first, toggleFirst] = React.useState(false);
  const [second, toggleSecond] = React.useState(false);
  const [third, toggleThird] = React.useState(false);

  const closeFirst = () => toggleFirst(false);
  const closeSecond = () => toggleSecond(false);
  const closeThird = () => toggleThird(false);

  const renderTaskBar = () => {
    return (
      <>
        {first && (
          <Modal
            icon={<WindowsExplorer variant="16x16_4" />}
            title="Windows Explorer"
            closeModal={closeFirst}
            width="300"
            height="200"
          />
        )}

        {second && (
          <Modal
            defaultPosition={{ x: 50, y: 50 }}
            width="300"
            height="200"
            icon={<ReaderClosed variant="16x16_4" />}
            title="Local Disk (C:)"
            closeModal={closeSecond}
          />
        )}

        {third && (
          <Modal
            defaultPosition={{ x: 50, y: 50 }}
            width="300"
            height="200"
            icon={<Inetcfg2300 variant="32x32_4" />}
            title="React Internet Explorer"
            closeModal={closeThird}
          />
        )}

        <TaskBar
          list={
            <List>
              <List.Item
                icon={<ReaderClosed variant="32x32_4" />}
                onClick={() => toggleSecond(true)}
              >
                Local Disk (C:)
              </List.Item>
              <List.Item
                icon={<WindowsExplorer variant="32x32_4" />}
                onClick={() => {
                  toggleFirst(true);
                }}
              >
                Windows Explorer
              </List.Item>
              <List.Item
                icon={<Inetcfg2300 variant="32x32_4" />}
                onClick={() => {
                  toggleThird(true);
                }}
              >
                React Internet Explorer
              </List.Item>
            </List>
          }
        />
      </>
    );
  };

  React.useCallback(renderTaskBar, [first, second.third]);

  return <>{renderTaskBar()}</>;
};

export default Taskbar2;
