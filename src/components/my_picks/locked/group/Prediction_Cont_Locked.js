import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Prediction_Cont_Locked = ({ group, selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);

  return (
    <div className="prediction-cont">
      <h5>Prediction</h5>
      <div>
        <div className="pred-locked-flag">FL</div>
        <div className="pred-locked-team">
          {pathname === "/pool_picks"
            ? selectedUser[`group${group}1`]
            : user[`group${group}1`]}
        </div>
      </div>
    </div>
  );
};

export default Prediction_Cont_Locked;
