import { Oval } from "react-loader-spinner";
interface LoaderProps {
  h?: number
  w?: number
}
const Loader: React.FC<LoaderProps> = ({h=30, w=30}) => {
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
