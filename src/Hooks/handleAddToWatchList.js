export const handleAddToWatchList = (movie, setWatchList) => {
  // Retrieve the current watchlist from localStorage
  const currentWatchList = JSON.parse(
    localStorage.getItem("watchList") || "[]"
  );

  // Check if the movie already exists in the watchlist by its id
  const movieExists = currentWatchList.some((item) => item.id === movie.id);

  if (!movieExists) {
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

    //alert(movie.title + " added to watchlist");
  } else {
    alert(movie.title + " already exists in the watchlist");
  }
};
