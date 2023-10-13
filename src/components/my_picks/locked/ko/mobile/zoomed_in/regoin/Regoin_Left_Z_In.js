import R16_Column_Z_In from "./R16_Column_Z_In";
import R8_Column_Z_In from "./R8_Column_Z_In";

const Regoin_Left_Z_In = ({ regoin, user }) => {
  return (
    <div className="regoin-cont-c">
      <R16_Column_Z_In side="left" regoin={regoin} user={user} />
      <R8_Column_Z_In side="left" regoin={regoin} user={user} />
    </div>
  );
};

export default Regoin_Left_Z_In;
