import React from "react";
import {Link} from 'react-router-dom'
const HomePublic = () => {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Link to={"/register"}>
          <button className="btn btn-primary">Sign up</button>
        </Link>
        <Link to={"login"}>
          <button className="btn btn-primary ms-2">Login</button>
        </Link>
      </div>
    </>
  );
};

export default HomePublic;
