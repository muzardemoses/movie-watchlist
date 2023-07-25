export const handleRemoveMovie = (id, watchList, setWatchList) => {
  // Create a new array (newWatchList) by filtering through the watchList array and removing the movie whose id matches the id provided as the parameter
    const newWatchList = watchList.filter((movie) => movie.id !== id);

    // Update the state 'watchList' with the newWatchList
    setWatchList(newWatchList);

    // Update the watchList in the browser's localStorage with the newWatchList
    localStorage.setItem("watchList", JSON.stringify(newWatchList));
  };