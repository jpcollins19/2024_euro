import { useState, useEffect } from "react";
import { findFinalsTeam } from "../../../../store";

const F_Game_A = ({ results, adjustResults, teamAdjusted, game }) => {
  const [teamThatAdvanced, setTeamThatAdvanced] = useState(undefined);

  useEffect(() => {
    setTeamThatAdvanced(findFinalsTeam(results, game));
  }, []);

  useEffect(() => {
    setTeamThatAdvanced(findFinalsTeam(results, game));
  }, [teamAdjusted]);

  return (
    <div className="FUL">
      <div
        className="team-ko-img-cont reg-input ko-edit"
        onClick={() => {
          adjustResults({ game, round: "F", game });
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

export default F_Game_A;
