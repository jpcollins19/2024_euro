import { useState, useEffect } from "react";

const Q_Game_A = ({ results, adjustResults, teamAdjusted, gameNum, game }) => {
  const [teamThatAdvanced, setTeamThatAdvanced] = useState(
    results[game].find((team) => team.advanceToQ)
  );

  useEffect(() => {
    setTeamThatAdvanced(results[game].find((team) => team.advanceToQ));
  }, [teamAdjusted]);

  let gameClass;

  switch (gameNum) {
    case 1:
      gameClass = "Q1UL";
      break;
    case 5:
      gameClass = "Q1UL";
      break;
    case 2:
      gameClass = "Q2UL";
      break;
    case 6:
      gameClass = "Q2UL";
      break;
    case 3:
      gameClass = "Q3UL";
      break;
    case 7:
      gameClass = "Q3UL";
      break;
    case 4:
      gameClass = "Q4UL";
      break;
    case 8:
      gameClass = "Q4UL";
      break;
    default:
      break;
  }

  return (
    <div className={gameClass}>
      <div
        className="team-ko-img-cont reg-input ko-edit"
        onClick={() => {
          adjustResults({ game, round: "Q", gameNum });
        }}
      >
        {teamThatAdvanced !== undefined && (
          <img className="team-flag-ko" src={teamThatAdvanced.flag} />
        )}

        {teamThatAdvanced !== undefined && (
          <p className="team-name-ko-edit">{teamThatAdvanced.name}</p>
        )}
      </div>
    </div>
  );
};

export default Q_Game_A;
