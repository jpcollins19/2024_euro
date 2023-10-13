import KO_Box from "../KO_Box";

const Final_Four = ({ user, side }) => {
  const game1Regoin = side === "left" ? 1 : 3;
  const game2Regoin = side === "left" ? 2 : 4;

  const userHasSelection_game1 = user[`S${game1Regoin}`];
  const userHasSelection_game2 = user[`S${game2Regoin}`];

  return (
    <div>
      <KO_Box size="medium-small-m" userHasSelection={userHasSelection_game1} />
      <KO_Box size="medium-small-m" userHasSelection={userHasSelection_game2} />
    </div>
  );
};

export default Final_Four;
