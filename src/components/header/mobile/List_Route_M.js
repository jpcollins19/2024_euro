import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {formatURL, logout, cap1stLetter} from "../../../store";

const List_Route_M = ({route, closeMobileMenu}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => state.auth);

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

    // const verbiage =
    //     route === "Admin" ? `Admin - ${cap1stLetter(subRoute)}` : route;

    const verbiage = getNavBarVerbiageFromPath(route, userIsLoggedIn ?? false);

    return (
        <li>
            <Link
                to={`/${path}`}
                className="dropdown-route-row"
                onClick={() => {
                    route === "Sign Out" ? dispatch(logout(history))
                        : closeMobileMenu();

                    closeMobileMenu();
                }}
            >
                {verbiage}
            </Link>
        </li>
    );
};

export default List_Route_M;
