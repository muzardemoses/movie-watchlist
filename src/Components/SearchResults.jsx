/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactPaginate from "react-paginate";

export const SearchResults = ({ searchResults, loading }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const moviesPerPage = 5;
  const pagesVisited = pageNumber * moviesPerPage;
  const pageCount = Math.ceil(searchResults.length / moviesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayMovies = searchResults
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((movie) => {
      return (
        <div key={movie.id} className="flex flex-col gap-4">
          <h4>{movie.title}</h4>
        </div>
      );
    });

  return (
    <div className="h-full bg-[#1e2a47] rounded-xl p-10 shadow-xl">
      {loading && (
        <div className="h-full flex justify-center items-center">
          <p className="text-[#f9f9f9] text-lg font-light">Loading...</p>
        </div>
      )}
      <h1 className="text-[#f9f9f9] text-left text-4xl font-mono">
        {SearchResults.length > 0 ? "Search Results" : "Search for a movie"}
      </h1>
      <p className="text-[#f9f9f9] text-base font-light">
        Click on a movie to add it to your wishlist
      </p>

      {!loading && searchResults.length === 0 ? (
        <div className="h-full flex justify-center items-center">
          <p className="text-[#f9f9f9] text-lg font-light">No results found</p>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <ul className="mt-10 grid grid-cols-2 gap-10">{displayMovies}</ul>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      )}
    </div>
  );
};
