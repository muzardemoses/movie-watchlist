export const handleRemoveMovie = (id, watchList, setWatchList) => {
    const newWatchList = watchList.filter((movie) => movie.id !== id);
    setWatchList(newWatchList);
    localStorage.setItem("watchList", JSON.stringify(newWatchList));
  };