/* eslint-disable react/prop-types */
import { useEffect } from "react";

export const WatchList = ({ watchList, setWatchList }) => {
  useEffect(() => {
    const savedWatchList = JSON.parse(localStorage.getItem("watchList"));
    setWatchList(savedWatchList || []);
  }, [setWatchList]);

  const handleRemoveMovie = (id) => {
    const newWatchList = watchList.filter((movie) => movie.id !== id);
    setWatchList(newWatchList);
    localStorage.setItem("watchList", JSON.stringify(newWatchList));
  };

  //const res = JSON.parse(localStorage.getItem("watchList")) || [];

  return (
    <div className="bg-[#1e2a47] rounded-xl p-6 shadow-xl flex flex-col gap-10 h-full">
      <h1 className="text-white text-left text-3xl font-mono">
        Your Watchlist
      </h1>
      <div className="h-full flex justify-center items-center">
        {watchList.length === 0 ? (
          <h3 className="text-white text-center text-xl">
            Your Watchlist is Empty
          </h3>
        ) : (
          <div className="w-full flex flex-col gap-4 py-10 overflow-y-auto h-[60vh] watchlist-container">
            {watchList.map((movie) => (
              <div
                key={movie.id}
                className="w-full flex flex-col bg-[#12234b] rounded-xl px-4 py-4 gap-4 transition ease-in-out duration-300"
              >
                <div className="flex justify-between items-start gap-16">
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
                  <button
                    className="text-white p-2 rounded-full bg-[#1b2c52] hover:bg-[#1e2a47] transition ease-in-out duration-300"
                    onClick={() => handleRemoveMovie(movie.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <div>{movie.release_date}</div>
              </div>
            ))}
            {/* {res.map((movie) => (
              <div key={movie.id} className="flex justify-between items-center bg-slate-200">
                {movie.title}
                </div>
            ))} */}
          </div>
        )}
      </div>
    </div>
  );
};
