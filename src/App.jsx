import "./App.css";
import { SearchBar, WishList, SearchResults } from "./Components";

function App() {
  return (
    <div className="bg-[#141d2f] min-h-screen flex gap-28 pt-28 px-20 pb-10">
      <div className="flex-grow flex flex-col gap-16">
        <SearchBar />
        <SearchResults />
      </div>
      <div className="flex-grow">
        <WishList />
      </div>
    </div>
  );
}

export default App;
