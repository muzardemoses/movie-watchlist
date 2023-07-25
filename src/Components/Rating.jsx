/* eslint-disable react/prop-types */
import { handleRating } from "../Hooks";
import NoRatedStarSVG from "../assets/NoRatedStar.svg";
import RatedStarSVG from "../assets/RatedStar.svg";

// Rating component
export const Rating = ({movie, watchList, setWatchList }) => {
    return (
        <div className="flex gap-1 items-center">
        <p className="text-sm font-light">Rate: </p>
        <button
          onClick={() =>
            handleRating(movie.id, 1, watchList, setWatchList)
          }
        >
          {" "}
          <img
            src={
              movie.ratingByUser >= 1
                ? RatedStarSVG
                : NoRatedStarSVG
            }
            alt="Rated Star"
            className="h-5 w-5 sm:h-4 sm:w-4"
          />
        </button>
        <button
          onClick={() =>
            handleRating(movie.id, 2, watchList, setWatchList)
          }
        >
          {" "}
          <img
            src={
              movie.ratingByUser >= 2
                ? RatedStarSVG
                : NoRatedStarSVG
            }
            alt="Rated Star"
            className="h-5 w-5 sm:h-4 sm:w-4"
          />
        </button>
        <button
          onClick={() =>
            handleRating(movie.id, 3, watchList, setWatchList)
          }
        >
          {" "}
          <img
            src={
              movie.ratingByUser >= 3
                ? RatedStarSVG
                : NoRatedStarSVG
            }
            alt="Rated Star"
            className="h-5 w-5 sm:h-4 sm:w-4"
          />
        </button>
        <button
          onClick={() =>
            handleRating(movie.id, 4, watchList, setWatchList)
          }
        >
          {" "}
          <img
            src={
              movie.ratingByUser >= 4
                ? RatedStarSVG
                : NoRatedStarSVG
            }
            alt="Rated Star"
            className="h-5 w-5 sm:h-4 sm:w-4"
          />
        </button>
        <button
          onClick={() =>
            handleRating(movie.id, 5, watchList, setWatchList)
          }
        >
          {" "}
          <img
            src={
              movie.ratingByUser >= 5
                ? RatedStarSVG
                : NoRatedStarSVG
            }
            alt="Rated Star"
            className="h-5 w-5 sm:h-4 sm:w-4"
          />
        </button>
      </div>
    )
}