import R16_Column_UP_Edit from "./R16_Column_UP_Edit";
import R8_Column_UP_Edit from "./R8_Column_UP_Edit";
import R4_Column_UP_Edit from "./R4_Column_UP_Edit";

const Regoin_Left_UP_Edit = ({ regoin, userPicks, resetMasterError }) => {
  const side = "left";

  return (
    <div className="regoin-cont-c">
      <R16_Column_UP_Edit
        side={side}
        regoin={regoin}
        userPicks={userPicks}
        resetMasterError={resetMasterError}
      />
      <R8_Column_UP_Edit
        side={side}
        regoin={regoin}
        userPicks={userPicks}
        resetMasterError={resetMasterError}
      />
      <R4_Column_UP_Edit
        side={side}
        regoin={regoin}
        userPicks={userPicks}
        resetMasterError={resetMasterError}
      />
    </div>
  );
};

export default Regoin_Left_UP_Edit;
