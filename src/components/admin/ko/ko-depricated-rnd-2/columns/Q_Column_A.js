import Q_Game_A from "../games/Q_Game_A";

const Q_Column_A = ({ side, results, adjustResults, teamAdjusted }) => {
  const nums = [1, 2, 3, 4];

  return (
    <div className="quarters-edit">
      <h2>Quarters</h2>
      {nums.map((num, idx) => {
        const gameNum = side === "left" ? num : num + 4;
        const game = `R16_${gameNum}`;

        return (
          <Q_Game_A
            key={idx}
            results={results}
            adjustResults={adjustResults}
            teamAdjusted={teamAdjusted}
            gameNum={gameNum}
            game={game}
          />
        );
      })}
    </div>
  );
};

export default Q_Column_A;
