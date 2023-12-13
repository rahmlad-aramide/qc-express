import React, { useState, useEffect } from 'react';
import { Doc } from '../../pages/more-types';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


interface MorePaginationProps {
  data: {
    docs: Doc[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
  };
  onPageChange: (page: number) => void;
  isMoreLoading: boolean;
  errMoreMessage: string;
}

const MorePagination: React.FC<MorePaginationProps> = ({ data, onPageChange, isMoreLoading, errMoreMessage }) => {
  const { totalPages, page, hasPrevPage, hasNextPage, prevPage, nextPage } = data||{};

  const [pages, setPages] = useState<number[]>([]);
  const currentPage = page;

  useEffect(() => {
    // Generate an array of page numbers based on the total number of pages
    const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);
    setPages(pagesArray);
  }, [totalPages]);

  if(isMoreLoading || errMoreMessage || !data || !pages) return;
  
  return (
    <div className="flex justify-center mt-2 mb-4 gap-x-2">
      <button 
        disabled={!hasPrevPage}
        className={
          !hasPrevPage
            ? "text-grayish-600/50 bg-grayish-400/30 cursor-not-allowed py-1 px-2 rounded"
            : "text-grayish-600 bg-grayish-400/30 py-1 px-2 rounded"
        }
        onClick={() => onPageChange(prevPage!)} 
      >
        <IoIosArrowBack />
      </button>

      {pages.length > 10 ? (
        <div>
          <button onClick={() => onPageChange(1)}>1</button>
          {page > 3 && 
          <button
          className="text-grayish-600/50 bg-grayish-400/30 cursor-not-allowed py-1 px-2 rounded"
        >
          &#8230;
        </button>}

          {pages.slice(Math.max(0, page - 3), Math.min(page + 2, totalPages)).map((pageNumber) => (
            <button key={pageNumber} onClick={() => onPageChange(pageNumber)}
            className={
              pageNumber === currentPage
                ? "text-primary bg-primary/30 py-1 px-3 rounded font-medium"
                : "text-grayish-600 bg-grayish-400/30 py-1 px-3 rounded font-medium"
            }
            >
              {pageNumber}
            </button>
          ))}

          {page < totalPages - 2 && 
          <button
              className="text-grayish-600/50 bg-grayish-400/30 cursor-not-allowed py-1 px-2 rounded"
            >
              &#8230;
            </button>}
          <button onClick={() => onPageChange(totalPages)}>{totalPages}</button>
        </div>
      ) : (
        <div>
          {pages.map((pageNumber) => (
            <button key={pageNumber} onClick={() => onPageChange(pageNumber)}
            className={
              pageNumber === currentPage
                ? "text-primary bg-primary/30 py-1 px-3 rounded font-medium"
                : "text-grayish-600 bg-grayish-400/30 py-1 px-3 rounded font-medium"
            }
            >
              {pageNumber}
            </button>
          ))}
        </div>
      )}

      <button onClick={() => onPageChange(nextPage!)} disabled={!hasNextPage}
      className={
        !hasNextPage
          ? "text-grayish-600/50 bg-grayish-400/30 cursor-not-allowed py-1 px-2 rounded"
          : "text-grayish-600 bg-grayish-400/30 py-1 px-2 rounded"
      }
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default MorePagination;
