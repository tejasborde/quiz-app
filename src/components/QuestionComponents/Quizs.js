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
        {QuizList.map((quiz) => {
          if (quiz.subject === subject) {
            return (
              <div className="container quiz-list-component">
                <div className="row">
                  <div className="col-6">
                    <div className="row">Name : {quiz.name}</div>
                    <div className="row">Subject : {quiz.subject}</div>
                    <div className="row">
                      Number of Questions : {quiz.no_of_questions}
                    </div>
                  </div>
                  <div className="col-6 take-test">
                    <div className="row">
                      <Link to={"/quiz/" + quiz._id}>
                        <button className="quiz-btn">Take a Quiz</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>
    </div>
  );
};

export default Quizs;
