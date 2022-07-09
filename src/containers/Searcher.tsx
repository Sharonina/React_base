import React from "react";
import SearchInput from "../components/SearchInput";
import UserResults from "../components/UsersResults";

//Styles
import "../styles/containers/Searcher.styl";

const Searcher = () => {
  const [user, setUser] = React.useState(/* <string | undefined> */ "");
  const [users, setUsers] = React.useState([]);
  const API = " https://api.github.com/search/users?q=";
  console.log(user);

  const handleChange = (text: string) => {
    setUser(text);
  };

  const handleClick = () => {
    getUsers(`${API}${user}`);
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
      <UserResults users={users} />
    </div>
  );
};

export default Searcher;
