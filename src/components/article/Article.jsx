import React from "react";
import "./article.css";

const Article = ({ image }) => {
  return (
    <div className="gpt3__article">
      <img src={image} alt="blog image" />
      <div className="gpt3__article-content">
        <div className="gpt3__article-content_header">
          <h4 className="gpt3__article-subtitle">Sep 26, 2021</h4>
          <h2 className="gpt3__article-title">
            GPT-3 and Open AI is the future. Let us explore how it is?
          </h2>
        </div>
        <a href="|#blog">Read Full Article</a>
      </div>
    </div>
  );
};

export default Article;
