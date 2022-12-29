import { useEffect } from "react";
import { useSelector } from "react-redux";

const F_Game_UL = ({
  setTeam,
  // setChanged,
  setKoError,
  game,
  F1,
  F2,
  currentFinalTeamSet,
  CurrentSTeams,
  // champ,
  setChamp,
  // champChanged,
  // setChampChanged,
}) => {
  // const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const gameVarTeamObj = teams.find((team) => team.name === eval(game));

  const teamAnswer =
    gameVarTeamObj?.name && CurrentSTeams.includes(gameVarTeamObj?.name)
      ? gameVarTeamObj?.name
      : "";

  const teamAnswerObj = teams.find((team) => team.name === teamAnswer);

  useEffect(() => {
    teamAnswer === "" && setTeam(currentFinalTeamSet, "");
  }, [teamAnswer]);

  // useEffect(() => {
  //   champ.length < 1 &&
  //     !champChanged &&
  //     user.knockChamp &&
  //     setTeam(setChamp, user.knockChamp);
  //   setChanged(setChampChanged);
  // });

  return (
    <div className="FUL">
      <div
        className={`team-ko-img-cont reg-input ko-edit${
          gameVarTeamObj == undefined ? "-red" : ""
        }`}
        onClick={() => {
          setTeam(setChamp, teamAnswerObj?.name);
          setKoError(false);
        }}
      >
        {teamAnswer.length ? (
          <div>
            <img className="team-flag-ko" src={teamAnswerObj.flag} />
            <p className="team-name-ko-edit">{teamAnswerObj.name}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default F_Game_UL;
