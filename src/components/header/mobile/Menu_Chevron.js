import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import MenuItemIcon from "@mui/icons-material/List";
import List_Route_M from "./List_Route_M";

const Navbar_Routes_M = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      !ref.current.contains(event.target) &&
        event.target.className !== "dropdown-route-row" &&
        closeMobileMenu();
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [click]);

  const user = useSelector((state) => state.auth);

  const routes = ["Leaderboard", "My Picks", "Pool Picks", "Group Details"];

  const adminSubRoutes = ["users", "groups", "ko"];

  return (
    <div>
      <div className="menu-icon" onClick={handleClick} ref={ref}>
        {/* <MenuItemIcon sx={{ fontSize: isTablet ? 40 : 90 }} /> */}
        <MenuItemIcon sx={{ fontSize: 90 }} />
      </div>
      {click && (
        <ul className={click ? "dropdown-menu active" : "dropdown-menu"}>
          {user?.admin &&
            adminSubRoutes.map((subRoute, idx) => (
              <List_Route_M
                key={idx}
                route="Admin"
                subRoute={subRoute}
                closeMobileMenu={closeMobileMenu}
                user={user}
              />
            ))}

          {user?.id &&
            routes.map((route, idx) => (
              <List_Route_M
                key={idx}
                route={route}
                closeMobileMenu={closeMobileMenu}
                user={user}
              />
            ))}

          <List_Route_M
            route={"Rules/General Info"}
            closeMobileMenu={closeMobileMenu}
            user={user}
          />

          {user?.id && (
            <List_Route_M
              route={"My Profile"}
              closeMobileMenu={closeMobileMenu}
              user={user}
            />
          )}

          <List_Route_M
            route={user?.id ? "Sign Out" : "Sign In"}
            closeMobileMenu={closeMobileMenu}
            user={user}
          />
        </ul>
      )}
    </div>
  );
};

export default Navbar_Routes_M;
