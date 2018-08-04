import React from "react";

const Team = ({ name, flag, goals }) => {
  return (
    <div>
      <img style={{ width: 20 }} src={flag} />
      <span>
        {name} {goals}
      </span>
    </div>
  );
};

export const Match = ({
  home,
  away,
  increaseHome,
  increaseAway,
  decreaseHome,
  decreaseAway
}) => {
  return (
    <div className="roundrobin">
      <button onClick={increaseHome}>+</button>
      <button onClick={increaseAway}>+</button>
      <Team name={home.team.name} flag={home.team.flag} goals={home.score} />
      <Team name={away.team.name} flag={away.team.flag} goals={away.score} />
      <button onClick={decreaseHome}>-</button>
      <button onClick={decreaseAway}>-</button>
    </div>
  );
};
