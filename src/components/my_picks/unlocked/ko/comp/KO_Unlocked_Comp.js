import Regoin_Left_UP_Edit from "./regoin/Regoin_Left_UP_Edit";
import Regoin_Right_UP_Edit from "./regoin/Regoin_Right_UP_Edit";
import Finalist_Cont_UP_Edit from "./finalist/Finalist_Cont_UP_Edit";

const KO_Unlocked_Comp = ({ userPicks, resetMasterError }) => {
  return (
    <div className="ko-cont-edit">
      <div>
        <Regoin_Left_UP_Edit
          regoin={1}
          userPicks={userPicks}
          resetMasterError={resetMasterError}
        />
        <Regoin_Left_UP_Edit
          regoin={2}
          userPicks={userPicks}
          resetMasterError={resetMasterError}
        />
      </div>
      <Finalist_Cont_UP_Edit
        userPicks={userPicks}
        resetMasterError={resetMasterError}
      />
      <div>
        <Regoin_Right_UP_Edit
          regoin={3}
          userPicks={userPicks}
          resetMasterError={resetMasterError}
        />
        <Regoin_Right_UP_Edit
          regoin={4}
          userPicks={userPicks}
          resetMasterError={resetMasterError}
        />
      </div>
    </div>
  );
};

export default KO_Unlocked_Comp;
