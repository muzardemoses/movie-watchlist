export  const handleWatched = (id, watchList, setWatchList) => {
    // Create a new array (newWatchList) by mapping through the watchList array
    const newWatchList = watchList.map((movie) => {
      // For each movie in the watchList, check if its id matches the id provided as the parameter
      if (movie.id === id) {
        // If the id matches, create a new object with the same movie properties but toggle the 'isWatched' property
        // If 'isWatched' was true, it will be set to false; if 'isWatched' was false, it will be set to true
        return {
          ...movie,
          isWatched: !movie.isWatched,
        };
      }
      // For movies whose id doesn't match the provided id, return them as they are without any changes
      return movie;
    });

    // Update the state 'watchList' with the newWatchList
    setWatchList(newWatchList);

    // Update the watchList in the browser's localStorage with the newWatchList
    localStorage.setItem("watchList", JSON.stringify(newWatchList));
  };