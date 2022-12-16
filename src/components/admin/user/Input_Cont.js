import { capFirstLetter } from "../../../store";

const Input_Cont = ({ selectedUser, name, set }) => {
  return (
    <div className="input-cont-admin-user">
      <div>{capFirstLetter(name && name)}:</div>
      <input
        defaultValue={selectedUser && selectedUser[name]}
        onChange={(ev) => set(ev.target.value)}
      ></input>
    </div>
  );
};

export default Input_Cont;
