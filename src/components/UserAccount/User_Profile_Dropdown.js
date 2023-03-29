import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { logout } from "../../store";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import UserIcon from "@mui/icons-material/AccountBox";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

const User_Profile_Dropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ref = useRef();

  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div className="user-details-dropdown">
      <Button ref={ref} onClick={onMouseEnter}>
        <UserIcon
          sx={{
            fontSize: 50,
            color: "white",
            background: "blue",
            marginRight: -2,
            borderRadius: 1,
          }}
        />
      </Button>
      <Popper
        open={dropdown}
        anchorEl={ref.current}
        placement="bottom-start"
        transition
        className="dropdown-elevate"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={onMouseLeave}>
                <MenuList
                  autoFocusItem={dropdown}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/my_profile"
                  >
                    <MenuItem>My Profile</MenuItem>
                  </Link>

                  <MenuItem onClick={() => dispatch(logout(history))}>
                    Sign Out
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default User_Profile_Dropdown;
