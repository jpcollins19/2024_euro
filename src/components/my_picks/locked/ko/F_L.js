import F_Game_L from "./games/F_Game_L";

const F_L = ({ side, selectedUser }) => {
  const gameNum = side && side === "left" ? 1 : 2;

  return (
    <div className="final">
      <h2>Final</h2>
      <F_Game_L game={`F${gameNum}`} selectedUser={selectedUser} />
    </div>
  );
};

export default F_L;
