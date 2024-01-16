import React from "react";
import { AVATAR_IMAGE } from "../Contants/images/urls";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post() {
  return (
    <div>
      <div className="card p-3 mt-3">
        <div className="container">
          <div className="post-header">
            <img src={AVATAR_IMAGE} className="avatar" />
            <h4 className="post-title mt-2">Ashish George Aby</h4>
            <p>4 days ago</p>
          </div>
          <img
            src="https://www.shutterfly.com/ideas/wp-content/uploads/2017/12/creative-instagram-photo-ideas_nature-2.jpg"
            className="w-100 post-image mt-3"
          />
          <div className="mt-3">
            <div className="post-actions">
              <div>
                0 likes
                <FavoriteBorderIcon style={{ fontSize: "30px" }} />
              </div>
              <div>
                0 comment
                <ChatBubbleOutlineIcon style={{ fontSize: "30px" }} />
              </div>
              <div>
                0 save
                <BookmarkBorderIcon style={{ fontSize: "30px" }} />
              </div>
            </div>
            <p style={{color:'#444'}}>View all comments</p>
          </div>
        </div>
      </div>
      <div className="card p-3 mt-3">
        <div className="container">
          <div className="post-header">
            <img src={AVATAR_IMAGE} className="avatar" />
            <h4 className="post-title mt-2">Ashish George Aby</h4>
            <p>4 days ago</p>
          </div>
          <img
            src="https://www.shutterfly.com/ideas/wp-content/uploads/2017/12/creative-instagram-photo-ideas_nature-2.jpg"
            className="w-100 post-image mt-3"
          />
          <div className="mt-3">
            <div className="post-actions">
              <div>
                <FavoriteBorderIcon style={{ fontSize: "30px" }} />
              </div>
              <div>
                <ChatBubbleOutlineIcon style={{ fontSize: "30px" }} />
              </div>
              <div>
                <BookmarkBorderIcon style={{ fontSize: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card p-3 mt-3">
        <div className="container">
          <div className="post-header">
            <img src={AVATAR_IMAGE} className="avatar" />
            <h4 className="post-title mt-2">Ashish George Aby</h4>
            <p>4 days ago</p>
          </div>
          <img
            src="https://www.shutterfly.com/ideas/wp-content/uploads/2017/12/creative-instagram-photo-ideas_nature-2.jpg"
            className="w-100 post-image mt-3"
          />
          <div className="mt-3">
            <div className="post-actions">
              <div>
                <FavoriteBorderIcon style={{ fontSize: "30px" }} />
              </div>
              <div>
                <ChatBubbleOutlineIcon style={{ fontSize: "30px" }} />
              </div>
              <div>
                <BookmarkBorderIcon style={{ fontSize: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card p-3 mt-3">
        <div className="container">
          <div className="post-header">
            <img src={AVATAR_IMAGE} className="avatar" />
            <h4 className="post-title mt-2">Ashish George Aby</h4>
            <p>4 days ago</p>
          </div>
          <img
            src="https://www.shutterfly.com/ideas/wp-content/uploads/2017/12/creative-instagram-photo-ideas_nature-2.jpg"
            className="w-100 post-image mt-3"
          />
          <div className="mt-3">
            <div className="post-actions">
              <div>
                <FavoriteBorderIcon style={{ fontSize: "30px" }} />
              </div>
              <div>
                <ChatBubbleOutlineIcon style={{ fontSize: "30px" }} />
              </div>
              <div>
                <BookmarkBorderIcon style={{ fontSize: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
