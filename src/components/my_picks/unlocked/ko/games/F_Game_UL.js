import { useEffect } from "react";
import { useSelector } from "react-redux";

const F_Game_UL = ({
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
  const user = useSelector((state) => state.auth);

  const gameVar = eval(game);
  const teamAnswer = gameVar && CurrentSTeams.includes(gameVar) ? gameVar : "";

  useEffect(() => {
    teamAnswer === "" && setTeam(currentFinalTeamSet, "");
  }, [teamAnswer]);

  useEffect(() => {
    champ.length < 1 &&
      !champChanged &&
      user.knockChamp &&
      setTeam(setChamp, user.knockChamp);
    setChanged(setChampChanged);
  });

  return (
    <div className="FUL">
      <input
        className={`reg-input ${teamAnswer.length > 1 ? "" : "ko-edit-red"}`}
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
