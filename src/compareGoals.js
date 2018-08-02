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

export function compareGoalsKO(home, away) {
  if (home > away) {
      return { winner: "Team1" };   
  } else if (home < away) {
      return { winner: "Team2" };    
  } else {
    return { winner: "-"};
  }
}
