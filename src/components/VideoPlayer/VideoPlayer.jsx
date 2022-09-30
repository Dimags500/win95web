import { divideColor } from "@xstyled/system";
import { Video } from "@react95/core";
import Draggable from "react-draggable";

const VideoPlayer = ({ ...porps }) => {
  const video = "https://youtu.be/zr5nY5HnIus";

  return (
    <div>
      <Draggable>
        <Video w="450" src="https://youtu.be/zr5nY5HnIus" name="video" />
      </Draggable>
    </div>
  );
};

export default VideoPlayer;
