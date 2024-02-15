import {useLocation, Link} from "react-router-dom";
import {getNavBarVerbiageFromPath, routes} from "../../../../store";

const Navbar_Link = ( {route} ) => {
    const {pathname} = useLocation();

    const verbiage = getNavBarVerbiageFromPath(route)

    let linkClassName = pathname.includes(route) ? "selected-url"
        : "not-selected-url"

    return (
        <Link
            to={route}
            className={linkClassName}
        >
            {verbiage}
        </Link>
    );
};

export default Navbar_Link;
