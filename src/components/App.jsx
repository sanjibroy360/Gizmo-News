import React from "react";
import Header from "./header.jsx";
import Sources from "./sources.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <>
        <React.Fragment>
          <Header />
          <Sources />
          
        </React.Fragment>
      </>
    );
  }
}

export default App;
