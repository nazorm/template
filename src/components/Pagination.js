import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ templatesPerPage, totaltemplates, handlePageChange }) => {
  const displayPage = Math.ceil(totaltemplates / templatesPerPage);

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
