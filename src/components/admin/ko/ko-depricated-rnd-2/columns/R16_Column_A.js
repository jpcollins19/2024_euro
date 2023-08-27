import R16_Game_A from "../games/R16_Game_A";

const R16_Column_A = ({ side, results, adjustResults }) => {
  const nums = [1, 2, 3, 4];

  return (
    <div>
      <h2>Round of 16</h2>
      {nums.map((num, idx) => {
        return (
          <R16_Game_A
            key={idx}
            game={`R16_${side === "left" ? num : num + 4}`}
            results={results}
            adjustResults={adjustResults}
          />
        );
      })}
    </div>
  );
};

export default R16_Column_A;
