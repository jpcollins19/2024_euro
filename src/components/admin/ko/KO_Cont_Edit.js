import Regoin_Left_Edit_C from "./regoin/Regoin_Left_Edit_C";
import Regoin_Right_Edit_C from "./regoin/Regoin_Right_Edit_C";
import Finalist_Cont_Edit from "./finalist/Finalist_Cont_Edit";

const KO_Cont_Edit = ({ results, adjustResults, userClick }) => {
  return (
    <div className="ko-cont-edit">
      <div>
        <Regoin_Left_Edit_C
          regoin={1}
          results={results}
          adjustResults={adjustResults}
          userClick={userClick}
        />
        <Regoin_Left_Edit_C
          regoin={2}
          results={results}
          adjustResults={adjustResults}
          userClick={userClick}
        />
      </div>
      <Finalist_Cont_Edit
        results={results}
        adjustResults={adjustResults}
        userClick={userClick}
      />
      <div>
        <Regoin_Right_Edit_C
          regoin={3}
          results={results}
          adjustResults={adjustResults}
          userClick={userClick}
        />
        <Regoin_Right_Edit_C
          regoin={4}
          results={results}
          adjustResults={adjustResults}
          userClick={userClick}
        />
      </div>
    </div>
  );
};

export default KO_Cont_Edit;
