import S_Game_L from "./games/S_Game_L";

const S_L = ({ side, selectedUser }) => {
  const nums = [1, 2];

  return (
    <div className="semis">
      <h2>Semis</h2>
      {nums.map((num, idx) => {
        const gameNum = side && side === "left" ? num : num + 2;

        return (
          <S_Game_L
            key={idx}
            game={`S${gameNum}`}
            gameNum={gameNum}
            selectedUser={selectedUser}
          />
        );
      })}
    </div>
  );
};

export default S_L;
