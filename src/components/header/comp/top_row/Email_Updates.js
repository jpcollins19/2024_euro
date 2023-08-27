import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { me } from "../../../../store";

const Email_Updates = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  const user = useSelector((state) => state.auth);
  const verbiageToUse = user?.emailNotifications ? "out of" : "into";

  return (
    <Link
      to={`/edit_profile_email_notifications`}
      className="email-notifications-cont"
    >
      Opt me {verbiageToUse} email notifications
      <p>
        Email notifications can be sent out to you each time the website is
        updated!
      </p>
    </Link>
  );
};

export default Email_Updates;
