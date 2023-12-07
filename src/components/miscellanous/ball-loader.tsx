import { BallTriangle } from "react-loader-spinner";

const BallLoader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4169e2"
      ariaLabel="ball-triangle-loading"
      visible={true}
    />
  );
};

export default BallLoader;
