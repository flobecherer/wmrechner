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
      statePointsT4: 1,
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
    //var goalsTeam1 = 0;
    //var goalsTeam2 = 0;
    //var goalsTeam3 = 0;
    //var goalsTeam4 = 0;
    //var negGoalsTeam1 = 0;
    //var negGoalsTeam2 = 0;
    //var negGoalsTeam3 = 0;
    //var negGoalsTeam4 = 0;
    //var goalDiffTeam1 = 0;
    //var goalDiffTeam2 = 0;
    //var goalDiffTeam3 = 0;
    //var goalDiffTeam4 = 0;
    var groupWinner = 0;
    //var groupSecond = 0;
    var Team1 = {/*Goals: goalsTeam1, negGoals: negGoalsTeam1, GoalDiff: goalDiffTeam1,*/ Points: pointsTeam1};
    var Team2 = {/*Goals: goalsTeam2, negGoals: negGoalsTeam2, GoalDiff: goalDiffTeam2,*/ Points: pointsTeam2};
    var Team3 = {/*Goals: goalsTeam3, negGoals: negGoalsTeam3, GoalDiff: goalDiffTeam3,*/ Points: pointsTeam3};
    var Team4 = {/*Goals: goalsTeam4, negGoals: negGoalsTeam4, GoalDiff: goalDiffTeam4,*/ Points: pointsTeam4};
    var maximumPoints = 0;
    //var secondMaxPoints = 0;
    //var maxGoalDiff = 0;
    //var secondMaxGoalDiff = 0;
    //var maxGoals = 0;

    function compareGoals1() {
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
          homeGreaterAway1 = false;
          pointsTeam1Game1 = 0 + 1;
          pointsTeam2Game1 = 0 + 1;
        }
      } else if (home1var < away1var) {
        if (homeGreaterAway1 === false) {
          homeEqualAway1 = false;
          pointsTeam1Game1 = 0;
          pointsTeam2Game1 = 0 + 3;
        }
      }
    }
    function compareGoals2() {
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
          homeGreaterAway2 = false;
          pointsTeam3Game1 = 0 + 1;
          pointsTeam4Game1 = 0 + 1;
        }
      } else if (home2var < away2var) {
        if (homeGreaterAway2 === false) {
          homeEqualAway2 = false;
          pointsTeam3Game1 = 0;
          pointsTeam4Game1 = 0 + 3;
        }
      }
    }
    function compareGoals3() {
      if (home3var > away3var) {
        if (homeGreaterAway3 === false) {
          homeGreaterAway3 = true;
          homeEqualAway3 = false;
          pointsTeam1Game2 = 0 + 3;
          pointsTeam3Game2 = 0;
        }
      } else if (home3var === away3var) {
        if (homeEqualAway3 === false) {
          homeEqualAway3 = true;
          homeGreaterAway3 = false;
          pointsTeam1Game2 = 0 + 1;
          pointsTeam3Game2 = 0 + 1;
        }
      } else if (home3var < away3var) {
        if (homeGreaterAway3 === false) {
          homeEqualAway3 = false;
          pointsTeam1Game2 = 0;
          pointsTeam3Game2 = 0 + 3;
        }
      }
    }
    function compareGoals4() {
      if (home4var > away4var) {
        if (homeGreaterAway4 === false) {
          homeGreaterAway4 = true;
          homeEqualAway4 = false;
          pointsTeam2Game2 = 0 + 3;
          pointsTeam4Game2 = 0;
        }
      } else if (home4var === away4var) {
        if (homeEqualAway4 === false) {
          homeEqualAway4 = true;
          homeGreaterAway4 = false;
          pointsTeam2Game2 = 0 + 1;
          pointsTeam4Game2 = 0 + 1;
        }
      } else if (home4var < away4var) {
        if (homeGreaterAway4 === false) {
          homeEqualAway4 = false;
          pointsTeam2Game2 = 0;
          pointsTeam4Game2 = 0 + 3;
        }
      }
    }
    function compareGoals5() {
      if (home5var > away5var) {
        if (homeGreaterAway5 === false) {
          homeGreaterAway5 = true;
          homeEqualAway5 = false;
          pointsTeam1Game3 = 0 + 3;
          pointsTeam4Game3 = 0;
        }
      } else if (home5var === away5var) {
        if (homeEqualAway5 === false) {
          homeEqualAway5 = true;
          homeGreaterAway5 = false;
          pointsTeam1Game3 = 0 + 1;
          pointsTeam4Game3 = 0 + 1;
        }
      } else if (home5var < away5var) {
        if (homeGreaterAway5 === false) {
          homeEqualAway5 = false;
          pointsTeam1Game3 = 0;
          pointsTeam4Game3 = 0 + 3;
        }
      }
    }
    function compareGoals6() {
      if (home6var > away6var) {
        if (homeGreaterAway6 === false) {
          homeGreaterAway6 = true;
          homeEqualAway6 = false;
          pointsTeam2Game3 = 0 + 3;
          pointsTeam3Game3 = 0;
        }
      } else if (home6var === away6var) {
        if (homeEqualAway6 === false) {
          homeEqualAway6 = true;
          homeGreaterAway6 = false;
          pointsTeam2Game3 = 0 + 1;
          pointsTeam3Game3 = 0 + 1;
        }
      } else if (home6var < away6var) {
        if (homeGreaterAway6 === false) {
          homeEqualAway6 = false;
          pointsTeam2Game3 = 0;
          pointsTeam3Game3 = 0 + 3;
        }
      }
    }
    function computeTable() {
      //goalsTeam1 = home1var + home3var + home5var;
      //goalsTeam2 = away1var + home4var + home6var;
      //goalsTeam3 = home2var + away3var + away6var;
      //goalsTeam4 = away2var + away4var + away5var;
      //negGoalsTeam1 = away1var + away3var + away5var;
      //negGoalsTeam2 = home1var + away4var + away6var;
      //negGoalsTeam3 = away2var + home3var + home6var;
      //negGoalsTeam4 = home2var + home4var + home5var;
      //goalDiffTeam1 = goalsTeam1 - negGoalsTeam1;
      //goalDiffTeam2 = goalsTeam2 - negGoalsTeam2;
      //goalDiffTeam3 = goalsTeam3 - negGoalsTeam3;
      //goalDiffTeam4 = goalsTeam4 - negGoalsTeam4;
      pointsTeam1 = pointsTeam1Game1 + pointsTeam1Game2 + pointsTeam1Game3;
      pointsTeam2 = pointsTeam2Game1 + pointsTeam2Game2 + pointsTeam2Game3;
      pointsTeam3 = pointsTeam3Game1 + pointsTeam3Game2 + pointsTeam3Game3;
      pointsTeam4 = pointsTeam4Game1 + pointsTeam4Game2 + pointsTeam4Game3;
      Team1 = {/*Goals: goalsTeam1, negGoals: negGoalsTeam1, GoalDiff: goalDiffTeam1,*/ Points: pointsTeam1};
      Team2 = {/*Goals: goalsTeam2, negGoals: negGoalsTeam2, GoalDiff: goalDiffTeam2,*/ Points: pointsTeam2};
      Team3 = {/*Goals: goalsTeam3, negGoals: negGoalsTeam3, GoalDiff: goalDiffTeam3,*/ Points: pointsTeam3};
      Team4 = {/*Goals: goalsTeam4, negGoals: negGoalsTeam4, GoalDiff: goalDiffTeam4,*/ Points: pointsTeam4};
      console.log("------------------");
      console.log("Team1: " /*+ goalsTeam1 + "|" + negGoalsTeam1 + "|" + goalDiffTeam1 + "|"*/ + pointsTeam1);
      console.log("Team2: " /*+ goalsTeam2 + "|" + negGoalsTeam2 + "|" + goalDiffTeam2 + "|"*/ + pointsTeam2);
      console.log("Team3: " /*+ goalsTeam3 + "|" + negGoalsTeam3 + "|" + goalDiffTeam3 + "|"*/ + pointsTeam3);
      console.log("Team4: " /*+ goalsTeam4 + "|" + negGoalsTeam4 + "|" + goalDiffTeam4 + "|"*/ + pointsTeam4);
      console.log("---------------------------");
      maximumPoints = Math.max(Team1.Points, Team2.Points, Team3.Points, Team4.Points);
      console.log("maxPoint: " + maximumPoints);
      if (maximumPoints === pointsTeam1) {
        groupWinner = "Russland";
      } else if (maximumPoints === pointsTeam2) {
        groupWinner = "Saudi-Arabien";
      } else if (maximumPoints === pointsTeam3) {
        groupWinner = "Ägypten";
      } else {
        groupWinner = "Uruguay";
      }
      console.log("Sieger A: " + groupWinner);
      /*if (Team1.Points <= maximumPoints && Team2.Points <= maximumPoints && Team3.Points <= maximumPoints) {
        secondMaxPoints = Math.max(Team1.Points, Team2.Points, Team3.Points);
      }
      if (Team1.Points <= maximumPoints && Team2.Points <= maximumPoints && Team4.Points <= maximumPoints) {
        secondMaxPoints = Math.max(Team1.Points, Team2.Points, Team4.Points);
      }
      else if (Team1.Points <= maximumPoints && Team3.Points <= maximumPoints && Team4.Points <= maximumPoints) {
        secondMaxPoints = Math.max(Team1.Points, Team3.Points, Team4.Points);
      }
      else if (Team2.Points <= maximumPoints && Team3.Points <= maximumPoints && Team4.Points <= maximumPoints) {
        secondMaxPoints = Math.max(Team2.Points, Team3.Points, Team4.Points);
      }
      console.log("secMax: " + secondMaxPoints); 
      if (maximumPoints === secondMaxPoints) {
        maxGoalDiff = Math.max(Team1.GoalDiff, Team2.GoalDiff, Team3.GoalDiff, Team4.GoalDiff);
        console.log("GoalDiff: " + maxGoalDiff);
        if (Team1.GoalDiff <= maxGoalDiff && Team2.GoalDiff <= maxGoalDiff && Team3.GoalDiff <= maxGoalDiff) {
          secondMaxGoalDiff = Math.max(Team1.GoalDiff, Team2.GoalDiff, Team3.GoalDiff);
        }
        else if (Team1.GoalDiff <= maxGoalDiff && Team2.GoalDiff <= maxGoalDiff && Team4.GoalDiff <= maxGoalDiff) {
          secondMaxGoalDiff = Math.max(Team1.GoalDiff, Team2.GoalDiff, Team4.GoalDiff);
        }
        else if (Team1.GoalDiff <= maxGoalDiff && Team4.GoalDiff <= maxGoalDiff && Team3.GoalDiff <= maxGoalDiff) {
          secondMaxGoalDiff = Math.max(Team1.GoalDiff, Team4.GoalDiff, Team3.GoalDiff);
        }
        else if (Team2.GoalDiff <= maxGoalDiff && Team3.GoalDiff <= maxGoalDiff && Team4.GoalDiff <= maxGoalDiff) {
          secondMaxGoalDiff = Math.max(Team2.GoalDiff, Team3.GoalDiff, Team4.GoalDiff);
        }
        console.log("secGoalDiff: " + secondMaxGoalDiff);
        if (maxGoalDiff === secondMaxGoalDiff) {
          maxGoals = Math.max(Team1.Goals, Team2.Goals, Team3.Goals, Team4.Goals);
          console.log("maxGoals: "+ maxGoals);  
        }
      } */  
    }
    //Hochzählen von home1. Funktionen für die andren Werte analog
    this.incrementHome1 = () => {
      this.setState(state => ({ home1: state.home1 + 1 }));
      home1var = this.state.home1 + 1;
      compareGoals1();
      computeTable();
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
      compareGoals1();
      computeTable();
      this.setState(state => ({ statePointsT1: state.statePointsT1 = pointsTeam1}));
      this.setState(state => ({ statePointsT2: state.statePointsT2 = pointsTeam2}));
    };
    this.incrementAway1 = () => {
      this.setState(state => ({ away1: state.away1 + 1 }));
      away1var = this.state.away1 + 1;
      compareGoals1();
      computeTable();
      this.setState(state => ({ statePointsT1: state.statePointsT1 = pointsTeam1}));
      this.setState(state => ({ statePointsT2: state.statePointsT2 = pointsTeam2}));
    };
    this.decrementAway1 = () => {
      if (this.state.away1 > 0) {
        this.setState(state => ({ away1: state.away1 - 1 }));
        away1var = this.state.away1 - 1;
      } else {
        this.setState(state => ({ away1: (state.away1 = 0) }));
        away1var = 0;
      }
      compareGoals1();
      computeTable();
      this.setState(state => ({ statePointsT1: state.statePointsT1 = pointsTeam1}));
      this.setState(state => ({ statePointsT2: state.statePointsT2 = pointsTeam2}));
    };
    this.incrementHome2 = () => {
      this.setState(state => ({ home2: state.home2 + 1 }));
      home2var = this.state.home2 + 1;
      compareGoals2();
      computeTable();
      this.setState(state => ({ statePointsT3: state.statePointsT3 = pointsTeam3}));
      this.setState(state => ({ statePointsT4: state.statePointsT4 = pointsTeam4}));
    };
    this.decrementHome2 = () => {
      if (this.state.home2 > 0) {
        this.setState(state => ({ home2: state.home2 - 1 }));
        home2var = this.state.home2 - 1;
      } else {
        this.setState(state => ({ home2: (state.home2 = 0) }));
        home2var = 0;
      }
      compareGoals2();
      computeTable();
      this.setState(state => ({ statePointsT3: state.statePointsT3 = pointsTeam3}));
      this.setState(state => ({ statePointsT4: state.statePointsT4 = pointsTeam4}));
    };
    this.incrementAway2 = () => {
      this.setState(state => ({ away2: state.away2 + 1 }));
      away2var = this.state.away2 + 1;
      compareGoals2();
      computeTable();
      this.setState(state => ({ statePointsT3: state.statePointsT3 = pointsTeam3}));
      this.setState(state => ({ statePointsT4: state.statePointsT4 = pointsTeam4}));
    };
    this.decrementAway2 = () => {
      if (this.state.away2 > 0) {
        this.setState(state => ({ away2: state.away2 - 1 }));
        away2var = this.state.away2 - 1;
      } else {
        this.setState(state => ({ away2: (state.away2 = 0) }));
        away2var = 0;
      }
      compareGoals2();
      computeTable();
      this.setState(state => ({ statePointsT3: state.statePointsT3 = pointsTeam3}));
      this.setState(state => ({ statePointsT4: state.statePointsT4 = pointsTeam4}));
    };
    this.incrementHome3 = () => {
      this.setState(state => ({ home3: state.home3 + 1 }));
      home3var = this.state.home3 + 1;
      compareGoals3();
      computeTable();
      this.setState(state => ({ statePointsT1: state.statePointsT1 = pointsTeam1}));
      this.setState(state => ({ statePointsT3: state.statePointsT3 = pointsTeam3}));
    };
    this.decrementHome3 = () => {
      if (this.state.home3 > 0) {
        this.setState(state => ({ home3: state.home3 - 1 }));
        home3var = this.state.home3 - 1;
      } else {
        this.setState(state => ({ home3: (state.home3 = 0) }));
        home3var = 0;
      }
      compareGoals3();
      computeTable();
      this.setState(state => ({ statePointsT1: state.statePointsT1 = pointsTeam1}));
      this.setState(state => ({ statePointsT3: state.statePointsT3 = pointsTeam3}));
    };
    this.incrementAway3 = () => {
      this.setState(state => ({ away3: state.away3 + 1 }));
      away3var = this.state.away3 + 1;
      compareGoals3();
      computeTable();
      this.setState(state => ({ statePointsT1: state.statePointsT1 = pointsTeam1}));
      this.setState(state => ({ statePointsT3: state.statePointsT3 = pointsTeam3}));
    };
    this.decrementAway3 = () => {
      if (this.state.away3 > 0) {
        this.setState(state => ({ away3: state.away3 - 1 }));
        away3var = this.state.away3 - 1;
      } else {
        this.setState(state => ({ away3: (state.away3 = 0) }));
        away3var = 0;
      }
      compareGoals3();
      computeTable();
      this.setState(state => ({ statePointsT1: state.statePointsT1 = pointsTeam1}));
      this.setState(state => ({ statePointsT3: state.statePointsT3 = pointsTeam3}));
    };
    this.incrementHome4 = () => {
      this.setState(state => ({ home4: state.home4 + 1 }));
      home4var = this.state.home4 + 1;
      compareGoals4();
      computeTable();
      this.setState(state => ({ statePointsT2: state.statePointsT2 = pointsTeam2}));
      this.setState(state => ({ statePointsT4: state.statePointsT4 = pointsTeam4}));
    };
    this.decrementHome4 = () => {
      if (this.state.home4 > 0) {
        this.setState(state => ({ home4: state.home4 - 1 }));
        home4var = this.state.home4 - 1;
      } else {
        this.setState(state => ({ home4: (state.home4 = 0) }));
        home4var = 0;
      }
      compareGoals4();
      computeTable();
      this.setState(state => ({ statePointsT2: state.statePointsT2 = pointsTeam2}));
      this.setState(state => ({ statePointsT4: state.statePointsT4 = pointsTeam4}));
    };
    this.incrementAway4 = () => {
      this.setState(state => ({ away4: state.away4 + 1 }));
      away4var = this.state.away4 + 1;
      compareGoals4();
      computeTable();
      this.setState(state => ({ statePointsT2: state.statePointsT2 = pointsTeam2}));
      this.setState(state => ({ statePointsT4: state.statePointsT4 = pointsTeam4}));
    };
    this.decrementAway4 = () => {
      if (this.state.away4 > 0) {
        this.setState(state => ({ away4: state.away4 - 1 }));
        away4var = this.state.away4 - 1;
      } else {
        this.setState(state => ({ away4: (state.away4 = 0) }));
        away4var = 0;
      }
      compareGoals4();
      computeTable();
      this.setState(state => ({ statePointsT2: state.statePointsT2 = pointsTeam2}));
      this.setState(state => ({ statePointsT4: state.statePointsT4 = pointsTeam4}));
    };
    this.incrementHome5 = () => {
      this.setState(state => ({ home5: state.home5 + 1 }));
      home5var = this.state.home5 + 1;
      compareGoals5();
      computeTable();
      this.setState(state => ({ statePointsT1: state.statePointsT1 = pointsTeam1}));
      this.setState(state => ({ statePointsT4: state.statePointsT4 = pointsTeam4}));
    };
    this.decrementHome5 = () => {
      if (this.state.home5 > 0) {
        this.setState(state => ({ home5: state.home5 - 1 }));
        home5var = this.state.home5 - 1;
      } else {
        this.setState(state => ({ home5: (state.home5 = 0) }));
        home5var = 0;
      }
      compareGoals5();
      computeTable();
      this.setState(state => ({ statePointsT1: state.statePointsT1 = pointsTeam1}));
      this.setState(state => ({ statePointsT4: state.statePointsT4 = pointsTeam4}));
    };
    this.incrementAway5 = () => {
      this.setState(state => ({ away5: state.away5 + 1 }));
      away5var = this.state.away5 + 1;
      compareGoals5();
      computeTable();
      this.setState(state => ({ statePointsT1: state.statePointsT1 = pointsTeam1}));
      this.setState(state => ({ statePointsT4: state.statePointsT4 = pointsTeam4}));
    };
    this.decrementAway5 = () => {
      if (this.state.away5 > 0) {
        this.setState(state => ({ away5: state.away5 - 1 }));
        away5var = this.state.away5 - 1;
      } else {
        this.setState(state => ({ away5: (state.away5 = 0) }));
        away5var = 0;
      }
      compareGoals5();
      computeTable();
      this.setState(state => ({ statePointsT1: state.statePointsT1 = pointsTeam1}));
      this.setState(state => ({ statePointsT4: state.statePointsT4 = pointsTeam4}));
    };
    this.incrementHome6 = () => {
      this.setState(state => ({ home6: state.home6 + 1 }));
      home6var = this.state.home6 + 1;
      compareGoals6();
      computeTable();
      this.setState(state => ({ statePointsT2: state.statePointsT2 = pointsTeam2}));
      this.setState(state => ({ statePointsT3: state.statePointsT3 = pointsTeam3}));
    };
    this.decrementHome6 = () => {
      if (this.state.home6 > 0) {
        this.setState(state => ({ home6: state.home6 - 1 }));
        home6var = this.state.home6 - 1;
      } else {
        this.setState(state => ({ home6: (state.home6 = 0) }));
        home6var = 0;
      }
      compareGoals6();
      computeTable();
      this.setState(state => ({ statePointsT2: state.statePointsT2 = pointsTeam2}));
      this.setState(state => ({ statePointsT3: state.statePointsT3 = pointsTeam3}));
    };
    this.incrementAway6 = () => {
      this.setState(state => ({ away6: state.away6 + 1 }));
      away6var = this.state.away6 + 1;
      compareGoals6();
      computeTable();
      this.setState(state => ({ statePointsT2: state.statePointsT2 = pointsTeam2}));
      this.setState(state => ({ statePointsT3: state.statePointsT3 = pointsTeam3}));
    };
    this.decrementAway6 = () => {
      if (this.state.away6 > 0) {
        this.setState(state => ({ away6: state.away6 - 1 }));
        away6var = this.state.away6 - 1;
      } else {
        this.setState(state => ({ away6: (state.away6 = 0) }));
        away6var = 0;
      }
      compareGoals6();
      computeTable();
      this.setState(state => ({ statePointsT2: state.statePointsT2 = pointsTeam2}));
      this.setState(state => ({ statePointsT3: state.statePointsT3 = pointsTeam3}));
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
