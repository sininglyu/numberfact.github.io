import React from "react";
import "./Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleNumberChange(e) {
    this.setState({ number: e.target.value });
  }

  handleSearch(e) {
    this.props.searchNumber(this.state.number);
    e.preventDefault();
  }

  render() {
    return (
      <div className="Search">
        <input onChange={this.handleNumberChange} className='input'></input>
        <button onClick={this.handleSearch} className='btn btn-primary btn-lg'>Generate Fact!</button>
      </div>
    );
  }
}

export default Search;
