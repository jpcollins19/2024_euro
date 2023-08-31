import KO_Main_Cont_Out from "./zoomed_out/KO_Main_Cont_Out";
import KO_Main_Cont_In from "./zoomed_in/KO_Main_Cont_In";

const KO_Locked_Mobile = ({ user, zoomData }) => {
  return zoomData.zoomedOut ? (
    <KO_Main_Cont_Out user={user} zoomData={zoomData} />
  ) : (
    <KO_Main_Cont_In user={user} zoomData={zoomData} />
  );
};

export default KO_Locked_Mobile;
