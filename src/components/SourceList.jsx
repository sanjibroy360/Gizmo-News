import React from "react";

function randomNumber(arr) {
  var arrRandomNum = []
  for(let i = 1; i <= 5; i++) {
    arrRandomNum.push(Math.floor(Math.random() * (arr.length - 6)));
  }
  return arrRandomNum;
  
}

function SourceList(props) {
  var nums = randomNumber(props.allSources);
  return (
    <>
      {nums
        .map((num) => {
          return (
            <li>
              <button className="source_btn" onClick={() => props.handleClick(props.allSources[num].id)}>{props.allSources[num].name}</button>
            </li>
          );
        })}
    </>
  );
}

export default SourceList;
