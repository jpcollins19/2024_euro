const Point_System_Cont = () => {
  const inputs = [
    {
      text: "picked correct country to win group",
      padding: "ps-top",
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
      {inputs.map((input, idx) => (
        <div key={idx} className={input.padding}>
          <div className={`color-cont ${input.color}`}></div>
          <div>{input.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Point_System_Cont;
