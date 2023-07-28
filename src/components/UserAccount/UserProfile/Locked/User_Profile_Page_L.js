import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { me } from "../../../../store";
import Loading from "../../../Misc/Loading";
import Name from "./Name";
import toast, { Toaster } from "react-hot-toast";

const User_Profile_Page = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.auth);

  if (!user) return null;

  const pwUpdated = () => {
    toast("Your password has been updated!", { duration: 5000 });
  };

  useEffect(() => {
    dispatch(me());
  }, []);

  setTimeout(() => {
    setLoading(false);

    const month =
      user &&
      user.passwordUpdated &&
      Number(user.passwordUpdated.split(" ")[0]);
    const date =
      user &&
      user.passwordUpdated &&
      Number(user.passwordUpdated.split(" ")[1]);
    const time =
      user &&
      user.passwordUpdated &&
      Number(user.passwordUpdated.split(" ")[2]);

    const monthNow = new Date().getMonth() + 1;
    const dateNow = new Date().getDate();
    const timeNow = new Date().getTime();

    if (month === monthNow && date === dateNow) {
      if (timeNow - time < 2000) pwUpdated();
    }
  }, 1000);

  const options = [
    {
      route: "/edit_profile_name",
      text: "Edit Name",
      // marginTop: isMobile ? "80px" : "20px",
      marginTop: "20px",
    },
    {
      route: "/edit_profile_password",
      text: "Change Password",
      // marginTop: isMobile ? "30px" : "15px",
      marginTop: "15px",
    },
    {
      route: "/edit_profile_email_notifications",
      text: "Edit Email Notifications",
      // marginTop: isMobile ? "30px" : "5px",
      marginTop: "15px",
    },
  ];

  return loading ? (
    <Loading />
  ) : (
    <div className="user-profile-page">
      <Toaster
        toastOptions={{
          className: "toaster-email-changed",
        }}
      />

      <div className="user-profile-outside">
        <div className="user-profile-inside">
          <h1>My Profile</h1>

          <Name user={user} />

          <div className="user-profile-options">
            {options.map((option, idx) => (
              <Link
                key={idx}
                to={option.route}
                style={{ marginTop: option.marginTop }}
              >
                {option.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Profile_Page;
