import { useSelector } from "react-redux";
import { findJoe, shouldPayoutShow, getScreenWidth } from "../../store";
import Payout_Cont_M from "./mobile/Payout_Cont_M";
import Admin_Cont from "./Admin_Cont";
import Non_Admin_Cont from "./Non_Admin_Cont";

const Misc_Header_Data = ({ user }) => {
  const joe = findJoe(useSelector((state) => state.users));

  const showData = shouldPayoutShow(joe, user);

  const isAdmin = user?.admin;

  const isMobile = getScreenWidth("max", 65);

  const classData = user?.id ? "misc-header-data" : "misc-header-data-NU";

  return showData ? (
    <div className={classData}>
      {isMobile && <Payout_Cont_M />}

      {isAdmin ? <Admin_Cont /> : <Non_Admin_Cont isMobile={isMobile} />}
    </div>
  ) : null;
};

export default Misc_Header_Data;
