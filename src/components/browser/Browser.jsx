import React from "react";
import axios from "axios";
import { Input, Button, List, Modal } from "@react95/core";
import { Computer, Mshtml32534, Mmsys113, Inetcfg2300 } from "@react95/icons";

const Browser = (browser) => {
  const base = "https://api.codetabs.com/v1/proxy?quest=";
  const [url, setUrl] = React.useState(base + "https://nordicapis.com/");
  const [web, setWeb] = React.useState("www.web.com");

  //   const getUrl = async (url) => {
  //     const data = await axios.get(base + url);

  //     console.log(data.data);
  //     setWeb(data.data);
  //   };
  const [showModal, toggleShowModal] = React.useState(true);

  const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);
  const handleButtonClick = (e) => alert(e.currentTarget.value);

  const urlRef = React.useRef("www.wiki.com");
  return (
    <div>
      <Input ref={urlRef} />
      <Button onClick={() => setUrl(urlRef.current.value)} />
      <iframe src={base + url} width="400" height="200"></iframe>

      <div>
        <Button onClick={handleOpenModal}>Trigger Modal</Button>
        {showModal && (
          <Modal
            width="300"
            height="200"
            icon={<Inetcfg2300 variant="32x32_4" />}
            title="React Internet Explorer"
            defaultPosition={{
              x: 0,
              y: 20,
            }}
            closeModal={handleCloseModal}
            buttons={[
              { value: "Ok", onClick: handleButtonClick },
              { value: "Cancel", onClick: handleButtonClick },
            ]}
            menu={
              ([
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
              ],
              [
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
              ])
            }
          />
        )}
      </div>
    </div>
  );
};

export default Browser;
