import R16_Column from "./R16_Column";
import R8_Column from "./R8_Column";

const Regoin_Left = ({ user, regoin, zoomData }) => {
  return (
    <div
      onClick={() => zoomData.setZoomedInRegoin(regoin)}
      className="regoin-cont regoin-cont-left"
    >
      <R16_Column user={user} regoin={regoin} />
      <R8_Column user={user} regoin={regoin} side={"left"} />
    </div>
  );
};

export default Regoin_Left;
