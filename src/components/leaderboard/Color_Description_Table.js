import { allUsersPaid, usersAreTied } from "../../store";

const Color_Description_Table = ({ rankInfo }) => {
  const allUsersHavePaid = allUsersPaid(rankInfo);
  const userTieExists = usersAreTied(rankInfo);

  const inputOptions = [
    { need: !allUsersHavePaid, text: "not paid", color: "not-paid" },
    {
      need: userTieExists,
      text: "both score & tiebreaker info are identical",
      color: "tie",
    },
  ];

  const inputsToUse = inputOptions.filter((input) => input.need);

  return (
    <div className="color-description-table-cont">
      {inputsToUse.map((input, idx) => (
        <div key={idx}>
          <div className={`color-cont ${input.color}`}></div>
          <div>{input.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Color_Description_Table;
