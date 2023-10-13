import KO_Box from "../KO_Box";

const Champ = ({ user }) => {
  const userHasSelection = user.champ;

  return (
    <div className="champ-mobile-z-out">
      <KO_Box size="large-m" userHasSelection={userHasSelection} />
    </div>
  );
};

export default Champ;
