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

  const isMobile = getScreenWidth("max", 65);

  return isMobile ? <Header_M /> : <Header_C />;
};

export default Header;
