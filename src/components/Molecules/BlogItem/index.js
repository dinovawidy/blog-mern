import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogitem.scss";
import {Button,Gap} from "../../atoms"
import {useHistory} from 'react-router-dom'

const BlogItem = () => {
  const history = useHistory();
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
        <Gap height={20} />
        <Button title="view-detail" onClick={() => history.push("/detail-blog")} />
      </div>
    </div>
  );
};

export default BlogItem;
