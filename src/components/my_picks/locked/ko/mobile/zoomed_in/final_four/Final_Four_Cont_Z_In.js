import Final_Four_Z_In from "./Final_Four_Z_In";
import Finals_Z_In from "./Finals_Z_In";
import Champ_Z_In from "./Champ_Z_In";

const Final_Four_Cont_Z_In = ({ user }) => {
  return (
    <div className="ko-final-four-cont">
      <div className="ko-final-four-cont-z-in">
        <Final_Four_Z_In side="top" user={user} />
      </div>

      <div className="ko-finals-cont-z-in">
        <Finals_Z_In side="left" user={user} />
        <Champ_Z_In user={user} />
        <Finals_Z_In side="right" user={user} />
      </div>

      <div className="ko-final-four-cont-z-in koffczi-bottom">
        <Final_Four_Z_In side="bottom" user={user} />
      </div>
    </div>
  );
};

export default Final_Four_Cont_Z_In;
