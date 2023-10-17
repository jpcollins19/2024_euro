import R16_Column from "./R16_Column";
import R8_Column from "./R8_Column";

const Regoin_Left = ({ regoin, zoomData, user, resetMasterError }) => {
  return (
    <div
      onClick={() => {
        resetMasterError();
        zoomData.setZoomedInRegoin(regoin);
      }}
      className="regoin-cont regoin-cont-left"
    >
      <R16_Column regoin={regoin} user={user} />
      <R8_Column regoin={regoin} user={user} />
    </div>
  );
};

export default Regoin_Left;
