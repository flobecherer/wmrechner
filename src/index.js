import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { computeTable } from "./calcPoints.js";
import { compareGoals, compareGoalsKO } from "./compareGoals.js";
import { getWinner } from "./getWinner.js";

//React-Component für das Einstellen der Ergebnisse für die Gruppenphase
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    //home1 bezeichnet die Tore für das Heimteam im ersten Spiel, die anderen analog
    this.state = {
      home1: 0,
      away1: 0,
      home2: 0,
      away2: 0,
      home3: 0,
      away3: 0,
      home4: 0,
      away4: 0,
      home5: 0,
      away5: 0,
      home6: 0,
      away6: 0
      //statePoints zum Speichern der Punkte als state (evtl. für Übernahme der Gruppensieger notwendig)
      //statePointsT1: 1,
      //statePointsT2: 1,
      //statePointsT3: 1,
      //statePointsT4: 1
    };
    var home1var = 0;
    var away1var = 0;
    var home2var = 0;
    var away2var = 0;
    var home3var = 0;
    var away3var = 0;
    var home4var = 0;
    var away4var = 0;
    var home5var = 0;
    var away5var = 0;
    var home6var = 0;
    var away6var = 0;
    var result1 = {scoreAway: 0, scoreHome: 0};
    var result2 = {scoreAway: 0, scoreHome: 0};
    var result3 = {scoreAway: 0, scoreHome: 0};
    var result4 = {scoreAway: 0, scoreHome: 0};
    var result5 = {scoreAway: 0, scoreHome: 0};
    var result6 = {scoreAway: 0, scoreHome: 0};
    var winner;
    var allPoints;

    //Hochzählen von home1 und direkte Berechnung der Punkte über externe Funktionen. Funktionen für die anderen Werte analog
    this.incrementHome1 = () => {
      this.setState(state => ({ home1: state.home1 + 1 }));
      home1var = this.state.home1 + 1;
      result1 = compareGoals(home1var, away1var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
      console.log(allPoints);
    };
    //Runterzählen von home1 und direkte Berechnung der Punkte über externe Funktionen. If-Schleife, damit Werte nicht negativ werden. Funktionen für die anderen Werte analog
    this.decrementHome1 = () => {
      if (this.state.home1 > 0) {
        this.setState(state => ({ home1: state.home1 - 1 }));
        home1var = this.state.home1 - 1;
      } else {
        this.setState(state => ({ home1: (state.home1 = 0) }));
        home1var = 0;
      }
      result1 = compareGoals(home1var, away1var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
      console.log(allPoints);
    };
    this.incrementAway1 = () => {
      this.setState(state => ({ away1: state.away1 + 1 }));
      away1var = this.state.away1 + 1;
      result1 = compareGoals(home1var, away1var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
      console.log(allPoints);
    };
    this.decrementAway1 = () => {
      if (this.state.away1 > 0) {
        this.setState(state => ({ away1: state.away1 - 1 }));
        away1var = this.state.away1 - 1;
      } else {
        this.setState(state => ({ away1: (state.away1 = 0) }));
        away1var = 0;
      }
      result1 = compareGoals(home1var, away1var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
      console.log(allPoints);
    };
    this.incrementHome2 = () => {
      this.setState(state => ({ home2: state.home2 + 1 }));
      home2var = this.state.home2 + 1;
      result2 = compareGoals(home2var, away2var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.decrementHome2 = () => {
      if (this.state.home2 > 0) {
        this.setState(state => ({ home2: state.home2 - 1 }));
        home2var = this.state.home2 - 1;
      } else {
        this.setState(state => ({ home2: (state.home2 = 0) }));
        home2var = 0;
      }
      result2 = compareGoals(home2var, away2var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.incrementAway2 = () => {
      this.setState(state => ({ away2: state.away2 + 1 }));
      away2var = this.state.away2 + 1;
      result2 = compareGoals(home2var, away2var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.decrementAway2 = () => {
      if (this.state.away2 > 0) {
        this.setState(state => ({ away2: state.away2 - 1 }));
        away2var = this.state.away2 - 1;
      } else {
        this.setState(state => ({ away2: (state.away2 = 0) }));
        away2var = 0;
      }
      result2 = compareGoals(home2var, away2var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.incrementHome3 = () => {
      this.setState(state => ({ home3: state.home3 + 1 }));
      home3var = this.state.home3 + 1;      
      result3 = compareGoals(home3var, away3var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.decrementHome3 = () => {
      if (this.state.home3 > 0) {
        this.setState(state => ({ home3: state.home3 - 1 }));
        home3var = this.state.home3 - 1;
      } else {
        this.setState(state => ({ home3: (state.home3 = 0) }));
        home3var = 0;
      }      
      result3 = compareGoals(home3var, away3var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.incrementAway3 = () => {
      this.setState(state => ({ away3: state.away3 + 1 }));
      away3var = this.state.away3 + 1;      
      result3 = compareGoals(home3var, away3var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.decrementAway3 = () => {
      if (this.state.away3 > 0) {
        this.setState(state => ({ away3: state.away3 - 1 }));
        away3var = this.state.away3 - 1;
      } else {
        this.setState(state => ({ away3: (state.away3 = 0) }));
        away3var = 0;
      }      
      result3 = compareGoals(home3var, away3var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.incrementHome4 = () => {
      this.setState(state => ({ home4: state.home4 + 1 }));
      home4var = this.state.home4 + 1;      
      result4 = compareGoals(home4var, away4var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.decrementHome4 = () => {
      if (this.state.home4 > 0) {
        this.setState(state => ({ home4: state.home4 - 1 }));
        home4var = this.state.home4 - 1;
      } else {
        this.setState(state => ({ home4: (state.home4 = 0) }));
        home4var = 0;
      }      
      result4 = compareGoals(home4var, away4var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.incrementAway4 = () => {
      this.setState(state => ({ away4: state.away4 + 1 }));
      away4var = this.state.away4 + 1;      
      result4 = compareGoals(home4var, away4var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.decrementAway4 = () => {
      if (this.state.away4 > 0) {
        this.setState(state => ({ away4: state.away4 - 1 }));
        away4var = this.state.away4 - 1;
      } else {
        this.setState(state => ({ away4: (state.away4 = 0) }));
        away4var = 0;
      }      
      result4 = compareGoals(home4var, away4var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.incrementHome5 = () => {
      this.setState(state => ({ home5: state.home5 + 1 }));
      home5var = this.state.home5 + 1;      
      result5 = compareGoals(home5var, away5var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.decrementHome5 = () => {
      if (this.state.home5 > 0) {
        this.setState(state => ({ home5: state.home5 - 1 }));
        home5var = this.state.home5 - 1;
      } else {
        this.setState(state => ({ home5: (state.home5 = 0) }));
        home5var = 0;
      }      
      result5 = compareGoals(home5var, away5var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.incrementAway5 = () => {
      this.setState(state => ({ away5: state.away5 + 1 }));
      away5var = this.state.away5 + 1;      
      result5 = compareGoals(home5var, away5var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.decrementAway5 = () => {
      if (this.state.away5 > 0) {
        this.setState(state => ({ away5: state.away5 - 1 }));
        away5var = this.state.away5 - 1;
      } else {
        this.setState(state => ({ away5: (state.away5 = 0) }));
        away5var = 0;
      }      
      result5 = compareGoals(home5var, away5var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.incrementHome6 = () => {
      this.setState(state => ({ home6: state.home6 + 1 }));
      home6var = this.state.home6 + 1;      
      result6 = compareGoals(home6var, away6var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.decrementHome6 = () => {
      if (this.state.home6 > 0) {
        this.setState(state => ({ home6: state.home6 - 1 }));
        home6var = this.state.home6 - 1;
      } else {
        this.setState(state => ({ home6: (state.home6 = 0) }));
        home6var = 0;
      }      
      result6 = compareGoals(home6var, away6var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.incrementAway6 = () => {
      this.setState(state => ({ away6: state.away6 + 1 }));
      away6var = this.state.away6 + 1;      
      result6 = compareGoals(home6var, away6var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
    this.decrementAway6 = () => {
      if (this.state.away6 > 0) {
        this.setState(state => ({ away6: state.away6 - 1 }));
        away6var = this.state.away6 - 1;
      } else {
        this.setState(state => ({ away6: (state.away6 = 0) }));
        away6var = 0;
      }      
      result6 = compareGoals(home6var, away6var);
      allPoints = computeTable(result1, result2, result3, result4, result5, result6);
      winner = getWinner(allPoints);
    };
  }

  render() {
    const {
      home1,
      away1,
      home2,
      away2,
      home3,
      away3,
      home4,
      away4,
      home5,
      away5,
      home6,
      away6
    } = this.state;
    return (
      //Aufbau der React-Component
      <React.Fragment>
        <br />
        <button onClick={this.incrementHome1}>+</button>
        <button onClick={this.decrementHome1}>-</button> {home1} : {away1}{" "}
        <button onClick={this.incrementAway1}>+</button>
        <button onClick={this.decrementAway1}>-</button>
        <br />
        <button onClick={this.incrementHome2}>+</button>
        <button onClick={this.decrementHome2}>-</button> {home2} : {away2}{" "}
        <button onClick={this.incrementAway2}>+</button>
        <button onClick={this.decrementAway2}>-</button>
        <br />
        <button onClick={this.incrementHome3}>+</button>
        <button onClick={this.decrementHome3}>-</button> {home3} : {away3}{" "}
        <button onClick={this.incrementAway3}>+</button>
        <button onClick={this.decrementAway3}>-</button>
        <br />
        <button onClick={this.incrementHome4}>+</button>
        <button onClick={this.decrementHome4}>-</button> {home4} : {away4}{" "}
        <button onClick={this.incrementAway4}>+</button>
        <button onClick={this.decrementAway4}>-</button>
        <br />
        <button onClick={this.incrementHome5}>+</button>
        <button onClick={this.decrementHome5}>-</button> {home5} : {away5}{" "}
        <button onClick={this.incrementAway5}>+</button>
        <button onClick={this.decrementAway5}>-</button>
        <br />
        <button onClick={this.incrementHome6}>+</button>
        <button onClick={this.decrementHome6}>-</button> {home6} : {away6}{" "}
        <button onClick={this.incrementAway6}>+</button>
        <button onClick={this.decrementAway6}>-</button>
      </React.Fragment>
    );
  }
}

//Analoges Component zu Calculator für einzelne Spiele
class CalculatorSingleGame extends React.Component {
  constructor() {
    super();
    this.state = { home1: 0, away1: 0 };

    var homeVar = 0;
    var awayVar = 0;
    var result;
    this.incrementHome1 = () => {
      this.setState(state => ({ home1: state.home1 + 1 }));
      homeVar = this.state.home1 + 1;
      result = compareGoalsKO(homeVar, awayVar);
      console.log(result);
    };
    this.decrementHome1 = () => {
      if (this.state.home1 > 0) {
        this.setState(state => ({ home1: state.home1 - 1 }));
        homeVar = this.state.home1 - 1;
      } else {
        this.setState(state => ({ home1: (state.home1 = 0) }));
        homeVar = 0;
      }
      result = compareGoalsKO(homeVar, awayVar);
      console.log(result);
    };
    this.incrementAway1 = () => {
      this.setState(state => ({ away1: state.away1 + 1 }));
      awayVar = this.state.away1 + 1;
      result = compareGoalsKO(homeVar, awayVar);
      console.log(result);
    };
    this.decrementAway1 = () => {
      if (this.state.away1 > 0) {
        this.setState(state => ({ away1: state.away1 - 1 }));
        awayVar = this.state.away1 - 1;
      } else {
        this.setState(state => ({ away1: (state.away1 = 0) }));
        awayVar = 0;
      }
      result = compareGoalsKO(homeVar, awayVar);
      console.log(result);
    };
  }

  render() {
    const { home1, away1 } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.incrementHome1}>+</button>
        <button onClick={this.decrementHome1}>-</button> {home1} : {away1}{" "}
        <button onClick={this.incrementAway1}>+</button>
        <button onClick={this.decrementAway1}>-</button>
      </React.Fragment>
    );
  }
}

//React-Component zur Darstellung und Berechnung der Tabellenwerte in der Gruppenphase
class TableValues extends React.Component {
  constructor() {
    super();
    //goals1, counterGoals1, goalDiff und points1 bezeichnen die Tore, Gegentore, Tordifferenz und die Punkte des ersten Teams, weitere Werte analog
    this.state = {
      goals1: 0,
      counterGoals1: 0,
      goalDiff1: 0,
      points1: 0,
      goals2: 0,
      counterGoals2: 0,
      goalDiff2: 0,
      points2: 0,
      goals3: 0,
      counterGoals3: 0,
      goalDiff3: 0,
      points3: 0,
      goals4: 0,
      counterGoals4: 0,
      goalDiff4: 0,
      points4: 0
    };
    //var tablePoints = computeTable(result1, result2, result3, result4, result5, result6);
    //console.log(tablePoints);
  }

  render() {
    const {
      goals1,
      goals2,
      goals3,
      goals4,
      counterGoals1,
      counterGoals2,
      counterGoals3,
      counterGoals4,
      goalDiff1,
      goalDiff2,
      goalDiff3,
      goalDiff4,
      points1,
      points2,
      points3,
      points4
    } = this.state;
    return (
      //Aufbau der Tabelle
      <React.Fragment>
        {goals1} : {counterGoals1} {goalDiff1} {points1}
        <br />
        {goals2} : {counterGoals2} {goalDiff2} {points2}
        <br />
        {goals3} : {counterGoals3} {goalDiff3} {points3}
        <br />
        {goals4} : {counterGoals4} {goalDiff4} {points4}
      </React.Fragment>
    );
  }
}

//Einbinden der Components an den gewünschten Stellen im HTML-Dokument
const domContainerA = document.querySelector("#resultsA");
ReactDOM.render(React.createElement(Calculator), domContainerA);
const domContainerB = document.querySelector("#resultsB");
ReactDOM.render(React.createElement(Calculator), domContainerB);
const domContainerC = document.querySelector("#resultsC");
ReactDOM.render(React.createElement(Calculator), domContainerC);
const domContainerD = document.querySelector("#resultsD");
ReactDOM.render(React.createElement(Calculator), domContainerD);
const domContainerE = document.querySelector("#resultsE");
ReactDOM.render(React.createElement(Calculator), domContainerE);
const domContainerF = document.querySelector("#resultsF");
ReactDOM.render(React.createElement(Calculator), domContainerF);
const domContainerG = document.querySelector("#resultsG");
ReactDOM.render(React.createElement(Calculator), domContainerG);
const domContainerH = document.querySelector("#resultsH");
ReactDOM.render(React.createElement(Calculator), domContainerH);

const domContainerAF1 = document.querySelector("#resultAF1");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerAF1);
const domContainerAF2 = document.querySelector("#resultAF2");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerAF2);
const domContainerAF3 = document.querySelector("#resultAF3");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerAF3);
const domContainerAF4 = document.querySelector("#resultAF4");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerAF4);
const domContainerAF5 = document.querySelector("#resultAF5");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerAF5);
const domContainerAF6 = document.querySelector("#resultAF6");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerAF6);
const domContainerAF7 = document.querySelector("#resultAF7");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerAF7);
const domContainerAF8 = document.querySelector("#resultAF8");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerAF8);

const domContainerVF1 = document.querySelector("#resultVF1");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerVF1);
const domContainerVF2 = document.querySelector("#resultVF2");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerVF2);
const domContainerVF3 = document.querySelector("#resultVF3");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerVF3);
const domContainerVF4 = document.querySelector("#resultVF4");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerVF4);

const domContainerHF1 = document.querySelector("#resultHF1");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerHF1);
const domContainerHF2 = document.querySelector("#resultHF2");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerHF2);

const domContainerFinal = document.querySelector("#resultFinal");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerFinal);
const domContainerP3 = document.querySelector("#resultP3");
ReactDOM.render(React.createElement(CalculatorSingleGame), domContainerP3);

const domContainerValueA = document.querySelector("#valuesA");
ReactDOM.render(React.createElement(TableValues), domContainerValueA);
const domContainerValueB = document.querySelector("#valuesB");
ReactDOM.render(React.createElement(TableValues), domContainerValueB);
const domContainerValueC = document.querySelector("#valuesC");
ReactDOM.render(React.createElement(TableValues), domContainerValueC);
const domContainerValueD = document.querySelector("#valuesD");
ReactDOM.render(React.createElement(TableValues), domContainerValueD);
const domContainerValueE = document.querySelector("#valuesE");
ReactDOM.render(React.createElement(TableValues), domContainerValueE);
const domContainerValueF = document.querySelector("#valuesF");
ReactDOM.render(React.createElement(TableValues), domContainerValueF);
const domContainerValueG = document.querySelector("#valuesG");
ReactDOM.render(React.createElement(TableValues), domContainerValueG);
const domContainerValueH = document.querySelector("#valuesH");
ReactDOM.render(React.createElement(TableValues), domContainerValueH);

//const domContainerCountriesA = document.querySelector("#countriesA");
//ReactDOM.render(React.createElement(),domContainerCountriesA);
