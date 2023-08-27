import Champ_Game_L from "./games/Champ_Game_L";

const Champ_L = ({ user }) => {
  return (
    <div className="champ">
      <h2>Champion</h2>
      <Champ_Game_L user={user} />
      <div className="trophy"></div>
    </div>
  );
};

export default Champ_L;
