import Text from "./Text";

const Admin_Text = ({ onChange, text, edit }) => {
  return !edit ? (
    <Text text={text} />
  ) : (
    <div>
      <input defaultValue={text} onChange={(ev) => onChange(ev.target.value)} />
    </div>
  );
};

export default Admin_Text;
