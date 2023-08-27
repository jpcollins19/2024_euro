import R16_Column_C from "./R16_Column_C";
import R8_Column_C from "./R8_Column_C";
import R4_Column_C from "./R4_Column_C";

const Regoin_Left_C = ({ regoin, user }) => {
  return (
    <div className="regoin-cont-c">
      <R16_Column_C side="left" regoin={regoin} user={user} />
      <R8_Column_C side="left" regoin={regoin} user={user} />
      <R4_Column_C side="left" regoin={regoin} user={user} />
    </div>
  );
};

export default Regoin_Left_C;
