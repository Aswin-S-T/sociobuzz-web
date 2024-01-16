import React from "react";
import { AVATAR_IMAGE } from "../Contants/images/urls";
function Story() {
  return (
    <div className="story">
      <div className="user">
        <img src={AVATAR_IMAGE} />
        <span>aswins</span>
      </div>
    </div>
  );
}

export default Story;
