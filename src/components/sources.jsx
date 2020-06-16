import React from "react";
import SourceList from "./SourceList.jsx";
import Contents from "./content.jsx";

class Sources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: null,
      buttonClicked: "all",
      view: null,
    };
  }

  handleClick = (btn = "all") => {
    var date = new Date();
    var month =
      date.getDate() +
      "/" +
      (+date.getMonth() + 1 <= 9
        ? "0" + (+date.getMonth() + 1)
        : +date.getMonth() + 1);
        
    if (btn === "all") {
      fetch(
        `https://newsapi.org/v2/everything?q=${month}&apiKey=3c661e5df6d243708cfe9324fcf60eef`
      )
        .then((res) => res.json())
        .then((data) => this.setState({ view: data.articles }));
    } else {
      fetch(
        `https://newsapi.org/v2/everything?sources=${btn}&apiKey=3c661e5df6d243708cfe9324fcf60eef`
      )
        .then((res) => res.json())
        .then((data) => this.setState({ view: data.articles }));
    }
  };

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/sources?language=en&country=us&apiKey=3c661e5df6d243708cfe9324fcf60eef"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ sources: data.sources }))
      .catch((error) => console.log({ error }));
  }

  render() {
    return this.state.sources ? (
      <>
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
        <Contents filteredData={this.state.view} />
      </>
    ) : (
      ""
    );
  }
}

export default Sources;
