import React, { useRef } from "react";
import AccountInfo from "./AccountInfo";
import NestedList from "../Components/List";
import FolderList from "../Components/ContactList";
import Post from "../Components/Post";
import PageviewIcon from "@mui/icons-material/Pageview";
import Story from "../Components/Story";

function HomeScreen() {
  const scrollRef = useRef(null);

  const scrollContainer = (direction) => {
    const container = scrollRef.current;

    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-3 p-5" style={{ backgroundColor: "white" }}>
          <AccountInfo />
          <div className="mt-5">
            <NestedList />
          </div>
          <div className="mt-5">
            <h4>Contacts</h4>
            <FolderList />
          </div>
        </div>
        <div className="col-md-5 p-4">
          <div className="row">
            <div className="col-md-8">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <input
                  type="text"
                  placeholder="Search by name"
                  className="form-control w-100 p-4"
                />
                <PageviewIcon
                  style={{
                    color: "#1AE79F",
                    fontSize: "74px",
                    top: "-12px",
                    left: "-8px",
                    position: "relative",
                  }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <button className="add-post-btn">Add new post</button>
            </div>
          </div>
          <div>
            <h5
              style={{
                fontWeight: "bold",
                color: "#191546",
                left: "4px",
                position: "relative",
              }}
            >
              Stories
            </h5>
            <div
              className="stories-container"
              style={{
                display: "flex",
                flexDirection: "row",
                overflowX: "scroll",
                scrollBehavior: "smooth",
                paddingRight: "20px",
                overflowX: "scroll",
              }}
              ref={scrollRef}
            >
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />

              <Story />
              <Story />

              <Story />
              <Story />
              <Story />
              <Story />
            </div>
            <div
              style={{
                overflowY: "auto",
                maxHeight: "calc(100vh - 200px)",
                scrollbarWidth: "thin",
                scrollbarColor: "transparent transparent",
              }}
            >
              <Post />
            </div>
          </div>
        </div>
        <div className="col-md-4" style={{ backgroundColor: "white" }}>
          <div className="mt-5">
            <h5 style={{ fontWeight: "bold", color: "#191546" }}>Requests</h5>
            <FolderList />
          </div>
          <div className="mt-5">
            <h5 style={{ fontWeight: "bold", color: "#191546" }}>
              Suggestions for you
            </h5>
            <FolderList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
