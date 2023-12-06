import { useParams } from "react-router-dom"
import { MainContainer } from "../../components"
import { IoChevronBackOutline } from "react-icons/io5"

const TopBooking = () => {
    const {id} = useParams()
    console.log(id)

    const backToDashboard = () => {
      window.history.back();
    };
  return (
    <MainContainer>
      <button
          onClick={backToDashboard}
          className="cursor-pointer flex items-center text-sm font-semibold"
        >
          <IoChevronBackOutline size={18} className="mr-1" />
          Back
        </button>
        <h2 className="text-lg font-semibold mt-2">Booking Information</h2>
    </MainContainer>
  )
}

export default TopBooking