var pointsTeam1 = 3;
var pointsTeam2 = 3;
var pointsTeam3 = 3;
var pointsTeam4 = 3;
var groupWinner = 0;
var maximumPoints = 0;
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
//var groupSecond = 0;
//var secondMaxPoints = 0;
//var maxGoalDiff = 0;
//var secondMaxGoalDiff = 0;
//var maxGoals = 0;

//Berechnung der Summe der Punkte aus den drei Spielen pro Team
export function computeTable(
  pointsTeam1Game1,
  pointsTeam1Game2,
  pointsTeam1Game3,
  pointsTeam2Game1,
  pointsTeam2Game2,
  pointsTeam2Game3,
  pointsTeam3Game1,
  pointsTeam3Game2,
  pointsTeam3Game3,
  pointsTeam4Game1,
  pointsTeam4Game2,
  pointsTeam4Game3) {
  //console.log("pointsT1G1: " + pointsTeam1Game1);
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
  maximumPoints = Math.max(
    pointsTeam1,
    pointsTeam2,
    pointsTeam3,
    pointsTeam4
  );
  //Bestimmung des Gruppensiegers (states für verschiedene Gruppen fehlen noch)
  if (maximumPoints === pointsTeam1) {
    groupWinner = "Russland";
  } else if (maximumPoints === pointsTeam2) {
    groupWinner = "Saudi-Arabien";
  } else if (maximumPoints === pointsTeam3) {
    groupWinner = "Ägypten";
  } else if (maximumPoints === pointsTeam4) {
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
