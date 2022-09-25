import React, { useRef } from "react";
import { TaskBar, Modal, List, Frame } from "@react95/core";
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
  const [render, setRender] = React.useState(false);

  const closeFirst = () => toggleFirst(false);
  const closeSecond = () => toggleSecond(false);
  const closeThird = () => toggleThird(false);

  const ref = React.useRef([]);

  React.useEffect(() => {
    if (ref.current.length <= 0) {
      ref.current.push(
        <Modal
          defaultPosition={{ x: 100, y: 50 }}
          width="300"
          height="200"
          icon={<Inetcfg2300 variant="32x32_4" />}
          title=" Explorer"
          closeModal={closeThird}
        >
          <Frame
            bg="white"
            boxShadow="in"
            height="100%"
            width="100%"
            padding="0px 5px"
          >
            <p>
              The active modal will be based on the order they render, most
              recently rendered will be the active component. On click of a
              non-active modal will fire an action to set that modal as the
              active one.
            </p>
          </Frame>
        </Modal>
      );
    }
    console.log(ref.current);
  });

  const modalArray = [
    <Modal
      defaultPosition={{ x: 50, y: 50 }}
      width="300"
      height="200"
      icon={<Inetcfg2300 variant="32x32_4" />}
      title=" Explorer"
      closeModal={closeThird}
    />,
  ];

  const addModal = () => {
    console.log("-----");

    ref.current.push(
      <Modal
        defaultPosition={{ x: 100, y: 50 }}
        width="300"
        height="200"
        icon={<Inetcfg2300 variant="32x32_4" />}
        title=" Explorer"
        closeModal={closeThird}
      >
        <Frame
          bg="white"
          boxShadow="in"
          height="100%"
          width="100%"
          padding="0px 5px"
        >
          <p>
            The active modal will be based on the order they render, most
            recently rendered will be the active component. On click of a
            non-active modal will fire an action to set that modal as the active
            one.
          </p>
        </Frame>
      </Modal>
    );
    setRender(false);

    modelGen();
    setRender(true);

    renderTaskBar();
  };

  const modelGen = () => {
    const modals = (
      <>
        {ref.current.map((elem, index) => {
          elem.props.defaultPosition.y += index * 20;
          console.log(ref.current.length, "leng");
          return <div key={index}>{elem}</div>;
        })}
      </>
    );

    return modals;
  };

  const renderTaskBar = () => {
    console.log(ref.current);

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

        <>{render && modelGen()}</>

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
                  addModal();
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

  return <>{renderTaskBar()}</>;
};

export default Taskbar2;
