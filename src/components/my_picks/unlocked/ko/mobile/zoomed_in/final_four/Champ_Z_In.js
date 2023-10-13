import KO_Box_Z_In from "../KO_Box_Z_In";

const Champ_Z_In = ({ user }) => {
  const usersPick = user.champ;

  return (
    <div>
      <KO_Box_Z_In team={usersPick} size="large" champ={true} />
    </div>
  );
};

export default Champ_Z_In;
