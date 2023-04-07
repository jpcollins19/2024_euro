import Box from "./Box";

const Single_Cont = ({ group }) => {
  const boxes = [1, 2];

  return (
    <div className="single-group-cont">
      <h3>Group {group}</h3>
      <div className="group-table-cont">
        {boxes.map((box, idx) => (
          <Box key={idx} box={box} group={group} />
        ))}
      </div>
    </div>
  );
};

export default Single_Cont;
