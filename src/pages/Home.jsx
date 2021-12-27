import React from "react";
import { Link } from "react-router-dom";
import "styles/pages/home.scss";
const Home = () => {
  return (
    <div className="home__Container">
      <Link className="link__Wrapper" to="/candidates">
        Candidates
      </Link>
      <Link className="link__Wrapper" to="/about">
        About
      </Link>
    </div>
  );
};

export default Home;
