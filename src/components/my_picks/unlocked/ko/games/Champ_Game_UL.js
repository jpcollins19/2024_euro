import { useEffect } from "react";
import { useSelector } from "react-redux";

const Champ_Game_UL = ({ champ, setChamp, CurrentFTeams }) => {
  const teams = useSelector((state) => state.teams);

  const gameVarTeamObj = teams.find((team) => team.name === champ);

  const teamAnswer =
    gameVarTeamObj?.name && CurrentFTeams.includes(gameVarTeamObj?.name)
      ? gameVarTeamObj?.name
      : "";

  const teamAnswerObj = teams.find((team) => team.name === teamAnswer);

  useEffect(() => {
    teamAnswer === "" && setChamp("");
  }, [teamAnswer]);

  return (
    <div className="white-text">
      <div
        className={`team-ko-img-cont champ-input ko-edit${
          gameVarTeamObj == undefined ? "-red" : ""
        }`}
      >
        {teamAnswer.length ? (
          <div>
            <img className="team-flag-ko-champ-edit" src={teamAnswerObj.flag} />
            <p className="team-name-ko-edit-champ">{teamAnswerObj.name}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Champ_Game_UL;
