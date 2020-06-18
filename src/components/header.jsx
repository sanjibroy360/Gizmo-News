import React from "react";
import Sources from "./sources";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedData: "",
    };
  }

  handleInputChange = (event) => {
    var input = event.target.value || "";
    if(event.target) {
      this.setState( (input) => ({searchedData: this.state.searchedData + input}));
    }
    

  }

  handleSearch = (event) => {
    
    if(event.target) {
      console.log({search: this.state.searchedData})
      fetch(`https://newsapi.org/v2/everything?q=${this.state.searchedData}&language=en&apiKey=3c661e5df6d243708cfe9324fcf60eef`)
    .then(res => res.json())
    .then(data => this.setState({searchedData: data}));
    }
    event.preventDefault();
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
                  <input type="text" onChange={this.handleInputChange} value={this.state.searchedData} className="search_box_input" />
                  <button className="search_icon" >
                    <i className="fas fa-search"></i>
                  </button>
                  
                  <select name="language">
                    <option value="">Select</option>
                    <option value="en">en</option>
                  </select>
                </form>
                
              </li>
            </ul>
          </div>
        </header>
        <Sources searchedData={this.state.searchedData || ''}/>
      </>
    );
  }
}

export default Header;
