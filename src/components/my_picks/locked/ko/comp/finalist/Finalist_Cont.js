import Finals from "./Finals";
import Champ from "./Champ";

const Finalist_Cont = ({ user }) => {
  return (
    <div className="ko-finalist-cont">
      <Finals side="left" user={user} />
      <Champ user={user} />
      <Finals side="right" user={user} />
    </div>
  );
};

export default Finalist_Cont;
