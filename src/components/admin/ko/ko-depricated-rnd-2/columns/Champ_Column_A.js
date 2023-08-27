import Champ_Game_A from "../games/Champ_Game_A";

const Champ_Column_A = ({ results, teamAdjusted }) => {
  return (
    <div className="champ-edit">
      <h2>Champion</h2>
      <Champ_Game_A results={results} teamAdjusted={teamAdjusted} />
    </div>
  );
};

export default Champ_Column_A;
