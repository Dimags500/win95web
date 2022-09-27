import React, { useEffect } from "react";
import axios from "axios";
import { Input, Button, List, Modal } from "@react95/core";
import Styles from "./browser.module.css";
import { Computer, Mshtml32534, Mmsys113, Inetcfg2300 } from "@react95/icons";

const Browser = (props) => {
  const base = "https://api.codetabs.com/v1/proxy?quest=";
  const [url, setUrl] = React.useState(base + "https://www.google.com");

  const [show, toggleShow] = React.useState(true);

  const handleOpenModal = () => toggleShow(true);
  const handleCloseModal = () => toggleShow(false);
  const handleButtonClick = (e) => alert(e.currentTarget.value);

  const urlRef = React.useRef("");

  useEffect(() => {
    urlRef.current.value = "www.google.com";
  }, []);

  return (
    <div>
      <div>
        {show && (
          <Modal
            width="500"
            height="600"
            icon={<Inetcfg2300 variant="32x32_4" />}
            title="React Internet Explorer"
            defaultPosition={{
              x: 50,
              y: 120,
            }}
            closeModal={handleCloseModal}
            menu={[
              {
                name: "File",
                list: (
                  <List>
                    <List.Item onClick={handleCloseModal}>Exit</List.Item>
                  </List>
                ),
              },
              {
                name: "Edit",
                list: (
                  <List>
                    <List.Item>Copy</List.Item>
                  </List>
                ),
              },
            ]}
          >
            <div className={Styles.browser}>
              <Input
                ref={urlRef}
                className={Styles.input}
                placeholder={urlRef.current.value}
              />
              <Button onClick={() => setUrl(urlRef.current.value)}>Go</Button>
            </div>

            <iframe src={base + url} className={Styles.content} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Browser;
