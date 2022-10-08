import React from "react";
import "./Examples.css";

class Examples extends React.Component {
  handleChange(newChoice, e) {
    this.props.getChoice(newChoice);
    
  }

  render() {
    return (
      <div className="Examples">
        <div className='child card'>
          <a onClick={() => this.handleChange('math')}>
            <h2>Math</h2>
            <b>http://numbersapi.com/#5/math</b>
            <p>5 is the number of platonic solids.</p>
          </a>
        </div>
        <div className='child card'>
          <a onClick={() => this.handleChange('trivia')}>
            <h2>Trivia</h2>
            <b>http://numbersapi.com/#42</b>
            <p>
              42 is the number of little squares forming the left side trail of
              Microsoft's Windows 98 logo.
            </p>
          </a>
        </div>
        <div className='child card'>
          <a onClick={() => this.handleChange('year')}>
            <h2>Year</h2>
            <b>http://numbersapi.com/1328/year</b>
            <p>
              1328 is the year that the Augustiner brewery in Munich is established.
            </p>
          </a>
        </div>
      </div>
    );
  }
}

export default Examples;
