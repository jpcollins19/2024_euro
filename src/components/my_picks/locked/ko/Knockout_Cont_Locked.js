import R16_L from "./R16_L";
import Q_L from "./Q_L";
import S_L from "./S_L";
import F_L from "./F_L";
import Champ_L from "./Champ_L";

const Knockout_Cont_Locked = ({ selectedUser, user }) => {
  return (
    <div className="knockout-cont">
      <div>
        <R16_L side={"left"} />
        {/* <Q_L side={"left"} selectedUser={selectedUser} user={user} />
        <S_L side={"left"} selectedUser={selectedUser} user={user} />
        <F_L side={"left"} selectedUser={selectedUser} user={user} />
        <Champ_L selectedUser={selectedUser} user={user} />
        <F_L side={"right"} selectedUser={selectedUser} user={user} />
        <S_L side={"right"} selectedUser={selectedUser} user={user} />
        <Q_L side={"right"} selectedUser={selectedUser} user={user} /> */}
        <R16_L side={"right"} />
      </div>
    </div>
  );
};

export default Knockout_Cont_Locked;
