import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUpdated } from "../../store";

const Last_Updated = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState(null);

  const lastUpdatedData = useSelector((state) => state.updated)[0];

  useEffect(() => {
    dispatch(loadUpdated());
  }, []);

  useEffect(() => {
    setText(lastUpdatedData?.answer);
  }, [lastUpdatedData]);

  return (
    <div className="last-updated-cont">
      <div>Last Updated:</div>
      <div>{text}</div>
    </div>
  );
};

export default Last_Updated;
