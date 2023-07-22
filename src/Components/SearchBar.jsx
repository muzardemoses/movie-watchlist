export const SearchBar = () => {
  return (
    <div className="relative">
      <div className="h-12 inset-y-0 left-0 flex items-center pl-3.5 absolute">
        <svg
          aria-hidden="true"
          className=" text-gray-200 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>

      <input
        type="search"
        placeholder="Search for a movie to add..."
        //value={updateUsers}
        //onChange={(e) => setUpdateUsers(e.target.value)}
        required
        className="text-gray-200 h-12 w-full rounded-md pl-14 bg-[#1e2a47] border-none transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
      />
    </div>
  );
};
