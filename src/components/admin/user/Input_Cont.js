import { cap1stLetter } from "../../../store";

const Input_Cont = ({ selectedUser, name, set }) => {
  return (
    <div className="data-cont-admin-user dcau">
      <div>{cap1stLetter(name && name)}:</div>
      <input
        className="dcau-input"
        defaultValue={selectedUser && selectedUser[name]}
        onChange={(ev) => set(ev.target.value)}
      ></input>
    </div>
  );
};

export default Input_Cont;
