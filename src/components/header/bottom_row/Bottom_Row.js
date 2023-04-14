import Navbar_Link from "./Navbar_Link";

const Bottom_Row = ({ user }) => {
  const adminOptions = ["users", "groups", "teams"];
  const navOptions = ["leaderboard", "my picks", "pool picks", "group details"];

  return (
    <div className="bottom-row-navbar">
      {user?.admin &&
        adminOptions.map((page, idx) => (
          <Navbar_Link key={idx} page={page} adminPage={true} />
        ))}
      {user?.id &&
        navOptions.map((page, idx) => (
          <Navbar_Link key={idx} page={page} adminPage={false} user={user} />
        ))}
      <Navbar_Link page={"rules"} adminPage={false} />
    </div>
  );
};

export default Bottom_Row;
