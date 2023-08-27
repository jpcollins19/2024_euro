import R16_L from "./R16_L";
import Q_L from "./Q_L";
import S_L from "./S_L";
import F_L from "./F_L";
import Champ_L from "./Champ_L";

const KO_Locked_Comp = ({ user }) => {
  return (
    <div className="knockout-cont">
      <div>
        <R16_L side={"left"} user={user} />
        <Q_L side={"left"} user={user} />
        <S_L side={"left"} user={user} />
        <F_L side={"left"} user={user} />
        <Champ_L user={user} />
        <F_L side={"right"} user={user} />
        <S_L side={"right"} user={user} />
        <Q_L side={"right"} user={user} />
        <R16_L side={"right"} user={user} />
      </div>
    </div>
  );
};

export default KO_Locked_Comp;
