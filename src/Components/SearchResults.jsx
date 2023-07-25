/* eslint-disable react/prop-types */
import "../App.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { DefaultMovies } from "./DefaultMovies";
import { handleAddToWatchList } from "../Hooks";

export const SearchResults = ({
  searchResults,
  loading,
  setWatchList,
  movieTitle,
}) => {
  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const moviesPerPage = 5;
  const pagesVisited = pageNumber * moviesPerPage;
  const pageCount = Math.ceil(searchResults.length / moviesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Display the movies
  const displayMovies = searchResults
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((movie) => {
      return (
        <button
          key={movie.id}
          className="text-sm font-medium border rounded-lg text-left bg-gray-700 border-gray-600 text-white flex justify-between items-center px-4 py-2 hover:bg-gray-600 cursor-pointer focus:ring-2 focus:outline-none focus:ring-gray-500 mb-2 transition ease-in-out duration-300"
          onClick={() => handleAddToWatchList(movie, setWatchList)}
        >
          <h4 className="text-base font-medium">{movie.title}</h4>
        </button>
      );
    });

  return (
    <div className="h-full bg-[#1e2a47] rounded-xl p-10 pb-14 shadow-xl sm:p-6 sm:pb-10">
      {/* If the loading state is true, display the loading message */}
      {loading && (
        <div className="h-full flex justify-center items-center">
          <p className="text-[#f9f9f9] text-lg font-light">Loading...</p>
        </div>
      )}
      {/* If the search input and the search results are empty, display the default movies */}
      {!loading && searchResults.length === 0 && movieTitle.length === 0 ? (
        <div className="h-full">
          {/* DefaultMovies component */}
          <DefaultMovies setWatchList={setWatchList} />
        </div>
        // If the search input is not empty and the search results are empty, display the message
      ) : !loading && movieTitle.length > 0 && searchResults.length === 0 ? (
        <div className="h-full flex justify-center items-center">
          <p className="text-[#f9f9f9] text-lg font-light">
            No movie found. Check your spelling and try again. 😔
          </p>
        </div>
      ) : (
        // If the search results are not empty, display the movies from the search results
        !loading &&
        searchResults.length > 0 && (
          <div className="flex flex-col gap-16 sm:gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-[#f9f9f9] text-left text-3xl font-mono">
                Search Results
              </h1>
              <p className="text-[#f9f9f9] font-light sm:text-sm">
                Click on a movie to add it to your wishlist
              </p>
            </div>
            <div className="flex flex-col gap-14">
              <div className="flex flex-col gap-3">{displayMovies}</div>
              <div>
                {/* Styling for the pagination component is in src\App.css */}
                {/* ReactPaginate component */}
                <ReactPaginate
                  previousLabel={"Prev"}
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
            </div>
          </div>
        )
      )}
    </div>
  );
};
