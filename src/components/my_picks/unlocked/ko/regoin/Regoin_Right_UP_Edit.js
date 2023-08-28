import R16_Column_UP_Edit from "./R16_Column_UP_Edit";
import R8_Column_UP_Edit from "./R8_Column_UP_Edit";
import R4_Column_UP_Edit from "./R4_Column_UP_Edit";

const Regoin_Right_UP_Edit = ({ regoin, userPicks, setMasterError }) => {
  return (
    <div className="regoin-cont-c">
      <R4_Column_UP_Edit
        side="right"
        regoin={regoin}
        userPicks={userPicks}
        setMasterError={setMasterError}
      />
      <R8_Column_UP_Edit
        side="right"
        regoin={regoin}
        userPicks={userPicks}
        setMasterError={setMasterError}
      />
      <R16_Column_UP_Edit
        side="right"
        regoin={regoin}
        userPicks={userPicks}
        setMasterError={setMasterError}
      />
    </div>
  );
};

export default Regoin_Right_UP_Edit;
