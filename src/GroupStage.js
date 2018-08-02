import React from "react";
import { groupsAD, groupsEH, teams } from "./database";
import { Match } from "./Match";

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
      matchScoresEH: groupsEH.map(group => {
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
      })
    };
  }

  updateMatchScore = scoreUpdater => ({ groupName, matchId, home }) => () => {
    this.setState(state => {
      return {
        matchScores: state.matchScores.map(group => {
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
                          score: Math.max(scoreUpdater(match.home.score), 0)
                        }
                      : {
                          team: match.away.team,
                          score: Math.max(scoreUpdater(match.away.score), 0)
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
        })
      };
    });
  };

  increaseMatchScore = this.updateMatchScore(score => score + 1);
  decreaseMatchScore = this.updateMatchScore(score => score - 1);

  render() {
    const { matchScoresAD, matchScoresEH } = this.state;
    return (
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
        {matchScoresEH.map(group => {
          return (
            <div className="groupEH" key={group.name}>
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
    );
  }
}