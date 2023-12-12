import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  formatURL,
  logout,
  resetUserWantsToViewProfileKeys,
  cap1stLetter,
} from "../../../store";

const List_Route_M = ({ route, closeMobileMenu, user, subRoute }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const path =
    route === "Rules/General Info"
      ? "rules"
      : route === "Sign Out"
      ? "sign_in"
      : route === "Pool Picks"
      ? `pool_picks/${user?.id}`
      : route === "Admin"
      ? `admin/${subRoute}`
      : formatURL(route);

  const verbiage =
    route === "Admin" ? `Admin - ${cap1stLetter(subRoute)}` : route;

  return (
    <li>
      <Link
        to={`/${path}`}
        className="dropdown-route-row"
        onClick={() => {
          route === "Sign Out" ? dispatch(logout(history)) : closeMobileMenu();

          closeMobileMenu();
          // resetUserWantsToViewProfileKeys(user?.id);
        }}
      >
        {verbiage}
      </Link>
    </li>
  );
};

export default List_Route_M;
