import React from "react";
interface UserResultsProps {
  users: any;
}
const UsersResults = (props: UserResultsProps) => {
  const { users } = props;
  console.log(users);
  return <div>UserResults</div>;
};

export default UsersResults;
