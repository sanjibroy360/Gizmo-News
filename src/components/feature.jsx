import React from "react";

function FeaturedNews(props) {
  console.log("Feature: ", props);
  return (
    <>
      {props.news ?(
        <div className="feature_wrapper">
        <div className="feature_image">
          <img src={props.news.urlToImage} alt="News Image" />
        </div>

        <div className="feature_txt">
          <h2 className="feature_title">{props.news.title}</h2>
          <p className="feature_author">Author: {props.news.author}</p>
          <p className="feature_desc">{props.news.description}</p>
        </div>
      </div>
      ): "Loading..."}
    </>
  );
}

export default FeaturedNews;
