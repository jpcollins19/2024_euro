import { useSelector } from "react-redux";
import R16_Game_UL from "./games/R16_Game_UL";

const R16_UL = ({
  side,
  setTeam,
  setKoError,
  Q1,
  Q2,
  Q3,
  Q4,
  Q5,
  Q6,
  Q7,
  Q8,
  setQ1,
  setQ2,
  setQ3,
  setQ4,
  setQ5,
  setQ6,
  setQ7,
  setQ8,
}) => {
  const teams = useSelector((state) => state.teams);
  const nums = [1, 2, 3, 4];

  return (
    teams.length && (
      <div>
        <h2>Round of 16</h2>
        {nums.map((num, idx) => {
          return (
            <R16_Game_UL
              key={idx}
              setTeam={setTeam}
              setKoError={setKoError}
              game={`Q${side === "left" ? num : num + 4}`}
              Q1={Q1}
              Q2={Q2}
              Q3={Q3}
              Q4={Q4}
              Q5={Q5}
              Q6={Q6}
              Q7={Q7}
              Q8={Q8}
              setQ1={setQ1}
              setQ2={setQ2}
              setQ3={setQ3}
              setQ4={setQ4}
              setQ5={setQ5}
              setQ6={setQ6}
              setQ7={setQ7}
              setQ8={setQ8}
            />
          );
        })}
      </div>
    )
  );
};

export default R16_UL;
