import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { me, getScreenWidth } from "../../store";
import Header_C from "./comp/Header_C";
import Header_M from "./mobile/Header_M";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  const mobileViewNeeded = getScreenWidth("max", 65);

  return mobileViewNeeded ? <Header_M /> : <Header_C />;
};

export default Header;
