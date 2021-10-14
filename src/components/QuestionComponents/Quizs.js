import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Quizzs } from "../../App";
import { BiArrowBack } from "react-icons/bi";

const Quizs = (props) => {
  const QuizList = useContext(Quizzs);
  const { subject } = useParams();

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
