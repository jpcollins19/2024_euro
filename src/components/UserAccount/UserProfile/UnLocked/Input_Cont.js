import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Input_Field from "../../Input_Field";

const Input_Cont = ({ onChange, showPW }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);

  const path = pathname.split("/edit_profile_")[1];

  const password = {
    label: "Password",
    name: "Password",
    // marginLeft: isMobile ? "31%" : "34%",
    marginLeft: "34%",
    type: showPW ? "text" : "password",
  };

  const password1 = {
    label: "Confirm New Password",
    name: "Password1",
    // marginLeft: isMobile ? "10%" : "16%",
    marginLeft: "20%",
    type: showPW ? "text" : "password",
  };

  return (
    <div className="input-cont-user-profile">
      {path === "password" ? (
        <Input_Field input={password} onChange={onChange} />
      ) : (
        <input
          onChange={onChange}
          name="Name"
          defaultValue={user?.name}
          type="text"
        ></input>
      )}

      {path === "password" && (
        <Input_Field input={password1} onChange={onChange} />
      )}
    </div>
  );
};

export default Input_Cont;
