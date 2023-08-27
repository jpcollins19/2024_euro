import { useState, useEffect } from "react";
import { findSemisTeam } from "../../../../store";

const S_Game_A = ({ results, adjustResults, teamAdjusted, gameNum, game }) => {
  const [teamThatAdvanced, setTeamThatAdvanced] = useState(undefined);

  useEffect(() => {
    setTeamThatAdvanced(findSemisTeam(results, game));
  }, []);

  useEffect(() => {
    setTeamThatAdvanced(findSemisTeam(results, game));
  }, [teamAdjusted]);

  let gameClass;

  switch (gameNum % 2) {
    case 1:
      gameClass = "S1UL";
      break;
    case 0:
      gameClass = "S2UL";
      break;
    default:
      break;
  }

  return (
    <div className={gameClass}>
      <div
        className="team-ko-img-cont reg-input ko-edit"
        onClick={() => {
          adjustResults({ game, round: "S", gameNum });
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

export default S_Game_A;
