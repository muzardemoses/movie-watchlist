import "./App.css";
import { useState } from "react";
import { SearchBar, WatchList, SearchResults } from "./Components";

function App() {
  // State to store the movie title
  const [movieTitle, setMovieTitle] = useState("");

  // State to store the search results
  const [searchResults, setSearchResults] = useState([]);

  // State to store the loading state
  const [loading , setLoading] = useState(false);

  // State to store the watchlist
  const [watchList, setWatchList] = useState([]);
 


  return (
    <div className="bg-[#141d2f] min-h-screen flex gap-24 pt-28 px-20 pb-28 overflow-hidden xl:flex-col md:px-8 sm:pt-14 sm:pb-12 sm:gap-16 sm:px-5">
      <div className="w-[45%] flex flex-col gap-16 xl:w-full sm:gap-10">
        {/* SearchBar component  with props */}
        <SearchBar movieTitle={movieTitle} setMovieTitle={setMovieTitle} setSearchResults={setSearchResults} setLoading={setLoading} />

        {/* SearchResults component with props */}
        <SearchResults searchResults={searchResults} loading={loading} setWatchList={setWatchList} movieTitle={movieTitle} />
      </div>
      <div className="flex-grow">
        {/* WatchList component with props */}
        <WatchList watchList={watchList} setWatchList={setWatchList} />
      </div>
    </div>
  );
}

export default App;
