import R16_Column_Edit_C from "./R16_Column_Edit_C";
import R8_Column_Edit_C from "./R8_Column_Edit_C";
import R4_Column_Edit_C from "./R4_Column_Edit_C";

const Regoin_Right = ({ regoin, results, adjustResults, userClick }) => {
  return (
    <div className="regoin-cont-c">
      <R4_Column_Edit_C
        side="right"
        regoin={regoin}
        results={results}
        adjustResults={adjustResults}
        userClick={userClick}
      />
      <R8_Column_Edit_C
        side="right"
        regoin={regoin}
        results={results}
        adjustResults={adjustResults}
        userClick={userClick}
      />
      <R16_Column_Edit_C
        side="right"
        regoin={regoin}
        results={results}
        adjustResults={adjustResults}
      />
    </div>
  );
};

export default Regoin_Right;
