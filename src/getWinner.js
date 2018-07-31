/**
* calculates the score from the result of a game
* @param {object} allPoints points of team 1
* @returns {{A: string, B: string, C: string, D: string, E: string, F: string, G: string, H: string}}
*/

var winnerA;
var winnerB;
var winnerC;
var winnerD;
var winnerE;
var winnerF;
var winnerG;
var winnerH;

export function getWinner(allPoints) {
  if (allPoints.groupwinner === "Team1") {
    winnerA = "Russland";
    winnerB = "Portugal";
    winnerC = "Frankreich";
    winnerD = "Argentinien";
    winnerE = "Brasilien";
    winnerF = "Deutschland";
    winnerG = "Belgien";
    winnerH = "Polen";
  } else if (allPoints.groupwinner === "Team2") {
    winnerA = "Saudi-Arabien";
    winnerB = "Spanien";
    winnerC = "Australien";
    winnerD = "Island";
    winnerE = "Schweiz";
    winnerF = "Mexiko";
    winnerG = "Panama";
    winnerH = "Senegal";
  } else if (allPoints.groupwinner === "Team3") {
    winnerA = "Ägypten";
    winnerB = "Marokko";
    winnerC = "Peru";
    winnerD = "Kroatien";
    winnerE = "Costa Rica";
    winnerF = "Schweden";
    winnerG = "Tunesien";
    winnerH = "Kolumbien";
  } else if (allPoints.groupwinner === "Team4") {
    winnerA = "Uruguay";
    winnerB = "Iran";
    winnerC = "Dänemark";
    winnerD = "Nigeria";
    winnerE = "Serbien";
    winnerF = "Südkorea";
    winnerG = "England";
    winnerH = "Japan";
  }
  return({ A: winnerA, B: winnerB, C: winnerC, D: winnerD, E: winnerE, F: winnerF, G: winnerG, H: winnerH })
}
