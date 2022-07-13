import React from "react";
import { User } from "../components/UsersResults";
import "../styles/containers/UserDetails.styl";

interface UserDetailsProps {
  userSelected: string | undefined;
}

const UserDetails = (props: UserDetailsProps) => {
  const { userSelected } = props;

  const [user, setUser] = React.useState<undefined | User>(undefined);

  const API = `https://api.github.com/users/${userSelected}`;

  const getUserDetails = async (api: string) => {
    const response = await fetch(api);
    setUser(await response.json());
    return user;
  };
  getUserDetails(API);

  return (
    <div className="userDetails">
      <img src={user?.avatar_url} />
      <div className="userDetailsText">
        <h1>{user?.name}</h1>
        <h2>{user?.login}</h2>
        <h4>{user?.location}</h4>
        <h4>{user?.email}</h4>
        <h4>{user?.bio}</h4>
      </div>
    </div>
  );
};

export default UserDetails;
