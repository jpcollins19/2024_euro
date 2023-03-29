const Name = ({ user }) => {
  return (
    <div className="name-cont">
      <div>{user?.name}</div>
    </div>
  );
};

export default Name;
