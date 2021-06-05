import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ templatesPerPage, totaltemplates, handlePageChange }) => {
  const pageNumbers = [];

  const displayPage = Math.ceil(totaltemplates / templatesPerPage);
  for (let i = 1; i <= displayPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pages-container">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={displayPage}
        onPageChange={handlePageChange}
        containerClassName={"pageBtns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        activeLinkClassName={"activePage"}
      />
    </div>
  );
};

export default Pagination;
