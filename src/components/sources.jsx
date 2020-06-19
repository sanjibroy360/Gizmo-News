import React from "react";
import SourceList from "./SourceList.jsx";
import Contents from "./content.jsx";

class Sources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: null,
      buttonClicked: "all",
      view: props.searchedData || null,
      
    };
  }

  randomData(arr) {
    var arrRandomNum = []
    for(let i = 1; i <= 5; i++) {
      var randomIndex = (Math.floor(Math.random() * (arr.length - 6)));
      arrRandomNum.push(arr[randomIndex]);
    }
    return arrRandomNum;
  }
  

  handleClick = (btn = "all") => {
    this.setState({view: null})
    var date = new Date();
    var month = (+date.getMonth() + 1 <= 9
        ? "0" + (+date.getMonth() + 1)
        : +date.getMonth() + 1);

    if (btn === "all") {
      // alert("All Called!")
      fetch(
        `https://newsapi.org/v2/everything?q=${month}&sortBy=publishedAt&language=en&apiKey=3c661e5df6d243708cfe9324fcf60eef`
      )
        .then((res) => res.json())
        .then((data) => this.setState({ view: data.articles }));
    } else {
      // alert("Sources!")
      fetch(
        `https://newsapi.org/v2/everything?sources=${btn}&sortBy=publishedAt&language=en&apiKey=3c661e5df6d243708cfe9324fcf60eef`
      )
        .then((res) => res.json())
        .then((data) => this.setState({ view: data.articles }));
    }
  };

  componentDidMount() {
    // alert("sources-did-mount");
    console.log({view: this.state.view})
    fetch(
      "https://newsapi.org/v2/sources?language=en&sortBy=publishedAt&country=us&apiKey=3c661e5df6d243708cfe9324fcf60eef"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ sources: this.randomData(data.sources) }))
      .catch((error) => console.log({ error }));
  }

  render() {
    return (
      <>
        {this.state.view ? console.log({value: this.state.view}): ""}
        {this.state.sources ? (
          <section>
            <ul className="source_flex">
              <li>
                <button
                  className="source_btn"
                  onClick={() => this.handleClick("all")}
                >
                  All
                </button>
              </li>
              <SourceList
                allSources={this.state.sources}
                handleClick={this.handleClick}
              />
            </ul>
          </section>
        ) : (
          ""
        )}
        
        {this.state.view ?
         <section>
          <Contents filteredData={this.state.view}/>
        </section>
        :("Loading...")
        }
       
      </>
    );
  }
}

export default Sources;
