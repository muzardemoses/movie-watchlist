/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Rating } from "./Rating";
import { handleRemoveMovie, handleWatched } from "../Hooks";
import CloseSVG from "../assets/Close.svg";


export const WatchList = ({ watchList, setWatchList }) => {
  // State to store and toggle the filter
  const [showWatchedOnly, setShowWatchedOnly] = useState(false);

  // Function to set the filter in the local storage
  const handleSetFilter = (filter) => {
    setShowWatchedOnly(filter);
    localStorage.setItem("showWatchedOnly", JSON.stringify(filter));
  };

  // Get the watchlist from the local storage
  useEffect(() => {
    const savedWatchList = JSON.parse(localStorage.getItem("watchList"));
    setWatchList(savedWatchList || []);
  }, [setWatchList]);

  // Set the filter from the local storage
  useEffect(() => {
    const savedFilter = JSON.parse(localStorage.getItem("showWatchedOnly"));
    if (savedFilter) {
      setShowWatchedOnly(savedFilter);
    }
  }, []);

  // Filter the watchList based on showWatchedOnly state
  const filteredWatchList = showWatchedOnly
    ? watchList.filter((movie) => movie.isWatched)
    : watchList;

  return (
    <div className="bg-[#1e2a47] rounded-xl p-6 pt-8 shadow-xl flex flex-col gap-10 h-full sm:p-4 sm:pt-6">
      <div className="flex justify-between items-center sm:flex-col sm:gap-3 sm:items-start">
        <h1 className="text-white text-left text-3xl font-mono sm:text-2xl">
          Your Watchlist
        </h1>
        <div className="flex items-center gap-3 sm:gap-1 sm:place-selfend">
          <h4 className="text-white text-sm font-light">Filter by: </h4>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleSetFilter(false)}
              className={`text-white text-base font-semibold border-[#1e2a47] border-b-2 hover:border-white transition ease-in-out duration-300 sm:text-sm
               ${
                 !showWatchedOnly
                   ? "text-blue-500 border-blue-500 hover:border-blue-500 transition ease-in-out duration-300"
                   : ""
               }
              `}
            >
              All
            </button>
            <p className="text-white text-base font-semibold sm:text-sm">/</p>
            <button
              onClick={() => handleSetFilter(true)}
              className={`text-white text-base font-semibold border-[#1e2a47] border-b-2 hover:border-white transition ease-in-out duration-300 sm:text-sm
                ${
                  showWatchedOnly
                    ? "text-blue-500 border-blue-500 hover:border-blue-500 transition ease-in-out duration-300"
                    : ""
                }
              `}
            >
              Watched
            </button>
          </div>
        </div>
      </div>

      <div className="h-full flex justify-center">
        {/*  If the watchlist is empty, display the message */}
        {filteredWatchList.length === 0 ? (
          <h3 className="flex justify-center items-center text-white text-center text-xl xl:min-h-[300px]">
            Your Watchlist is Empty
          </h3>
        ) : (
          <div className="w-full flex flex-col items-start gap-4 pb-8 overflow-y-auto max-h-[58vh] watchlist-container xl:min-h-[300px] xl:max-h-[60vh]">
            {/*  Display watchlist movies */}
            {filteredWatchList.map((movie) => (
              <div
                key={movie.id}
                className="w-full flex flex-col bg-[#12234b] rounded-xl px-4 py-4 gap-1.5 transition ease-in-out duration-300"
              >
                <div className="flex justify-between items-start gap-16 sm:gap-5">
                  {" "}
                  <h1 className="">
                    <span className="text-gray-300 text-base font-light">
                      {movie.title}
                    </span>
                    <span className="text-gray-200 text-sm font-light">
                      {" "}
                      ({movie.release_date.slice(0, 4)})
                    </span>
                  </h1>
                  {/*  Remove movie from watchlist */}
                  <button
                    className="text-white p-2 rounded-full bg-[#1b2c52] hover:bg-[#1e2a47] transition ease-in-out duration-300"
                    onClick={() =>
                      handleRemoveMovie(movie.id, watchList, setWatchList)
                    }
                  >
                    <img src={CloseSVG} alt="Close" className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex gap-5 text-white">
                  <div className="flex gap-1 items-center">
                    <p className="text-sm font-light">Watched: </p>
                    {/*  Toggle the watched state of the movie */}
                    <input
                      type="checkbox"
                      checked={movie.isWatched}
                      onChange={() =>
                        handleWatched(movie.id, watchList, setWatchList)
                      }
                      className="cursor-pointer"
                    />
                  </div>
                  {/*  Display and rate the movie component */}
                  <Rating
                    movie={movie}
                    watchList={watchList}
                    setWatchList={setWatchList}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
