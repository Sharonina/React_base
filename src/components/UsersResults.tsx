import React from "react";
import "../styles/components/UsersResults.styl";

interface UserResultsProps {
  users: UsersData;
  setUserSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface UsersData {
  items: User[];
  total_count: string;
}

export interface User {
  avatar_url: string;
  login: string;
  id: string;
}

const UsersResults = (props: UserResultsProps) => {
  const { users, setUserSelected } = props;
  console.log(users);
  const usersList = users?.items?.map((user: User) => {
    return (
      <div key={user.id} className="UsersResults">
        <img src={user.avatar_url} alt={user.login} />
        <span>{user.login}</span>
        <button onClick={() => setUserSelected(user.id)}>Details</button>
      </div>
    );
  });
  return <div className="UsersResultsContainer">{usersList}</div>;
};

export default UsersResults;
