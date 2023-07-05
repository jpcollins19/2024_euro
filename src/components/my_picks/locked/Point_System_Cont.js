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
      text: "picked correct country to advance, but not in correct 1/2 position",
      color: "orange",
    },
    {
      text: "picked correct country for the 3/4 position",
      padding: "ps-bottom",
      color: "green",
    },
  ];

  return (
    <div className="point-system-table-cont">
      <div className={`ps-top ${tourneyStage <= 2 ? "ps-bottom" : ""}`}>
        <div className="color-cont">*</div>
        <div>3rd place team selected to advance from group</div>
      </div>
      {tourneyStage >= 3 &&
        inputs.map((input, idx) => (
          <div key={idx} className={input.padding}>
            <div className={`color-cont ${input.color}`}></div>
            <div>{input.text}</div>
          </div>
        ))}
    </div>
  );
};

export default Point_System_Cont;
