const KO_Box = ({ size, userHasSelection }) => {
  const border = userHasSelection ? "ko-pick-igo" : "ko-pick-missing";

  return (
    <div className={`ko-box-mobile-unlocked ko-b-${size} ${border}`}></div>
  );
};

export default KO_Box;
