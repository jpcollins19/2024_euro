import Q_Game_UL from "./games/Q_Game_UL";

const Q_UL = ({
  side,
  setTeam,
  resetMasterError,
  Q1,
  Q2,
  Q3,
  Q4,
  Q5,
  Q6,
  Q7,
  Q8,
  setS1,
  setS2,
  setS3,
  setS4,
}) => {
  const nums = [1, 2, 3, 4];

  return (
    <div className="quarters-edit">
      <h2>Quarters</h2>
      {nums.map((num, idx) => {
        const gameNum = side === "left" ? num : num + 4;
        const game = eval(`Q${gameNum}`);

        const semiGames = {
          1: 1,
          2: 1,
          3: 2,
          4: 2,
          5: 3,
          6: 3,
          7: 4,
          8: 4,
        };

        return (
          <Q_Game_UL
            key={idx}
            gameNum={gameNum}
            setTeam={setTeam}
            resetMasterError={resetMasterError}
            game={`Q${num}`}
            Q1={game}
            Q2={game}
            Q3={game}
            Q4={game}
            Q5={game}
            Q6={game}
            Q7={game}
            Q8={game}
            setNextGame={`setS${semiGames[gameNum]}`}
            setS1={setS1}
            setS2={setS2}
            setS3={setS3}
            setS4={setS4}
          />
        );
      })}
    </div>
  );
};

export default Q_UL;
