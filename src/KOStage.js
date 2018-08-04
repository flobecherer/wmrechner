import React from "react";
import { teams, round16 } from "./database";
import { Match } from "./Match";

export class KOStage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      matchScoresAF: round16.map(round16 => {
        return {
          matches: round16.map(match => {
            return {
              id: match.name,
              // TODO: SiegerTeam finden
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
            return round16;
          }
        })
      };
    });
  };

  increaseMatchScore = this.updateMatchScore(score => score + 1);
  decreaseMatchScore = this.updateMatchScore(score => score - 1);

  render() {
    const { matchScoresAF } = this.state;
    return (
      <div className="stage">
        <b>Achtelfinale</b>
        {matchScoresAF.map(round16 => {
          return (
            <div className="r16" key={round16.name}>
              <div>
                {round16.matches.map(match => (
                  <Match
                    home={match.home}
                    away={match.away}
                    increaseHome={this.increaseMatchScore({
                      name: round16.name,
                      matchId: match.id,
                      home: true
                    })}
                    increaseAway={this.increaseMatchScore({
                      name: round16.name,
                      matchId: match.id,
                      home: false
                    })}
                    decreaseHome={this.decreaseMatchScore({
                      name: round16.name,
                      matchId: match.id,
                      home: true
                    })}
                    decreaseAway={this.decreaseMatchScore({
                      name: round16.name,
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
