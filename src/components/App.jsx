import React from "react";
import Header from "./header.jsx";
import Sources from "./sources.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   filter: null,
    // };
  }

//   handleClick = (btn) => {
//     var date = new Date();
//     var month =
//       date.getDate() +
//       "/" +
//       (+date.getMonth() + 1 <= 9
//         ? "0" + (+date.getMonth() + 1)
//         : +date.getMonth() + 1);
//     if (btn == "all" && this.setState.filter !== month) {
//       this.setState({ filter: month });
//     } else {
//         this.setState({ filter: "hello" });
//     }
//   };

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
