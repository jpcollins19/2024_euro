// import Payout from "./Payout";

const Middle_Row = ({ user, tourneyStarted, userSubmittedPicks }) => {
  const shouldPayoutShow = () => {
    return (
      (!tourneyStarted && user?.id) || (tourneyStarted && userSubmittedPicks)
    );
  };

  return (
    <div className="middle-row-navbar">
      {/* {shouldPayoutShow() && <Payout />} */}

      <h1>2024 Euros</h1>
    </div>
  );
};

export default Middle_Row;
