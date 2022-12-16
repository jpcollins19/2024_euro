import R16_Game_L from "./games/R16_Game_L";

const R16_L = ({ side }) => {
  const nums = [1, 2, 3, 4];

  return (
    <div className="R16">
      <h2>Round of 16</h2>
      {nums.map((num, idx) => {
        const gameNum = side && side === "left" ? num : num + 4;

        return <R16_Game_L key={idx} game={`Q${gameNum}`} />;
      })}
    </div>
  );
};

export default R16_L;
