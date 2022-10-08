import React from "react";
import "./App.css";
import Search from "./Search/Search";
import Examples from "./Examples/Examples";
import Number from "../util/Number";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: [], choice: "Trivia" };
    this.searchNumber = this.searchNumber.bind(this);
    this.getChoice = this.getChoice.bind(this);
  }

  searchNumber(number) {
    Number.search(number, this.state.choice).then((result) => {
      this.setState({ result: result });
    });
  }

  getChoice(choice) {
    this.setState({ choice: choice});
  }

  render() {
    return (
      <div className="App">
        <h1>Number Facts</h1>
        <Examples getChoice={this.getChoice}/>
        <Search searchNumber={this.searchNumber} />
        <h2 className="results">{this.state.result}</h2>
        {this.state.choice}
      </div>
    );
  }
}

export default App;
