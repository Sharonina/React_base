import React from "react";
import UserDetails from "../containers/UserDetails";
import Searcher from "../containers/Searcher";

//styles
import "../styles/pages/Home.styl";

const Home = () => {
  const [UserSelected, setUserSelected] = React.useState<string | undefined>(
    undefined
  );
  return (
    <>
      <div className="home">
        {UserSelected && <UserDetails />}
        <Searcher
          setUserSelected={setUserSelected}
          userSelected={UserSelected}
        />
      </div>
    </>
  );
};

export default Home;
