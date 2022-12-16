import { useSelector } from "react-redux";
import { knockoutR16Push } from "../../../../../store";

const R16_Game_L = ({ game }) => {
  const teams = useSelector((state) => state.teams);

  const obj = {
    Q1: ["A1", "B2"],
    Q2: ["C1", "D2"],
    Q3: ["E1", "F2"],
    Q4: ["G1", "H2"],
    Q5: ["B1", "A2"],
    Q6: ["D1", "C2"],
    Q7: ["F1", "E2"],
    Q8: ["H1", "G2"],
  };

  return (
    <div className="white-text">
      <div>{teams.length && knockoutR16Push(teams, obj[game][0])}</div>
      <div>{teams.length && knockoutR16Push(teams, obj[game][1])}</div>
    </div>
  );
};

export default R16_Game_L;
