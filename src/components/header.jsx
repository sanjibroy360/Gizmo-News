import React from "react";
import Sources from "./sources";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedData: null,
      inputText: "",
      dataSearched: false,
      language: "en",
    };
  }

  handleInputChange = (event) => {
    var input = event.target.value;
    this.setState({ inputText: input });
  };

  handleSelect = (event) => {
    var option = event.target.value;
    this.setState({ language: option });
    console.log(option);
  };

  handleSearch = (event) => {
    this.setState({ searchedData: null });
    if (this.state.inputText) {
      fetch(
        `https://newsapi.org/v2/everything?q=${this.state.inputText}&language=${this.state.language}&apiKey=3c661e5df6d243708cfe9324fcf60eef`
      )
        .then((res) => res.json())
        .then((data) => this.setState({ searchedData: data.articles }))
        .catch((error) => console.log({ error }));

      console.log({
        search: `https://newsapi.org/v2/everything?sources=${this.state.inputText}&language=en&apiKey=3c661e5df6d243708cfe9324fcf60eef`,
      });
    } else {
      var date = new Date();
      var month =
        +date.getMonth() + 1 <= 9
          ? "0" + (+date.getMonth() + 1)
          : +date.getMonth() + 1;

      fetch(
        `https://newsapi.org/v2/everything?q=${month}&language=${this.state.language}&apiKey=3c661e5df6d243708cfe9324fcf60eef`
      )
        .then((res) => res.json())
        .then((data) =>
          this.setState({ searchedData: data.articles, dataSearched: true })
        )
        .catch((error) => console.log({ error }));
    }

    event.preventDefault();
  };

  componentDidMount() {
    console.log("header did mount");
    var date = new Date();
    var month =
      +date.getMonth() + 1 <= 9
        ? "0" + (+date.getMonth() + 1)
        : +date.getMonth() + 1;

    fetch(
      `https://newsapi.org/v2/everything?q=${month}&language=en&apiKey=3c661e5df6d243708cfe9324fcf60eef`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({ searchedData: data.articles, dataSearched: true })
      )
      .catch((error) => console.log({ error }));
  }

  render() {
    return (
      <>
        <header>
          <div className="container header_flex">
            <p className="logo">Gizmo</p>
            <ul>
              <li className="header_title">
                <form className="searchbox" onSubmit={this.handleSearch}>
                  <input
                    type="text"
                    onChange={this.handleInputChange}
                    className="search_box_input"
                  />
                  <button type="submit" className="search_icon">
                    <i className="fas fa-search"></i>
                  </button>

                  <select name="language" onChange={this.handleSelect}>
                    <option value="en">Select</option>
                    <option value="en">en</option>
                    <option value="fr">fr</option>
                    <option value="it">it</option>
                  </select>
                </form>
              </li>
            </ul>
          </div>
        </header>
        {this.state.searchedData ? (
          <>
            <Sources searchedData={this.state.searchedData} />
          </>
        ) : (
          "Loading..."
        )}
      </>
    );
  }
}

export default Header;
