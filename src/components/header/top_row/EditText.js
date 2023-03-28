const EditText = ({ onChange, lastUpdatedAnswer }) => {
  return (
    <div>
      <input
        defaultValue={lastUpdatedAnswer && lastUpdatedAnswer}
        onChange={(ev) => onChange(ev.target.value)}
      />
      <button
        type="submit"
        id="submit-last-updated"
        className="last-updated-button"
      >
        Save
      </button>
    </div>
  );
};

export default EditText;
