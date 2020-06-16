import React from "react";
import NewsCard from "./newsCard.jsx";
import FeaturedNews from "./feature.jsx";
import TrendingNews from "./trendingNews.jsx";

function randomNumber(arr = []) {
  return Math.floor(Math.random() * (arr.length - 1));
}

function Contents(props) {
  if (props.filteredData) {
    var featureIndex = randomNumber(props.filteredData);
    while (!props.filteredData[featureIndex].urlToImage) {
      featureIndex = randomNumber(props.filteredData);
    }
  }
  return (
    <>
      {props.filteredData ? (
        <div className="container">
          <div className="all_news_cards">
            <div className="content_flex">
              <FeaturedNews news={props.filteredData[featureIndex]} />
              <div className="headline_list">
                <TrendingNews />
              </div>
            </div>
            <ul className="news_cards">
              {props.filteredData.map((news, index) => {
                return index !== featureIndex ? <NewsCard news={news} /> : "";
              })}
            </ul>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default Contents;
