import React from "react";
import { Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";

const Quizs = () => {
  return (
    <div className="quizs">
      <div className="container">
        <Link className="back-btn" to="/quizzes/subjects">
          <BiArrowBack />
        </Link>
      </div>
    </div>
  );
};

export default Quizs;
