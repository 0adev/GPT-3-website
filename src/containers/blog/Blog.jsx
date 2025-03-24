import React from "react";
import "./blog.css";
import { Article } from "../../components";
import {
  blogOneImg,
  blogTwoImg,
  blogThreeImg,
  blogFourImg,
  blogFiveImg,
} from "./import";

const Blog = () => {
  return (
    <div className="gpt3__blog section__margin">
      <h2 className="gpt3__blog-heading gradient__text">
        A lot is happening, We are blogging about it.
      </h2>
      <div className="gpt3__blog-container">
        <div className="blog-one">
          <Article image={blogOneImg} />
        </div>
        <div className="blog-two">
          <Article image={blogTwoImg} />
        </div>
        <div className="blog-three">
          <Article image={blogThreeImg} />
        </div>
        <div className="blog-four">
          <Article image={blogFourImg} />
        </div>
        <div className="blog-five">
          <Article image={blogFiveImg} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
