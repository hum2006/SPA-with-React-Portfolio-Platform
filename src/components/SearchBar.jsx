function SearchBar({ searchItem, onSearch }) {

    return (
        <label className="search-box">
            <span> Search Projects</span>
            <input
                type="text"
                value={searchItem}
                onChange={(event) => onSearch(event.target.value)}
                placeholder="Search by name or category"
            />
        </label>
    )
}

export default SearchBar;