/**
* calculates the score from the result of a game
* @param {number} home goals shot by home team
* @param {number} away goals shot by away team
* @returns {{scoreAway: number, scoreHome: number}}
*/

//compareGoals überprüft, welches Team wie viele Punkte erhält
export function compareGoals(home, away) {
  if (home > away) {
      return { scoreHome: 3, scoreAway: 0 };
  } else if (home === away) {
      return { scoreHome: 1, scoreAway: 1 };    
  } else if (home < away) {
      return { scoreHome: 0, scoreAway: 3 };    
  }
}
/*export function compareGoals2(home2var, away2var, pointsTeam3Game1, pointsTeam4Game1) {
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
  return { pointsTeam3Game1, pointsTeam4Game1 };
}
export function compareGoals3(home3var, away3var, pointsTeam1Game2, pointsTeam3Game2) {
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
  return { pointsTeam1Game2, pointsTeam3Game2 };
}
export function compareGoals4(home4var, away4var, pointsTeam2Game2, pointsTeam4Game2) {
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
  return { pointsTeam2Game2, pointsTeam4Game2 };
}
export function compareGoals5(home5var, away5var, pointsTeam1Game3, pointsTeam4Game3) {
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
  return { pointsTeam1Game3, pointsTeam4Game3 };
}
export function compareGoals6(home6var, away6var, pointsTeam2Game3, pointsTeam3Game3) {
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
  return { pointsTeam2Game3, pointsTeam3Game3 };
}*/
