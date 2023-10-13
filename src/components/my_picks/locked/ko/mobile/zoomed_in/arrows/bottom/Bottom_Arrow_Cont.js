import Bottom_Arrow from "./Bottom_Arrow";
import Arrow_Cont_Placeholder from "../Arrow_Cont_Placeholder";

const Bottom_Arrow_Cont = ({ zoomData }) => {
  const validRegoins_1 = [3, 5];
  const validRegoins_2 = [1, 3];
  const validRegoins_3 = [1, 5];

  const showArrow_1 = validRegoins_1.includes(zoomData.zoomedInRegoin);
  const showArrow_2 = validRegoins_2.includes(zoomData.zoomedInRegoin);
  const showArrow_3 = validRegoins_3.includes(zoomData.zoomedInRegoin);

  const regoinToAssign_1 = zoomData.zoomedInRegoin === 3 ? 5 : 2;
  const regoinToAssign_2 = zoomData.zoomedInRegoin === 1 ? 2 : 4;
  const regoinToAssign_3 = zoomData.zoomedInRegoin === 1 ? 5 : 4;

  return (
    <div className="arrow-up-down-cont">
      {showArrow_1 ? (
        <Bottom_Arrow
          zoomData={zoomData}
          prop="rotate-45"
          regoinToAssign={regoinToAssign_1}
        />
      ) : (
        <Arrow_Cont_Placeholder />
      )}

      {showArrow_2 ? (
        <Bottom_Arrow
          zoomData={zoomData}
          prop="normal"
          regoinToAssign={regoinToAssign_2}
        />
      ) : (
        <Arrow_Cont_Placeholder />
      )}

      {showArrow_3 ? (
        <Bottom_Arrow
          zoomData={zoomData}
          prop="rotate-315"
          regoinToAssign={regoinToAssign_3}
        />
      ) : (
        <Arrow_Cont_Placeholder />
      )}
    </div>
  );
};

export default Bottom_Arrow_Cont;
