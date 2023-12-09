import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import { Popover, ArrowContainer } from "react-tiny-popover";
import { useModal } from "../../contexts/ModalContext";

type isPopoverOpen = boolean

interface InfoPopverProps {
    isPopoverOpen: isPopoverOpen
    setIsPopoverOpen: (boolean: isPopoverOpen)=>void
    trackingId: string
}

const InfoPopver:React.FC<InfoPopverProps> = ({ isPopoverOpen=false, setIsPopoverOpen, trackingId }) => {
  const {setIsOpen} = useModal();
  
  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["bottom", "top","right", "left"]}
      padding={5}
      onClickOutside={() => setIsPopoverOpen(false)}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={"white"}
          arrowSize={10}
          arrowStyle={{ opacity: 1 }}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <div
            className="shadow-xl border w-full max-w-[250px] rounded-lg p-5"
            style={{ backgroundColor: "white", opacity: 1 }}
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            <Link to={`/shipment/${trackingId}`}>
            <button
              className="border text-[#49474D] bg-[#FFFFFF]/50 hover:bg-[#f5f5f6] rounded-lg w-full h-[48px] mb-4"
            >
              View Details
            </button>
            </Link>
            <Link to={`/tracking/${trackingId}`}>
                <button
                className="border text-[#49474D] bg-[#FFFFFF]/50 hover:bg-[#f5f5f6] rounded-lg w-full h-[48px] mb-4"
                >
                Track Shipment
                </button>
            </Link>
            <button
              onClick={()=>setIsOpen(true)}
              className="border text-[#49474D] bg-[#FFFFFF]/50 hover:bg-[#f5f5f6] rounded-lg w-full h-[48px]"
            >
              Download Document
            </button>
          </div>
        </ArrowContainer>
      )}
    >
      <button
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        className="rounded mx-auto text-grayish-600 bg-grayish-600/10 hover:bg-grayish-600/20 p-1.5"
      >
        <IoMdMore />
      </button>
    </Popover>
  );
};

export default InfoPopver;
