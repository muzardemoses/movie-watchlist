/* eslint-disable react/prop-types */
import "../App.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export const SearchResults = ({ searchResults, loading, setWatchList }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const moviesPerPage = 5;
  const pagesVisited = pageNumber * moviesPerPage;
  const pageCount = Math.ceil(searchResults.length / moviesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleAddToWatchList = (movie) => {
    // Retrieve the current watchlist from localStorage
    const currentWatchList = JSON.parse(
      localStorage.getItem("watchList") || "[]"
    );

    // Update the movie object with the new properties
    const updatedMovie = {
      ...movie,
      isWatched: false, // Set isWatched to false by default
      ratingByUser: null, // Set ratingByUser to null by default
    };

    // Add the updated movie to the watchlist
    const updatedWatchList = [...currentWatchList, updatedMovie];

    // Save the updated watchlist to localStorage
    localStorage.setItem("watchList", JSON.stringify(updatedWatchList));

    // Update the watchlist state with the new movie
    setWatchList(updatedWatchList);

    console.log(movie.title + " added to watchlist");
  };

  const displayMovies = searchResults
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((movie) => {
      return (
        <button
          key={movie.id}
          className="text-sm font-medium border rounded-lg text-left bg-gray-700 border-gray-600 text-white flex justify-between items-center px-4 py-2 hover:bg-gray-600 cursor-pointer focus:ring-2 focus:outline-none focus:ring-gray-500 mb-2 transition ease-in-out duration-300"
          onClick={() => handleAddToWatchList(movie)}
        >
          <h4 className="text-base font-medium">{movie.title}</h4>
        </button>
      );
    });

  return (
    <div className="h-full bg-[#1e2a47] rounded-xl p-10 pb-14 shadow-xl">
      {loading && (
        <div className="h-full flex justify-center items-center">
          <p className="text-[#f9f9f9] text-lg font-light">Loading...</p>
        </div>
      )}

      {!loading && searchResults.length === 0 ? (
        <div className="h-full flex justify-center items-center">
          <p className="text-[#f9f9f9] text-lg font-light">
            No movie found. Check your spelling and try again. 😔
          </p>
        </div>
      ) : (
        !loading &&
        searchResults.length > 0 && (
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-3">
              <h1 className="text-[#f9f9f9] text-left text-3xl font-mono">
                {SearchResults.length > 0
                  ? "Search Results"
                  : "Search for a movie"}
              </h1>
              <p className="text-[#f9f9f9] font-light">
                Click on a movie to add it to your wishlist
              </p>
            </div>
            <div className="flex flex-col gap-14">
              <div className="flex flex-col gap-3">{displayMovies}</div>
              <div>
                {/* Styling for the pagination component is in src\App.css */}
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
