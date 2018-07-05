import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const e = React.createElement;

class HelloState extends React.Component {
  constructor() {
    super();
    this.state = { home: 0, away: 0 };
    this.incrementHome = () => {
      this.setState(state => ({
        home: state.home + 1
      }));
    };
    this.decrementHome = () => {
      this.setState(state => ({
        home: state.home - 1
      }));
    };
    this.incrementAway = () => {
      this.setState(state => ({
        away: state.away + 1
      }));
    };
    this.decrementAway = () => {
      this.setState(state => ({
        away: state.away - 1
      }));
    };
  }

  render() {
    const { home } = this.state;
    const { away } = this.state;
    return (
      <div className='results'>
        <button onClick={this.incrementHome}>+</button>
        <button onClick={this.decrementHome}>-</button>
        <div>
          {" "}
          {home} : {away}
        </div>
        <button onClick={this.incrementAway}>+</button>
        <button onClick={this.decrementAway}>-</button>
        <button onClick={this.incrementHome}>+</button>
        <button onClick={this.decrementHome}>-</button>
        <div>
          {" "}
          {home} : {away}
        </div>
        <button onClick={this.incrementAway}>+</button>
        <button onClick={this.decrementAway}>-</button>
      </div>
    );
  }
}

const domContainer = document.querySelector("#results");
ReactDOM.render(e(HelloState), domContainer);
