import R16_Column_Z_In from "./R16_Column_Z_In";
import R8_Column_Z_In from "./R8_Column_Z_In";

const Regoin_Right_Z_In = ({ regoin, user }) => {
  return (
    <div className="regoin-cont-c">
      <R8_Column_Z_In side="right" regoin={regoin} user={user} />
      <R16_Column_Z_In side="right" regoin={regoin} user={user} />
    </div>
  );
};

export default Regoin_Right_Z_In;
