import { SpinnerCircularFixed } from "spinners-react";

const Loading = () => {
  return (
    <div className="loading-cont">
      <SpinnerCircularFixed
        size={100}
        thickness={100}
        speed={147}
        color="white"
        secondaryColor="black"
      />
    </div>
  );
};

export default Loading;
