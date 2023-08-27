import S_Game_A from "../games/S_Game_A";

const S_Column_A = ({ side, results, adjustResults, teamAdjusted }) => {
  const nums = [1, 2];

  return (
    <div>
      <h2>Semis</h2>
      {nums.map((num, idx) => {
        const gameNum = side === "left" ? num : num + 2;
        const game = `Q${gameNum}`;

        return (
          <S_Game_A
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

export default S_Column_A;
