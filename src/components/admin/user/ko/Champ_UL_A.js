import Champ_Game_UL_A from "./games/Champ_Game_UL_A";

const Champ_UL_A = ({ champ, setChamp, F1, F2 }) => {
  return (
    <div className="champ-edit">
      <h2>Champion</h2>
      <Champ_Game_UL_A
        champ={champ}
        setChamp={setChamp}
        CurrentFTeams={[F1, F2]}
      />
    </div>
  );
};

export default Champ_UL_A;
