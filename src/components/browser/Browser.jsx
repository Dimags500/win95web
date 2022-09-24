import React from "react";
import axios from "axios";

const Browser = (browser) => {
  const base = "https://api.codetabs.com/v1/proxy?quest=";
  const [url, setUrl] = React.useState(base + "https://nordicapis.com/");
  const [web, setWeb] = React.useState("www.web.com");

  const getUrl = async (url) => {
    const data = await axios.get(url);

    console.log(data.data);
    setWeb(data.data);
  };
  return (
    <div>
      <button onClick={() => getUrl(url)}> get </button>
      <iframe
        src={base + "https://nordicapis.com/"}
        width="400"
        height="200"
      ></iframe>
    </div>
  );
};

export default Browser;
