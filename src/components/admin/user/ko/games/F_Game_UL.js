import { useEffect } from "react";

const F_Game_UL = ({
  selectedUser,
  setTeam,
  setChanged,
  setKoError,
  game,
  F1,
  F2,
  currentFinalTeamSet,
  CurrentSTeams,
  champ,
  setChamp,
  champChanged,
  setChampChanged,
}) => {
  const gameVar = eval(game);
  const teamAnswer = gameVar && CurrentSTeams.includes(gameVar) ? gameVar : "";

  useEffect(() => {
    teamAnswer === "" && setTeam(currentFinalTeamSet, "");
  }, [teamAnswer]);

  useEffect(() => {
    champ &&
      champ.length < 1 &&
      !champChanged &&
      selectedUser.knockChamp &&
      setTeam(setChamp, selectedUser.knockChamp);
    setChanged(setChampChanged);
  });

  return (
    <div className="FUL">
      <input
        className={`reg-input ${
          teamAnswer && teamAnswer.length > 1 ? "" : "ko-edit-red"
        }`}
        readOnly="readonly"
        defaultValue={teamAnswer && teamAnswer}
        onClick={(ev) => {
          setTeam(setChamp, ev.target.value);
          setKoError(false);
        }}
      ></input>
    </div>
  );
};

export default F_Game_UL;
