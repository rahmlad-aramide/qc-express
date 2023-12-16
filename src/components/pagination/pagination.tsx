
import React from "react";
import { usePagination, DOTS } from "../../custom-hooks/usePagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type ICurrentPage = number;

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: ICurrentPage;
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount = 3,
  siblingCount = 1,
  currentPage = 1,
}) => {
  const paginationRange: (string | number)[] | undefined = usePagination({
    currentPage,
    totalCount,
    siblingCount,
  });

  if (currentPage === 0 || paginationRange && paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  
  const lastPage = paginationRange && paginationRange[paginationRange?.length - 1];

  return (
    <div className="flex justify-center mt-2 mb-4 gap-x-2">
      <button
        disabled={currentPage === 1}
        className={
          currentPage === 1
            ? "text-grayish-600/50 bg-grayish-400/30 cursor-not-allowed py-1 px-2 rounded"
            : "text-grayish-600 bg-grayish-400/30 py-1 px-2 rounded"
        }
        onClick={onPrevious}
      >
        <IoIosArrowBack />
      </button>
      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <button
              className="text-grayish-600/50 bg-grayish-400/30 cursor-not-allowed py-1 px-2 rounded"
              key={index}
            >
              &#8230;
            </button>
          );
        }

        return (
          <button
            key={index}
            className={
              pageNumber === currentPage
                ? "text-primary bg-primary/30 py-1 px-3 rounded font-medium"
                : "text-grayish-600 bg-grayish-400/30 py-1 px-3 rounded font-medium"
            }
            onClick={() => onPageChange(Number(pageNumber))}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        disabled={currentPage === lastPage}
        className={
          currentPage === lastPage
            ? "text-grayish-600/50 bg-grayish-400/30 cursor-not-allowed py-1 px-2 rounded"
            : "text-grayish-600 bg-grayish-400/30 py-1 px-2 rounded"
        }
        onClick={onNext}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
