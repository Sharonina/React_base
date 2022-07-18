import React from "react";
import { User } from "../components/UsersResults";
import "../styles/containers/UserDetails.styl";

interface UserDetailsProps {
  userSelected: string | undefined;
}

interface OrganizationsI {
  avatar_url: string;
  login: string;
  id: string;
}

const UserDetails = (props: UserDetailsProps) => {
  const { userSelected } = props;

  const [user, setUser] = React.useState<undefined | User>(undefined);
  const [organizations, setOrganizations] = React.useState<
    undefined | OrganizationsI[]
  >(undefined);

  const API = `https://api.github.com/users/${userSelected}`;
  const API_org = `https://api.github.com/users/${userSelected}/orgs`;

  const getUserDetails = async (api: string) => {
    const response = await fetch(api);
    setUser(await response.json());
  };

  const getOrganizations = async (api: string) => {
    const response = await fetch(api);
    setOrganizations(await response.json());
  };

  React.useEffect(() => {
    getUserDetails(API);
    getOrganizations(API_org);
  }, []);

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
      {organizations?.map((organization) => (
        <div key={organization?.id}>
          <div className="organizations">
            <img src={organization?.avatar_url} />
          </div>
          <h4>{organization?.login}</h4>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
