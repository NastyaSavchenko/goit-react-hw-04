import { useState } from "react";
import toast from "react-hot-toast";

function SearchBar({ handleSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    !inputValue
      ? toast.error("Oops! It seems like you forgot to type. 🫤")
      : handleSearch(inputValue);
  };

  const handleChangeInput = (e) => {
    const searchQuery = e.target.value.trim();
    setInputValue(searchQuery);
  };

  return (
    <header>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChangeInput}
          value={inputValue}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;
