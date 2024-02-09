import { Link } from "react-router-dom";

const Email_Updates = ({ isMobile }) => {
  return (
    <Link
      to="/edit_profile_email_notifications"
      className="email-notifications-cont"
    >
      Edit Notification Settings
      {!isMobile && (
        <p>
          Email notifications can be sent out to you each time the website is
          updated!
        </p>
      )}
    </Link>
  );
};

export default Email_Updates;
