// Dependencies 
import React, { Component } from 'react';

// Assets 
import './css/Content.css';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      result: 0,
      n1: 0,
      n2: 0
    }
    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  componentDidMount() {
    this.setState({
      count: 1
    });
  }

  handleCountClick (e) {
    if(e.target.id === "add") {
      this.setState({
        count: this.state.count + 1
      });
    } else if (e.target.id === "subtract" && this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    } else {
      this.setState({
        count: 0
      });
    }
  }

  handleResultClick() {
    this.setState({
      result: Number(this.state.n1) + Number(this.state.n2)
    });
  }

  handleChangeValue(e) {
    if(e.target.id === "n1") {
      this.setState({
        n1: Number(e.target.value)
      });
    } else {
      this.setState({
        n2: Number(e.target.value)
      });
    }
  }

  render() {
    return (
      <div className="Content">
        <h1>Aplicacion de React, primeros pasos.</h1>
        <p className="App-intro">
          Los primeros pasos de la aplicacion de react.
        </p>
        <h3>Count: {this.state.count}</h3>

        <button id="add" onClick={this.handleCountClick}>+</button>
        <button id="subtract" onClick={this.handleCountClick}>-</button>
        <button id="reset" onClick={this.handleCountClick}>Reset</button>

        <p>Calculadora</p>
        <div>
          <input id="n1" type="number" value={this.state.n1} onChange={this.handleChangeValue} />
          +
          <input id="n2" type="number" value={this.state.n2} onChange={this.handleChangeValue} />
          <button id="result" onClick={this.handleResultClick}>=</button>
          {this.state.result}
        </div>

      </div>
    );
  }
}

export default Content;
