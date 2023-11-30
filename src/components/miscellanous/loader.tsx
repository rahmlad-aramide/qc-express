import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Oval
      height={30}
      width={30}
      color="white"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#999"
      strokeWidth={5}
      strokeWidthSecondary={5}
    />
  );
};

export default Loader;
