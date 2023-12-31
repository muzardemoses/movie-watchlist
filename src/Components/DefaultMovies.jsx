/* eslint-disable react/prop-types */
import "../App.css";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { handleAddToWatchList } from "../Hooks";

export const DefaultMovies = ({ setWatchList }) => {
  // Set the state for the default movies
  const [defaultMovies, setDefaultMovies] = useState([]);

  // Set the state for the loading state
  const [loading, setLoading] = useState(true);

  // Get the API key from the environment variable
  const VITE_API_KEY = import.meta.env.VITE_API_KEY;

  // Fetch the data from the API
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${VITE_API_KEY}`,
      },
    };
    setLoading(true);
    fetch("https://api.themoviedb.org/3/trending/movie/day", options)
      .then((response) => response.json())
      .then((response) => {
        setDefaultMovies(response.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [VITE_API_KEY]);

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const moviesPerPage = 5;
  const pagesVisited = pageNumber * moviesPerPage;
  const pageCount = Math.ceil(defaultMovies.length / moviesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Display the movies
  const displayMovies = defaultMovies
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
    <div>
        {/* If the loading state is true, display the loading message */}
      {loading && (
        <div className="h-full flex justify-center items-center">
          <p className="text-[#f9f9f9] text-lg font-light">Loading...</p>
        </div>
      )}

      {/* If the default movies are empty, display the message */}
      {!loading && defaultMovies.length === 0 ? (
        <div className="h-full flex ">
          <p className="text-[#f9f9f9] text-lg font-light">No movie found.</p>
        </div>
      ) : (
        // If the default movies are not empty, display the movies
        !loading &&
        defaultMovies.length > 0 && (
          <div className="flex flex-col gap-16 sm:gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-[#f9f9f9] text-left text-3xl font-mono">
                Trending Movies
              </h1>
              <p className="text-[#f9f9f9] font-light sm:text-sm">
                Click on a movie to add it to your wishlist
              </p>
            </div>
            <div className="flex flex-col gap-14">
              {/*  Display the movies */}
              <div className="flex flex-col gap-3">{displayMovies}</div>

              {/*  Pagination */}
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
        )
      )}
    </div>
  );
};
