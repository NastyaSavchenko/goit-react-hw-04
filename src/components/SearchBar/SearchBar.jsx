import { useState } from "react";

function SearchBar({ handleSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputValue.trim());
  };

  return (
    <header>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;
