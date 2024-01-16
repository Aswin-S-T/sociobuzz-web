import React from "react";
import { AVATAR_IMAGE } from "../Contants/images/urls";
import NestedList from "../Components/List";

function AccountInfo() {
  return (
    <div className="box">
      <div className="account-info">
        <img src={AVATAR_IMAGE} className="profile-img" />
        <h4 className="profile-name mt-2">Ashish George Aby</h4>
        <p>Software engineer</p>
        <div className="follow-details mt-4">
          <div style={{ left: "-80px", position: "relative" }}>
            <h5>456</h5>
            <h6>Followers</h6>
          </div>
          <div>
            <h5>456</h5>
            <h6>Following</h6>
          </div>
          <div style={{ left: "80px", position: "relative" }}>
            <h5>456</h5>
            <h6>Posts</h6>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default AccountInfo;
