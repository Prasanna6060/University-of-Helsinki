
const SearchFilter = ({ filter, handleFilterChange }) => {
    return (
      <p>
        filter shown with 
        <input 
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder='search'
        />
      </p>
    );
  }

export default SearchFilter
