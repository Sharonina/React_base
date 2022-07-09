import React from "react";

interface SearchInputProps {
  handleChange: (text: string) => void;
  handleClick: () => void;
  user: string;
}

const SearchInput = (props: SearchInputProps) => {
  const { user, handleClick, handleChange } = props;
  return (
    <div>
      <input
        type="text"
        value={user}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchInput;
