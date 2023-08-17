import { getScreenWidth } from "../../../../store";
import KO_Locked_Mobile from "./mobile/KO_Locked_Mobile";
import KO_Locked_Comp from "./comp/KO_Locked_Comp";

const Knockout_Cont_Locked = ({ selectedUser, user }) => {
  const mobileViewNeeded = getScreenWidth("max", 65);

  return mobileViewNeeded ? (
    <KO_Locked_Mobile user={user} selectedUser={selectedUser} />
  ) : (
    <KO_Locked_Comp user={user} selectedUser={selectedUser} />
  );
};

export default Knockout_Cont_Locked;
