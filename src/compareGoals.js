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
//compareGoalsX überprüft für Spiel X, welches Team wie viele Punkte erhält
export function compareGoals1(
  home1var,
  away1var,
  pointsTeam1Game1,
  pointsTeam2Game1
) {
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
  return { pointsTeam1Game1, pointsTeam2Game1 };
}
export function compareGoals2(
  home2var,
  away2var,
  pointsTeam3Game1,
  pointsTeam4Game1
) {
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
export function compareGoals3(
  home3var,
  away3var,
  pointsTeam1Game2,
  pointsTeam3Game2
) {
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
export function compareGoals4(
  home4var,
  away4var,
  pointsTeam2Game2,
  pointsTeam4Game2
) {
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
export function compareGoals5(
  home5var,
  away5var,
  pointsTeam1Game3,
  pointsTeam4Game3
) {
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
export function compareGoals6(
  home6var,
  away6var,
  pointsTeam2Game3,
  pointsTeam3Game3
) {
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
}
