import React from "react";
import NewsCard from "./newsCard.jsx";
import FeaturedNews from "./feature.jsx";
import TrendingNews from "./trendingNews.jsx";

function randomNumber(arr = []) {
  return Math.floor(Math.random() * (arr.length - 1));
}

function randomData(arr=[], featureIndex) {
  var obj = {}
  var arrRandomData = [];
  var limit = 9;
  for (let i = 1; i <= limit; i++) {
    var randomIndex = Math.floor(Math.random() * (arr.length - 1));
    
    if (
      randomIndex === featureIndex ||
      obj[randomIndex]
    ) {
      limit += 1;
    } else {
      arrRandomData.push(arr[randomIndex]);
      obj[randomIndex] = 1;
    }

  }
  return arrRandomData;
}


function Contents(props) {
  if (props.filteredData) {
    var featureIndex = randomNumber(props.filteredData);
    console.log(featureIndex)
    var randomNewses = randomData(props.filteredData, featureIndex);
    console.log({randomNewses});
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
              {randomNewses.map((news, index) => {
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
