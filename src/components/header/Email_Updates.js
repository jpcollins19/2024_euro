import { Link } from "react-router-dom";

const Email_Updates = () => {
  return (
    <Link
      to="/edit_profile_email_notifications"
      className="email-notifications-cont"
    >
      Edit Notification Settings
      <p>
        Email notifications can be sent out to you each time the website is
        updated!
      </p>
    </Link>
  );
};

export default Email_Updates;
