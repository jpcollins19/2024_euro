import Regoin_Left_UP_Edit from "./regoin/Regoin_Left_UP_Edit";
import Regoin_Right_UP_Edit from "./regoin/Regoin_Right_UP_Edit";
import Finalist_Cont_UP_Edit from "./finalist/Finalist_Cont_UP_Edit";

const KO_Cont_UP_Edit = ({ userPicks, setMasterError }) => {
  return (
    <div className="ko-cont-edit">
      <div>
        <Regoin_Left_UP_Edit
          regoin={1}
          userPicks={userPicks}
          setMasterError={setMasterError}
        />
        <Regoin_Left_UP_Edit
          regoin={2}
          userPicks={userPicks}
          setMasterError={setMasterError}
        />
      </div>
      <Finalist_Cont_UP_Edit
        userPicks={userPicks}
        setMasterError={setMasterError}
      />
      <div>
        <Regoin_Right_UP_Edit
          regoin={3}
          userPicks={userPicks}
          setMasterError={setMasterError}
        />
        <Regoin_Right_UP_Edit
          regoin={4}
          userPicks={userPicks}
          setMasterError={setMasterError}
        />
      </div>
    </div>
  );
};

export default KO_Cont_UP_Edit;