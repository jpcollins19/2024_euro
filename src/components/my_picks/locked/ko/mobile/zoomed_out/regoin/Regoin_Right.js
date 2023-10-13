import R16_Column from "./R16_Column";
import R8_Column from "./R8_Column";

const Regoin_Right = ({ user, regoin, zoomData }) => {
  return (
    <div
      onClick={() => zoomData.setZoomedInRegoin(regoin)}
      className="regoin-cont  regoin-cont-right"
    >
      <R8_Column user={user} regoin={regoin} side={"right"} />
      <R16_Column user={user} regoin={regoin} />
    </div>
  );
};

export default Regoin_Right;
