const Point_System_Cont = ({ tourneyStage }) => {
  const inputs = [
    {
      text: "picked correct country to win group",
      color: "blue",
    },
    {
      text: "picked correct runner-up country",
      color: "purple",
    },
    {
      text: "picked correct country to take 3rd in in the group and advance to the Knockout Stage",
      color: "pink",
    },
    {
      text: "picked correct country to advance, but not in the correct 1/2/3 position",
      color: "orange",
    },
    {
      text: "picked correct country for the 3/4 position - 3rd place team did not advance from group",
      padding: "ps-bottom",
      color: "green",
    },
  ];

  return (
    <div
      className={`point-system-table-cont ${
        tourneyStage <= 2 ? "pstc-2" : "pstc-3"
      }`}
    >
      <div className={`ps-top ${tourneyStage <= 2 ? "ps-bottom" : ""}`}>
        <div className={`color-cont astrix`}>*</div>
        <div className="pts-system-description-cont">
          3rd place team selected to advance from group
        </div>
      </div>
      {tourneyStage >= 3 &&
        inputs.map((input, idx) => (
          <div key={idx} className={input.padding}>
            <div className={`color-cont ${input.color}`}></div>
            <div className="pts-system-description-cont">{input.text}</div>
          </div>
        ))}
    </div>
  );
};

export default Point_System_Cont;
