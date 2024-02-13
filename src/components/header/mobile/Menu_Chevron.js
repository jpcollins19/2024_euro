import {useState, useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import {
    routes,
    userIsSignedInRoutes,
    adminRoutes,
    getIsUserSignedIn,
    getIsUserAdmin,
    handleMobileClick
} from "../../../store";
import MenuItemIcon from "@mui/icons-material/List";
import List_Route_M from "./List_Route_M";

const Menu_Chevron = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    let ref = useRef();

    useEffect(() => {
        return handleMobileClick(ref, closeMobileMenu)
    }, [click]);

    const user = useSelector(( state ) => state.auth);

    const userIsSignedIn = getIsUserSignedIn(user)
    const userIsAdmin = getIsUserAdmin(user)

    return (
        <div>
            <div className="menu-icon" onClick={handleClick} ref={ref}>
                <MenuItemIcon sx={{fontSize: 90}}/>
            </div>

            {click && (
                <ul className={`dropdown-menu ${click ? 'active' : ''}`}>

                    {userIsAdmin &&
                        adminRoutes.map(( route, idx ) => (
                            <List_Route_M
                                key={idx}
                                route={route}
                                closeMobileMenu={closeMobileMenu}
                            />
                        ))}

                    {userIsSignedIn &&
                        userIsSignedInRoutes.map(( route, idx ) => (
                            <List_Route_M
                                key={idx}
                                route={route}
                                closeMobileMenu={closeMobileMenu}
                            />
                        ))}

                    <List_Route_M
                        route={routes.rules}
                        closeMobileMenu={closeMobileMenu}
                    />

                    {userIsSignedIn && (
                        <List_Route_M
                            route={routes.myProfile}
                            closeMobileMenu={closeMobileMenu}
                        />
                    )}

                    <List_Route_M
                        route={routes.signIn}
                        closeMobileMenu={closeMobileMenu}
                        userIsSignedIn={userIsSignedIn}
                    />
                </ul>
            )}
        </div>
    );
};

export default Menu_Chevron;
