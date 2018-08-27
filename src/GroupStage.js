import React from "react";
import { groupsAD, teams, round16 } from "./database";
import { Match } from "./Match";
//import { KOStage } from "./KOStage";
import { compareGoals } from "./compareGoals";

export class GroupPhase extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      matchScoresAD: groupsAD.map(group => {
        return {
          name: group.name,
          matches: group.matches.map(match => {
            return {
              id: match.name,
              home: {
                team: teams.find(team => team.id === match.home_team),
                score: 0
              },
              away: {
                team: teams.find(team => team.id === match.away_team),
                score: 0
              }
            };
          })
        };
      }),
      matchScoresAF: round16.map(round16 => {
        return {
          name: round16.name,
          matches: round16.matches.map(match => {
            return {
              id: match.name,
              home: {
                team: teams.find(team => team.id === match.home_team),
                score: 0
              },
              away: {
                team: teams.find(team => team.id === match.away_team),
                score: 0
              }
            };
          })
        };
      }),
      /*matchScoresVF: quartelfinal.map(quartelfinal => {
        return {
          name: quartelfinal.name,
          matches: quartelfinal.matches.map(match => {
            return {
              id: match.name,
              home: {
                team: teams.find(team => team.id === match.home_team),
                score: 0
              },
              away: {
                team: teams.find(team => team.id === match.away_team),
                score: 0
              }
            };
          })
        };
      }),
      matchScoresHF: semifinal.map(semifinal => {
        return {
          name: semifinal.name,
          matches: semifinal.matches.map(match => {
            return {
              id: match.name,
              home: {
                team: teams.find(team => team.id === match.home_team),
                score: 0
              },
              away: {
                team: teams.find(team => team.id === match.away_team),
                score: 0
              }
            };
          })
        };
      })*/
    };
  }

  updateMatchScore = scoreUpdater => ({ groupName, matchId, home }) => () => {
    this.setState(state => {
      return {
        matchScoresAD: state.matchScoresAD.map(group => {
          if (groupName === group.name) {
            return {
              ...group,
              matches: group.matches.map(match => {
                if (matchId === match.id) {
                  return {
                    ...match,
                    [home ? "home" : "away"]: home
                      ? {
                          team: match.home.team,
                          score: Math.max(scoreUpdater(match.home.score), 0),
                        }
                      : {
                          team: match.away.team,
                          score: Math.max(scoreUpdater(match.away.score), 0),
                        }
                  };
                } else {
                  return match;
                }
              })
            };
          } else {
            return group;
          }
        }),
        matchScoresAF: state.matchScoresAF.map(round16 => {
          if (groupName === round16.name) {
            return {
              ...round16,
              matches: round16.matches.map(match => {
                if (matchId === match.id) {
                  return {
                    ...match,
                    [home ? "home" : "away"]: home
                      ? {
                          team: match.home.team,
                          score: Math.max(scoreUpdater(match.home.score), 0),                          
                          points: compareGoals(match.home.score, match.away.score) //Überhaupt aufgerufen?!
                        }
                      : {
                          team: match.away.team,
                          score: Math.max(scoreUpdater(match.away.score), 0),                          
                          points: compareGoals(match.home.score, match.away.score) //Überhaupt aufgerufen?!
                        }
                  };
                } else {
                  return match;
                }
              })
            };
          } else {
            return round16;
          }
        })
      };
    });
    //var pointsAD = compareGoals(this.state.matchScoresAD[0].matches[0].home.score, this.state.matchScoresAD[0].matches[0].away.score);
    //console.log(pointsAD);
  };

  increaseMatchScore = this.updateMatchScore(score => score + 1);
  decreaseMatchScore = this.updateMatchScore(score => score - 1);

  render() {  
    const { matchScoresAD, matchScoresAF } = this.state;
    console.log(matchScoresAD);
    //var pointsRussia = [this.state.matchScoresAD[0].matches[0].home.score, this.state.matchScoresAD[0].matches[2].home.score, this.state.matchScoresAD[0].matches[4].home.score];
    //console.log(pointsRussia);
    //var pointsAD = compareGoals(this.state.matchScoresAD[0].matches[0].home.score, this.state.matchScoresAD[0].matches[0].away.score);

    return (
      <div className="tournament">
        <div className="groupStage">
          <div className="headGroupStage">
            <h3>Gruppenphase</h3>
          </div>
          {matchScoresAD.map(group => {
            return (
              <div className="groupAD" key={group.name}>
                <b>{group.name}</b>
                <div>
                  {group.matches.map(match => (
                    <Match
                      home={match.home}
                      away={match.away}
                      increaseHome={this.increaseMatchScore({
                        groupName: group.name,
                        matchId: match.id,
                        home: true
                      })}
                      increaseAway={this.increaseMatchScore({
                        groupName: group.name,
                        matchId: match.id,
                        home: false
                      })}
                      decreaseHome={this.decreaseMatchScore({
                        groupName: group.name,
                        matchId: match.id,
                        home: true
                      })}
                      decreaseAway={this.decreaseMatchScore({
                        groupName: group.name,
                        matchId: match.id,
                        home: false
                      })}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="stage">
          <h3>Achtelfinale</h3>
          {/*<KOStage*/}
          {matchScoresAF.map(round16 => {
            return (
              <div className="r16" key={round16.name}>
                {round16.matches.map(match => (
                  <Match
                    home={match.home}
                    away={match.away}
                    increaseHome={this.increaseMatchScore({
                      groupName: round16.name,
                      matchId: match.id,
                      home: true
                    })}
                    increaseAway={this.increaseMatchScore({
                      groupName: round16.name,
                      matchId: match.id,
                      home: false
                    })}
                    decreaseHome={this.decreaseMatchScore({
                      groupName: round16.name,
                      matchId: match.id,
                      home: true
                    })}
                    decreaseAway={this.decreaseMatchScore({
                      groupName: round16.name,
                      matchId: match.id,
                      home: false
                    })}
                  />
                ))}
              </div>
            );
          })}
          {/*/>*/}
        </div>
      </div>
    );
  }
}
