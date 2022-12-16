import { useSelector } from "react-redux";

const Payout = () => {
  const submittedPicks = useSelector((state) => state.users).filter(
    (user) => user.tiebreaker !== null
  );

  const payoutInfo = submittedPicks?.length * 20;

  const juice = 20;

  const firstPlace =
    submittedPicks?.length === 1 ? 0 : (payoutInfo - juice) * 0.75;

  const secondPlace =
    submittedPicks?.length === 1 ? 0 : (payoutInfo - juice) * 0.25;

  return (
    <div className="payout">
      <div className="payout-cont-f">
        <div className="payout-text-cont">
          <div className="place-col-cont">
            <div>1st</div>
            <div>2nd</div>
          </div>
          <div className="dollar-col-cont">
            <div>${firstPlace.toFixed(2)}</div>
            <div>${secondPlace.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payout;
