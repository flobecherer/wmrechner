import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//React-Component für das Einstellen der Ergebnisse für die Gruppenphase
class Calculator extends React.Component {
  constructor() {
    super();
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
      away6: 0,
      statePointsT1: 1,
      statePointsT2: 1,
      statePointsT3: 1,
      statePointsT4: 1
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
    var pointsTeam1Game1 = 1;
    var pointsTeam1Game2 = 1;
    var pointsTeam1Game3 = 1;
    var pointsTeam1 = 3;
    var pointsTeam2Game1 = 1;
    var pointsTeam2Game2 = 1;
    var pointsTeam2Game3 = 1;
    var pointsTeam2 = 3;
    var pointsTeam3Game1 = 1;
    var pointsTeam3Game2 = 1;
    var pointsTeam3Game3 = 1;
    var pointsTeam3 = 3;
    var pointsTeam4Game1 = 1;
    var pointsTeam4Game2 = 1;
    var pointsTeam4Game3 = 1;
    var pointsTeam4 = 3;
    var homeGreaterAway1 = false;
    var homeEqualAway1 = false;
    var homeGreaterAway2 = false;
    var homeEqualAway2 = false;
    var homeGreaterAway3 = false;
    var homeEqualAway3 = false;
    var homeGreaterAway4 = false;
    var homeEqualAway4 = false;
    var homeGreaterAway5 = false;
    var homeEqualAway5 = false;
    var homeGreaterAway6 = false;
    var homeEqualAway6 = false;
    //Hochzählen von home1. Funktionen für die andren Werte analog
    this.incrementHome1 = () => {
      this.setState(state => ({ home1: state.home1 + 1 }));
      home1var = this.state.home1 + 1;
      if (home1var > away1var) {
        if (homeGreaterAway1 === false) {
          homeGreaterAway1 = true;
          homeEqualAway1 = false;
          pointsTeam1Game1 = 0 + 3;
          pointsTeam2Game1 = 0;
        }
      } else if (home1var === away1var) {
        if (homeEqualAway1 === false) {
          homeEqualAway1 = true;
          pointsTeam1Game1 = 0 + 1;
          pointsTeam2Game1 = 0 + 1;
        }
      }
      pointsTeam1 = pointsTeam1Game1 + pointsTeam1Game2 + pointsTeam1Game3;
      pointsTeam2 = pointsTeam2Game1 + pointsTeam2Game2 + pointsTeam2Game3;
      this.setState(state => ({ statePointsT1: state.statePointsT1 = pointsTeam1}));
      this.setState(state => ({ statePointsT2: state.statePointsT2 = pointsTeam2}));
    };
    //Runterzählen von home1. If-Schleife, damit Werte nicht negativ werden. Funktionen für die andren Werte analog
    this.decrementHome1 = () => {
      if (this.state.home1 > 0) {
        this.setState(state => ({ home1: state.home1 - 1 }));
        home1var = this.state.home1 - 1;
      } else {
        this.setState(state => ({ home1: (state.home1 = 0) }));
        home1var = 0;
      }
    };
    this.incrementAway1 = () => {
      this.setState(state => ({ away1: state.away1 + 1 }));
      away1var = this.state.away1 + 1;
      if (home1var < away1var) {
        if (homeGreaterAway1 === true) {
          homeEqualAway1 = false;
          pointsTeam1Game1 = 0;
          pointsTeam2Game1 = 0 + 3;
        }
      } else if (home1var === away1var) {
        if (homeEqualAway1 === false) {
          homeEqualAway1 = true;
          pointsTeam1Game1 = 0 + 1;
          pointsTeam2Game1 = 0 + 1;
        }
      }
      pointsTeam1 = pointsTeam1Game1 + pointsTeam1Game2 + pointsTeam1Game3;
      pointsTeam2 = pointsTeam2Game1 + pointsTeam2Game2 + pointsTeam2Game3;
      this.setState(state => ({ statePointsT1: state.statePointsT1 = pointsTeam1}));
      this.setState(state => ({ statePointsT2: state.statePointsT2 = pointsTeam2}));
    };
    this.decrementAway1 = () => {
      if (this.state.away1 > 0) {
        this.setState(state => ({ away1: state.away1 - 1 }));
      } else {
        this.setState(state => ({ away1: (state.away1 = 0) }));
      }
    };
    this.incrementHome2 = () => {
      this.setState(state => ({ home2: state.home2 + 1 }));
      home2var = this.state.home2 + 1;
      if (home2var > away2var) {
        if (homeGreaterAway2 === false) {
          homeGreaterAway2 = true;
          homeEqualAway2 = false;
          pointsTeam3Game1 = 0 + 3;
          pointsTeam4Game1 = 0;
        }
      } else if (home2var === away2var) {
        if (homeEqualAway2 === false) {
          homeEqualAway2 = true;
          pointsTeam3Game1 = 0 + 1;
          pointsTeam4Game1 = 0 + 1;
        }
      }
      pointsTeam3 = pointsTeam3Game1 + pointsTeam3Game2 + pointsTeam3Game3;
      pointsTeam4 = pointsTeam4Game1 + pointsTeam4Game2 + pointsTeam4Game3;
      this.setState(state => ({ statePointsT3: state.statePointsT3 = pointsTeam3}));
      this.setState(state => ({ statePointsT4: state.statePointsT4 = pointsTeam4}));
      /*console.log(pointsTeam1);
      console.log(pointsTeam2);
      console.log(pointsTeam3);
      console.log(pointsTeam4);*/
    };
    this.decrementHome2 = () => {
      if (this.state.home2 > 0) {
        this.setState(state => ({ home2: state.home2 - 1 }));
      } else {
        this.setState(state => ({ home2: (state.home2 = 0) }));
      }
    };
    this.incrementAway2 = () => {
      this.setState(state => ({ away2: state.away2 + 1 }));
    };
    this.decrementAway2 = () => {
      if (this.state.away2 > 0) {
        this.setState(state => ({ away2: state.away2 - 1 }));
      } else {
        this.setState(state => ({ away2: (state.away2 = 0) }));
      }
    };
    this.incrementHome3 = () => {
      this.setState(state => ({ home3: state.home3 + 1 }));
    };
    this.decrementHome3 = () => {
      if (this.state.home3 > 0) {
        this.setState(state => ({ home3: state.home3 - 1 }));
      } else {
        this.setState(state => ({ home3: (state.home3 = 0) }));
      }
    };
    this.incrementAway3 = () => {
      this.setState(state => ({ away3: state.away3 + 1 }));
    };
    this.decrementAway3 = () => {
      if (this.state.away3 > 0) {
        this.setState(state => ({ away3: state.away3 - 1 }));
      } else {
        this.setState(state => ({ away3: (state.away3 = 0) }));
      }
    };
    this.incrementHome4 = () => {
      this.setState(state => ({ home4: state.home4 + 1 }));
    };
    this.decrementHome4 = () => {
      if (this.state.home4 > 0) {
        this.setState(state => ({ home4: state.home4 - 1 }));
      } else {
        this.setState(state => ({ home4: (state.home4 = 0) }));
      }
    };
    this.incrementAway4 = () => {
      this.setState(state => ({ away4: state.away4 + 1 }));
    };
    this.decrementAway4 = () => {
      if (this.state.away4 > 0) {
        this.setState(state => ({ away4: state.away4 - 1 }));
      } else {
        this.setState(state => ({ away4: (state.away4 = 0) }));
      }
    };
    this.incrementHome5 = () => {
      this.setState(state => ({ home5: state.home5 + 1 }));
    };
    this.decrementHome5 = () => {
      if (this.state.home5 > 0) {
        this.setState(state => ({ home5: state.home5 - 1 }));
      } else {
        this.setState(state => ({ home5: (state.home5 = 0) }));
      }
    };
    this.incrementAway5 = () => {
      this.setState(state => ({ away5: state.away5 + 1 }));
    };
    this.decrementAway5 = () => {
      if (this.state.away5 > 0) {
        this.setState(state => ({ away5: state.away5 - 1 }));
      } else {
        this.setState(state => ({ away5: (state.away5 = 0) }));
      }
    };
    this.incrementHome6 = () => {
      this.setState(state => ({ home6: state.home6 + 1 }));
    };
    this.decrementHome6 = () => {
      if (this.state.home6 > 0) {
        this.setState(state => ({ home6: state.home6 - 1 }));
      } else {
        this.setState(state => ({ home6: (state.home6 = 0) }));
      }
    };
    this.incrementAway6 = () => {
      this.setState(state => ({ away6: state.away6 + 1 }));
    };
    this.decrementAway6 = () => {
      if (this.state.away6 > 0) {
        this.setState(state => ({ away6: state.away6 - 1 }));
      } else {
        this.setState(state => ({ away6: (state.away6 = 0) }));
      }
    };
    /*this.pointsOfGame1 = () => {
      //this.incrementHome1();
      //this.setState(state => ({ home1: state.home1 + 1 }));
      console.log(
        "after inc1 home1: " + home1var,
        "away1: " + this.state.away1
      );
      if (home1var > away1var) {
        this.setState(state => ({ points1: state.pointsTeam1Game1 + 3 }));
        pointsTeam1Game1 = pointsTeam1Game1 + 3;
        console.log(
          "if1 points1: " + pointsTeam1Game1,
          "points2: " + pointsTeam2Game1
        );
      }
      if (home1var === away1var) {
        this.setState(state => ({
          pointsTeam1Game1: state.pointsTeam1Game1 - 3 + 1,
          pointsTeam2Game1: state.pointsTeam2Game1 - 3 + 1
        }));
        points1 = points1 + 1;
        points2 = points2 + 1;
        console.log("else if points1: " + points1, "points2: " + points2);
      }
      if (home1var < away1var) {
        this.setState(state => ({ points2: state.points2 + 3 }));
        points2 = points2 + 3;
        console.log(
          "else else points1: " + this.state.points1,
          "points2: " + this.state.points2
        );
      }
    };*/
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
      away6,
      statePointsT1,
      statePointsT2,
      statePointsT3,
      statePointsT4
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
    this.incrementHome1 = () => {
      this.setState(state => ({ home1: state.home1 + 1 }));
    };
    this.decrementHome1 = () => {
      if (this.state.home1 > 0) {
        this.setState(state => ({ home1: state.home1 - 1 }));
      } else {
        this.setState(state => ({ home1: (state.home1 = 0) }));
      }
    };
    this.incrementAway1 = () => {
      this.setState(state => ({ away1: state.away1 + 1 }));
    };
    this.decrementAway1 = () => {
      if (this.state.away1 > 0) {
        this.setState(state => ({ away1: state.away1 - 1 }));
      } else {
        this.setState(state => ({ away1: (state.away1 = 0) }));
      }
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
  constructor(props) {
    super(props);
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
    //Berechnung der Tabellenwerte von Team 1 basierend auf der Reihenfolge der Spiele in index.html, weitere Funktionen analog
    this.computeValues1 = () => {
      this.setState(state => ({
        goals1: (state.goals1 = state.home1 + state.home3 + state.home5),
        counterGoals1: (state.counterGoals1 =
          state.away1 + state.away3 + state.away5),
        goalDiff1: (state.goalDiff1 = state.goals1 - state.counterGoals1)
      }));
    };
    this.computeValues2 = () => {
      this.setState(state => ({
        goals2: (state.goals2 = state.away1 + state.home4 + state.home6),
        counterGoals2: (state.counterGoals2 =
          state.home1 + state.away4 + state.away6),
        goalDiff2: (state.goalDiff2 = state.goals2 - state.counterGoals2)
      }));
    };
    this.computeValues3 = () => {
      this.setState(state => ({
        goals3: (state.goals3 = state.home2 + state.away3 + state.away6),
        counterGoals3: (state.counterGoals3 =
          state.away2 + state.home3 + state.home6),
        goalDiff3: (state.goalDiff3 = state.goals3 - state.counterGoals3)
      }));
    };
    this.computeValues4 = () => {
      this.setState(state => ({
        goals4: (state.goals1 = state.away2 + state.away4 + state.away5),
        counterGoals4: (state.counterGoals4 =
          state.home2 + state.home4 + state.home5),
        goalDiff4: (state.goalDiff4 = state.goals4 - state.counterGoals4)
      }));
    };
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
