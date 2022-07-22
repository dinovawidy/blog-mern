import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogitem.scss";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Do id est aliquip excepteur ullamco mollit exercitation officia est
          mollit incididunt irure laborum. Qui esse eu in in nulla id aliquip.
          Sint deserunt esse ullamco ullamco do. Magna nulla nisi ut Lorem
          laboris quis sit tempor qui nulla laborum eu aute dolor.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
