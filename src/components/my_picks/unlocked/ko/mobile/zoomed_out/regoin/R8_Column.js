import KO_Box from "../KO_Box";

const R8_Column = ({ regoin, user }) => {
  const userHasSelection = user[`S${regoin}`];

  return (
    <div>
      <KO_Box size="small-m" userHasSelection={userHasSelection} />
    </div>
  );
};

export default R8_Column;
