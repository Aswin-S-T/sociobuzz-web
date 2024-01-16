import React from "react";
import AccountInfo from "./AccountInfo";

function HomeScreen() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <AccountInfo />
        </div>
        <div className="col-md-5">2</div>
        <div className="col-md-4">3</div>
      </div>
    </div>
  );
}

export default HomeScreen;
