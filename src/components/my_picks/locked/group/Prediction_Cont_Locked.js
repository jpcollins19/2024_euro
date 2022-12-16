import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Prediction_Cont_Locked = ({ group, selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);

  return (
    <div className="prediction-cont">
      <h5>Prediction</h5>
      <div>
        {pathname === "/pool_picks"
          ? selectedUser[`group${group}1`]
          : user[`group${group}1`]}
      </div>
      <div>
        {pathname === "/pool_picks"
          ? selectedUser[`group${group}2`]
          : user[`group${group}2`]}
      </div>
      <div>
        {pathname === "/pool_picks"
          ? selectedUser[`group${group}3`]
          : user[`group${group}3`]}
      </div>
      <div>
        {pathname === "/pool_picks"
          ? selectedUser[`group${group}4`]
          : user[`group${group}4`]}
      </div>
    </div>
  );
};

export default Prediction_Cont_Locked;
