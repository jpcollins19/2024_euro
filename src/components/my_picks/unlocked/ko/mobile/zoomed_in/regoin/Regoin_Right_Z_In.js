import R16_Column_Z_In from "./R16_Column_Z_In";
import R8_Column_Z_In from "./R8_Column_Z_In";
import R4_Column_Z_In from "./R4_Column_Z_In";

const Regoin_Right_Z_In = ({ regoin, user, resetMasterError }) => {
  const side = "right";

  return (
    <div className="regoin-cont-c">
      <R4_Column_Z_In
        regoin={regoin}
        user={user}
        resetMasterError={resetMasterError}
      />
      <R8_Column_Z_In
        side={side}
        regoin={regoin}
        user={user}
        resetMasterError={resetMasterError}
      />
      <R16_Column_Z_In
        side={side}
        regoin={regoin}
        user={user}
        resetMasterError={resetMasterError}
      />
    </div>
  );
};

export default Regoin_Right_Z_In;
