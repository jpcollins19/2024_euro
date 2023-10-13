import Top_Arrow from "./Top_Arrow";
import Arrow_Cont_Placeholder from "../Arrow_Cont_Placeholder";

const Top_Arrow_Cont = ({ user, zoomData }) => {
  const validRegoins_1 = [4, 5];
  const validRegoins_2 = [2, 4];
  const validRegoins_3 = [2, 5];

  const showArrow_1 = validRegoins_1.includes(zoomData.zoomedInRegoin);
  const showArrow_2 = validRegoins_2.includes(zoomData.zoomedInRegoin);
  const showArrow_3 = validRegoins_3.includes(zoomData.zoomedInRegoin);

  const regoinToAssign_1 = zoomData.zoomedInRegoin === 4 ? 5 : 1;
  const regoinToAssign_2 = zoomData.zoomedInRegoin === 2 ? 1 : 3;
  const regoinToAssign_3 = zoomData.zoomedInRegoin === 2 ? 5 : 3;

  return (
    <div className="arrow-up-down-cont">
      {showArrow_1 ? (
        <Top_Arrow
          zoomData={zoomData}
          prop="rotate-315"
          regoinToAssign={regoinToAssign_1}
          user={user}
        />
      ) : (
        <Arrow_Cont_Placeholder />
      )}

      {showArrow_2 ? (
        <Top_Arrow
          zoomData={zoomData}
          prop="normal"
          regoinToAssign={regoinToAssign_2}
          user={user}
        />
      ) : (
        <Arrow_Cont_Placeholder />
      )}

      {showArrow_3 ? (
        <Top_Arrow
          zoomData={zoomData}
          prop="rotate-45"
          regoinToAssign={regoinToAssign_3}
          user={user}
        />
      ) : (
        <Arrow_Cont_Placeholder />
      )}
    </div>
  );
};

export default Top_Arrow_Cont;
