import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1 className="title">Error...Page Not Found!</h1>
      <Link to="/">
        <button className="back">Back To Homepage</button>
      </Link>
    </div>
  );
};

export default Error;
