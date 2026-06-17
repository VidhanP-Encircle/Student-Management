const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search Students"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full border p-3 rounded mb-6"
    />
  );
};

export default SearchBar;
