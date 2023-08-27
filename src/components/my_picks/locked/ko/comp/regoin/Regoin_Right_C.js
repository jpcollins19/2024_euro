import R16_Column_C from "./R16_Column_C";
import R8_Column_C from "./R8_Column_C";
import R4_Column_C from "./R4_Column_C";

const Regoin_Right = ({ regoin, user }) => {
  return (
    <div className="regoin-cont-c">
      <R4_Column_C side="right" regoin={regoin} user={user} />
      <R8_Column_C side="right" regoin={regoin} user={user} />
      <R16_Column_C side="right" regoin={regoin} user={user} />
    </div>
  );
};

export default Regoin_Right;
