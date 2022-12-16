import Q_Game_UL from "./games/Q_Game_UL";

const Q_UL = ({
  side,
  selectedUser,
  setTeam,
  setChanged,
  setKoError,
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
  S1,
  S2,
  S3,
  S4,
  S1Changed,
  S2Changed,
  S3Changed,
  S4Changed,
  setS1Changed,
  setS2Changed,
  setS3Changed,
  setS4Changed,
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
            selectedUser={selectedUser}
            setTeam={setTeam}
            setChanged={setChanged}
            setKoError={setKoError}
            game={`Q${num}`}
            Q1={game}
            Q2={game}
            Q3={game}
            Q4={game}
            Q5={game}
            Q6={game}
            Q7={game}
            Q8={game}
            nextGame={`S${semiGames[gameNum]}`}
            setNextGame={`setS${semiGames[gameNum]}`}
            setS1={setS1}
            setS2={setS2}
            setS3={setS3}
            setS4={setS4}
            S1={S1}
            S2={S2}
            S3={S3}
            S4={S4}
            S1Changed={S1Changed}
            S2Changed={S2Changed}
            S3Changed={S3Changed}
            S4Changed={S4Changed}
            setS1Changed={setS1Changed}
            setS2Changed={setS2Changed}
            setS3Changed={setS3Changed}
            setS4Changed={setS4Changed}
          />
        );
      })}
    </div>
  );
};

export default Q_UL;
