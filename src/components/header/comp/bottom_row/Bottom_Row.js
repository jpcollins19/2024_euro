import {useSelector} from "react-redux";
import Navbar_Link from "./Navbar_Link";
import {
    userIsSignedInRoutes,
    adminRoutes,
    routes,
    getIsUserSignedIn,
    getIsUserAdmin,
} from '../../../../store'

const Bottom_Row = () => {
    const user = useSelector(( state ) => state.auth);

    const userIsSignedIn = getIsUserSignedIn(user)
    const userIsAdmin = getIsUserAdmin(user)

    return (
        <div className="bottom-row-navbar">
            {userIsAdmin &&
                adminRoutes.map(( route, idx ) => (
                    <Navbar_Link key={idx} route={route}/>
                ))}

            {userIsSignedIn &&
                userIsSignedInRoutes.map(( route, idx ) => (
                    <Navbar_Link
                        key={idx}
                        route={route}
                    />
                ))}

            <Navbar_Link route={routes.rules}/>
        </div>
    );
};

export default Bottom_Row;
