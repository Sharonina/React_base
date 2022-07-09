import React from "react";
import UserDetails from "../containers/UserDetails";
import Searcher from "../containers/Searcher";

//styles
import "../styles/pages/Home.styl";

const Home = () => {
  const isUserSelected = false;
  return (
    <>
      <div className="home">
        {isUserSelected && <UserDetails />}
        <Searcher />
      </div>
    </>
  );
};

export default Home;
