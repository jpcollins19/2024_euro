const Text = ({ setEdit, user, lastUpdatedAnswer }) => {
  return (
    <div>
      {lastUpdatedAnswer && lastUpdatedAnswer}
      {user?.admin && (
        <button className="last-updated-button" onClick={() => setEdit(true)}>
          Edit
        </button>
      )}
    </div>
  );
};

export default Text;
