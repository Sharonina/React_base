import React from "react";
import "../styles/components/SearchInput.styl";

interface SearchInputProps {
  handleChange: (text: string) => void;
  handleClick: () => void;
  user: string;
}

const SearchInput = (props: SearchInputProps) => {
  const { user, handleClick, handleChange } = props;
  return (
    <>
      <div className="github-logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="github logo"
        />
      </div>
      <div className="input-searcher">
        <input
          type="text"
          value={user}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </div>
    </>
  );
};

export default SearchInput;
