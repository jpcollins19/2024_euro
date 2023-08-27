import F_Game_A from "../games/F_Game_A";

const F_Column_A = ({ side, results, adjustResults, teamAdjusted }) => {
  const game = side === "left" ? "S1" : "S2";

  return (
    <div>
      <h2>Final</h2>
      <F_Game_A
        results={results}
        adjustResults={adjustResults}
        teamAdjusted={teamAdjusted}
        game={game}
      />
    </div>
  );
};

export default F_Column_A;
