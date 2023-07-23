import "./App.css";
import { useState } from "react";
import { SearchBar, WishList, SearchResults } from "./Components";
//import ReactPaginate from "react-paginate";

function App() {
  const [movieTitle, setMovieTitle] = useState("movie");
  const [searchResults, setSearchResults] = useState([]);
  const [loading , setLoading] = useState(false);

  return (
    <div className="bg-[#141d2f] min-h-screen flex gap-28 pt-28 px-20 pb-10">
      <div className="w-[45%] flex flex-col gap-16">
        <SearchBar movieTitle={movieTitle} setMovieTitle={setMovieTitle} setSearchResults={setSearchResults} setLoading={setLoading} />
        <SearchResults searchResults={searchResults} loading={loading} />
      </div>
      <div className="flex-grow">
        <WishList />
      </div>
    </div>
  );
}

export default App;
