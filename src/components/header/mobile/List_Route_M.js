import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  formatURL,
  logout,
  resetUserWantsToViewProfileKeys,
} from "../../../store";

const List_Route_M = ({ route, closeMobileMenu, user }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const path =
    route === "Rules/General Info"
      ? "rules"
      : route === "Sign Out"
      ? "sign_in"
      : route === "Pool Picks"
      ? `pool_picks/${user?.id}`
      : formatURL(route);

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
        {route}
      </Link>
    </li>
  );
};

export default List_Route_M;
