import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getActiveUsers, calcPayout } from "../../store";
import Payout_C from "./Payout_C";
import Payout_M from "./Payout_M";

const Payout = ({ isMobile, showMobilePayoutData }) => {
  const activeUsers = getActiveUsers(useSelector((state) => state.users));

  const [payout, setPayout] = useState(calcPayout(activeUsers));

  useEffect(() => {
    setPayout(calcPayout(activeUsers));
  }, [activeUsers?.length]);

  return isMobile ? (
    <Payout_M payout={payout} showMobilePayoutData={showMobilePayoutData} />
  ) : (
    <Payout_C payout={payout} />
  );
};

export default Payout;
