import "./App.css";
import { useState } from "react";
import { SearchBar, WatchList, SearchResults } from "./Components";
//import ReactPaginate from "react-paginate";

function App() {
  const [movieTitle, setMovieTitle] = useState("movie");
  const [searchResults, setSearchResults] = useState([]);
  const [loading , setLoading] = useState(false);
  const [watchList, setWatchList] = useState([]);
 


  return (
    <div className="bg-[#141d2f] flex gap-28 pt-28 px-20 pb-28 overflow-hidden">
      <div className="w-[45%] flex flex-col gap-16">
        <SearchBar movieTitle={movieTitle} setMovieTitle={setMovieTitle} setSearchResults={setSearchResults} setLoading={setLoading} />
        <SearchResults searchResults={searchResults} loading={loading} setWatchList={setWatchList} />
      </div>
      <div className="flex-grow">
        <WatchList watchList={watchList} setWatchList={setWatchList} />
      </div>
    </div>
  );
}

export default App;
