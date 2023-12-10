import { Oval } from "react-loader-spinner";

const Loader = ({h=30, w=30}) => {
  return (
    <Oval
      height={h}
      width={w}
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
