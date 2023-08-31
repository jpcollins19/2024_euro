import { useLocation } from "react-router-dom";
import { getScreenWidth, isPoolPicksPage } from "../../../../store";
import KO_Locked_Mobile from "./mobile/KO_Locked_Mobile";
import KO_Locked_Comp from "./comp/KO_Locked_Comp";

const Knockout_Cont_Locked = ({ selectedUser, user, zoomData }) => {
  const { pathname } = useLocation();

  const poolPicksPage = isPoolPicksPage(pathname);

  const userToUse = poolPicksPage ? selectedUser : user;

  const mobileViewNeeded = getScreenWidth("max", 65);

  return mobileViewNeeded ? (
    <KO_Locked_Mobile user={userToUse} zoomData={zoomData} />
  ) : (
    <KO_Locked_Comp user={userToUse} />
  );
};

export default Knockout_Cont_Locked;
