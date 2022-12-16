import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Input_Cont = ({ onChange, showPW }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);

  const path = pathname.split("/edit_profile_")[1];

  const page =
    path &&
    path
      .split("")
      .map((letter, idx) => {
        if (idx === 0) {
          letter = letter.toUpperCase();
        }
        return letter;
      })
      .join("");

  return (
    <div className="input-cont-user-profile">
      <input
        onChange={onChange && onChange}
        name={page && page}
        defaultValue={user && path === "name" ? user[path] : ""}
        placeholder={page && page === "Password" ? "Input New Password" : ""}
        type={page && page === "Name" ? "text" : showPW ? "text" : "password"}
      ></input>
      {page === "Password" && (
        <input
          onChange={onChange && onChange}
          name="Password1"
          placeholder="Confirm New Password"
          type={showPW ? "text" : "password"}
        ></input>
      )}
    </div>
  );
};

export default Input_Cont;
