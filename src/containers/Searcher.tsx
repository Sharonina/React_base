import React from "react";
import SearchInput from "../components/SearchInput";
import UsersResults, { UsersData } from "../components/UsersResults";

//Styles
import "../styles/containers/Searcher.styl";

interface SearcherProps {
  setUserSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
  userSelected: string | undefined;
}

const Searcher = (props: SearcherProps) => {
  const { userSelected, setUserSelected } = props;
  const [user, setUser] = React.useState(/* <string | undefined> */ "");
  const [users, setUsers] = React.useState({
    items: [],
    total_count: "0",
  });
  const API = " https://api.github.com/search/users?per_page=5&q=";
  console.log(user);

  const handleChange = (text: string) => {
    setUser(text);
  };

  const handleClick = () => {
    getUsers(`${API}${user}`);
    setUserSelected(undefined);
  };

  const getUsers = async (api: string) => {
    const response = await fetch(api);
    setUsers(await response.json());
    return users;
  };

  return (
    <div className="searcher">
      <SearchInput
        handleClick={handleClick}
        handleChange={handleChange}
        user={user}
      />
      {!userSelected && (
        <UsersResults setUserSelected={setUserSelected} users={users} />
      )}
    </div>
  );
};

export default Searcher;
