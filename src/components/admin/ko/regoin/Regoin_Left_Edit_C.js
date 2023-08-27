import R16_Column_Edit_C from "./R16_Column_Edit_C";
import R8_Column_Edit_C from "./R8_Column_Edit_C";
import R4_Column_Edit_C from "./R4_Column_Edit_C";

const Regoin_Left_Edit_C = ({ regoin, results, adjustResults, userClick }) => {
  return (
    <div className="regoin-cont-c">
      <R16_Column_Edit_C
        side="left"
        regoin={regoin}
        results={results}
        adjustResults={adjustResults}
      />
      <R8_Column_Edit_C
        side="left"
        regoin={regoin}
        results={results}
        adjustResults={adjustResults}
        userClick={userClick}
      />
      <R4_Column_Edit_C
        side="left"
        regoin={regoin}
        results={results}
        adjustResults={adjustResults}
        userClick={userClick}
      />
    </div>
  );
};

export default Regoin_Left_Edit_C;
