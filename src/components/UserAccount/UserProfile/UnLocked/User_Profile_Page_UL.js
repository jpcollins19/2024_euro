import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
  getUserNames,
  formatEmail,
  updateUser,
  loadUsers,
} from "../../../../store";
import Loading from "../../../Misc/Loading";
import Error from "../../../Misc/Error";
import Button from "../../../Misc/Button";
import Cancel from "../../../Misc/Cancel";
import Input_Cont from "./Input_Cont";

const User_Profile_Page = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const page = pathname
    .split("/edit_profile_")[1]
    .split("")
    .map((letter, idx) => {
      if (idx === 0) {
        letter = letter.toUpperCase();
      }
      return letter;
    })
    .join("");

  if (!user) return null;

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(null);
  const [inputChanged, setInputChanged] = useState(false);
  const [nameChanged, setNameChanged] = useState(false);
  const [password, setPassword] = useState(null);
  const [password1, setPassword1] = useState(null);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [error, setError] = useState(null);
  const [showPW, setShowPW] = useState(false);

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  setTimeout(() => {
    name === null && setName(user.name);
    password === null && setPassword(user.password);
    password1 === null && setPassword1(user.password);
    setLoading(false);
  }, 1000);

  const userNames = getUserNames(useSelector((state) => state.users));

  const classInfo = page === "Password" ? "pw" : "name";

  const onChange = (ev) => {
    setError(null);
    setInputChanged(true);

    if (ev.target.name === "Name") {
      setName(ev.target.value);
      setNameChanged(true);
    } else {
      setPasswordChanged(true);
      ev.target.name === "Password"
        ? setPassword(ev.target.value)
        : setPassword1(ev.target.value);
    }
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const userObj = {
        id: user.id,
      };

      if (nameChanged) {
        if (userNames.includes(formatEmail(name)))
          return setError("Name is already in use");

        userObj.name = name;
      }

      if (passwordChanged) {
        if (password !== password1) return setError("Passwords do not match");

        const month = new Date().getMonth() + 1;
        const date = new Date().getDate();
        const time = new Date().getTime();

        const dateInfo = `${month} ${date} ${time}`;

        userObj.passwordUpdated = dateInfo;
        userObj.password = password;
      }

      dispatch(updateUser(userObj, history, "my_profile"));
    } catch (err) {
      console.log(err);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="user-profile-page">
      <div className={`user-profile-outside upo-${classInfo}`}>
        <div className={`user-profile-inside upi-${classInfo}`}>
          <h1>Edit {page}</h1>
          <div className="user-profile-edit-error-cont">
            {error ? (
              <Error error={error} />
            ) : (
              <Button
                text={"Submit"}
                form={"update-profile"}
                disabled={!inputChanged}
              />
            )}
          </div>

          <form onSubmit={onSubmit} id="update-profile">
            <Input_Cont user={user} onChange={onChange} showPW={showPW} />
          </form>

          {page && page === "Password" && (
            <div
              className="view-pw-user-profile white-text"
              onClick={() => showPwClick()}
            >
              View Password
            </div>
          )}
          <div
            className={`user-profile-edit-cancel-cont upecc-${page} white-text`}
          >
            <Cancel link="/my_profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Profile_Page;
