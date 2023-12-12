import { useLocation } from "react-router-dom";
import { getScreenWidth } from "../../../../store";
import Input_Field from "../../Input_Field";

const Input_Cont = ({ user, onChange, showPW, emailNotifications }) => {
  const { pathname } = useLocation();

  const path = pathname.split("/edit_profile_")[1];

  const isMobile = getScreenWidth("max", 65);

  const password = {
    label: "Password",
    name: "Password",
    marginLeft: isMobile ? "36%" : "34%",
    type: showPW ? "text" : "password",
  };

  const password1 = {
    label: "Confirm New Password",
    name: "Password1",
    marginLeft: isMobile ? "22%" : "20%",
    type: showPW ? "text" : "password",
  };

  const className = `up-input-${
    path === "name" ? "name" : "email_notifications"
  }`;

  return (
    <div className="input-cont-user-profile">
      {path === "password" ? (
        <Input_Field input={password} onChange={onChange} />
      ) : path === "name" ? (
        <input
          onChange={onChange}
          name="Name"
          defaultValue={user?.name}
          type="text"
          className={className}
        ></input>
      ) : (
        <div className="up-edit-email-notifications">
          <input
            onChange={onChange}
            name="Email Notifications"
            checked={emailNotifications}
            type="checkbox"
            className={className}
          ></input>
          <div className="white-text">
            Send me email notifications each time the website is updated
          </div>
        </div>
      )}

      {path === "password" && (
        <Input_Field input={password1} onChange={onChange} />
      )}
    </div>
  );
};

export default Input_Cont;
