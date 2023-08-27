import Finals_Edit from "./Finals_Edit";
import Champ_Edit from "./Champ_Edit";

const Finalist_Cont_Edit = ({ results, adjustResults, userClick }) => {
  return (
    <div className="ko-finalist-cont">
      <Finals_Edit
        side="left"
        results={results}
        adjustResults={adjustResults}
        userClick={userClick}
      />
      <Champ_Edit results={results} userClick={userClick} />
      <Finals_Edit
        side="right"
        results={results}
        adjustResults={adjustResults}
        userClick={userClick}
      />
    </div>
  );
};

export default Finalist_Cont_Edit;
