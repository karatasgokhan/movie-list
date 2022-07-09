import React, { useState } from "react";

export default function SearchBar() {
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <div className="search-block">
      <label>
        <input
          type="text"
          placeholder="Search for a movie, tv show, person......"
          onChange={handleChange}
        />
      </label>
      <input className="search-button" type="submit" value="Search" />
    </div>
  );
}
