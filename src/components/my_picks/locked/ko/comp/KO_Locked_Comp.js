import Regoin_Left_C from "./regoin/Regoin_Left_C";
import Regoin_Right_C from "./regoin/Regoin_Right_C";
import Finalist_Cont from "./finalist/Finalist_Cont";

const KO_Locked_Comp = ({ user }) => {
  return (
    <div className="knockout-cont">
      <div>
        <Regoin_Left_C regoin={1} user={user} />
        <Regoin_Left_C regoin={2} user={user} />
      </div>
      <Finalist_Cont user={user} />
      <div>
        <Regoin_Right_C regoin={3} user={user} />
        <Regoin_Right_C regoin={4} user={user} />
      </div>
    </div>
  );
};

export default KO_Locked_Comp;
