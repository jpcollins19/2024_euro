import R16_Game_UL_A from "./games/R16_Game_UL_A";

const R16_UL_A = ({
  side,
  setTeam,
  setKoError,
  setQ1,
  setQ2,
  setQ3,
  setQ4,
  setQ5,
  setQ6,
  setQ7,
  setQ8,
}) => {
  const nums = [1, 2, 3, 4];

  return (
    <div>
      <h2>Round of 16</h2>
      {nums.map((num, idx) => {
        return (
          <R16_Game_UL_A
            key={idx}
            setTeam={setTeam}
            setKoError={setKoError}
            game={`Q${side === "left" ? num : num + 4}`}
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
  );
};

export default R16_UL_A;
