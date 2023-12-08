import { FC } from 'react';
import ReactModal from 'react-modal';

interface TrackModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  track: () => void;
  isLoading: boolean;
  close: () => void;
}

const TrackModal: FC<TrackModalProps> = ({
  isOpen,
  onRequestClose,
  track,
  isLoading,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="flex flex-col py-12 px-8 gap-8">
        <div className="flex flex-col justify-between items-center w-full">
          <div className="flex justify-center bg-[#D1FADF] rounded-full p-3 mb-8 border-[8px] border-[#ECFDF3]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999M22 3.99999L12 14.01L9.00001 11.01"
                stroke="#039855"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mb-2 text-xl font-semibold text-center text-[#242128]">
            Assign Admin
          </div>
          <div className="text-sm text-center text-[#49474D]">
            Are you sure you want to assign admin to this user(s)?
          </div>
        </div>
        <div className="flex justify-between gap-12 w-full">
          <div className="w-full">
            <button
              onClick={() => {
                onRequestClose();
              }}
              type="submit"
              className="border-[#49474D] bg-[#FFFFFF]/50 hover:bg-[#f5f5f6] rounded-lg w-full h-[48px]"
            >
              <span className="text-[#49474D]">Cancel</span>
            </button>
          </div>
          <div className="justify-end flex gap-18 w-full">
            <button
              onClick={() => track()}
              disabled={isLoading}
              type="submit"
              className="text-white bg-[#6530BC] hover:bg-[#44207E] border-[#6530BC] hover:border-[#44207E] rounded-lg w-full h-[48px]"
            >
              <span>Yes, Track</span>
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default TrackModal;
