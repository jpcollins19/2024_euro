import { useEffect } from "react";

const Champ_Game_UL = ({ champ, setChamp, CurrentFTeams }) => {
  const teamAnswer = champ && CurrentFTeams.includes(champ) ? champ : "";

  useEffect(() => {
    teamAnswer === "" && setChamp("");
  }, [teamAnswer]);

  return (
    <div className="white-text">
      <input
        className={`champ-input ${
          champ && champ.length > 1 ? "" : "ko-edit-red"
        }`}
        readOnly="readonly"
        defaultValue={champ && champ}
      ></input>
    </div>
  );
};

export default Champ_Game_UL;
