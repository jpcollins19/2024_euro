import KO_Box_Z_In from "../KO_Box_Z_In";

const Finals_Z_In = ({ side, user }) => {
  const gameNum = side === "left" ? 1 : 2;

  const usersPick = user[`F${gameNum}`];

  return <KO_Box_Z_In size="medium" team={usersPick} />;
};

export default Finals_Z_In;
