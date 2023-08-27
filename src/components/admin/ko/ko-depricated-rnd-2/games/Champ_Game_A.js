import { useState, useEffect } from "react";
import { findChamp } from "../../../../store";

const Champ_Game_A = ({ results, teamAdjusted }) => {
  const [champ, setChamp] = useState(undefined);

  useEffect(() => {
    setChamp(findChamp(results));
  }, []);

  useEffect(() => {
    setChamp(findChamp(results));
  }, [teamAdjusted]);

  return (
    <div className="white-text">
      <div className="team-ko-img-cont champ-input ko-edit">
        {champ !== undefined && (
          <img className="team-flag-ko-champ-edit" src={champ.flag} />
        )}

        {champ !== undefined && (
          <p className="team-name-ko-edit-champ">{champ.name}</p>
        )}
      </div>
    </div>
  );
};

export default Champ_Game_A;
