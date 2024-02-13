import {useDispatch} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {logout, getNavBarVerbiageFromPath} from "../../../store";

const List_Route_M = ({route, closeMobileMenu, userIsSignedIn}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const verbiage = getNavBarVerbiageFromPath(route, userIsSignedIn ?? false);

    return (
        <li>
            <Link
                to={route}
                className="dropdown-route-row"
                onClick={() => {
                    userIsSignedIn && dispatch(logout(history));

                    closeMobileMenu();
                }}
            >
                {verbiage}
            </Link>
        </li>
    );
};

export default List_Route_M;
