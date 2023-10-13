import KO_Box from "../KO_Box";

const Finals = ({ user, game }) => {
  const userHasSelection = user[`F${game}`];

  return (
    <div className="finals-mobile-z-out">
      <KO_Box size="medium-m" userHasSelection={userHasSelection} />
    </div>
  );
};

export default Finals;
