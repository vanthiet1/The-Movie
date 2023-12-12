import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
const pageButtons = [...Array(totalPages)].map((_,index) => index + 1);

  return (
    <div>
      {pageButtons.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`bg-gray-500 p-2 m-2 rounded-md ${pageNumber === currentPage ? 'bg-blue-500 text-white' : ''}`}
        >
          {`Trang ${pageNumber}`}
        </button>
      
      ))}
    </div>
  );
};

export default Pagination;