import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Quizzs } from "../../App";
import { BiArrowBack } from "react-icons/bi";

const Quizs = (props) => {
  const QuizList = useContext(Quizzs);
  const [Quizs, setQuizs] = useState([]);
  const { subject } = useParams();

  useEffect(() => {
    let data = QuizList.map((quiz) => {
      if (quiz.subject === subject) {
        return quiz;
      }
    });
    setQuizs(data);
  }, [subject, QuizList]);

  return (
    <div className="quizs">
      <div className="container">
        <Link className="back-btn" to="/quizzes/subjects">
          <BiArrowBack />
        </Link>
        {Quizs.length > 0 ? (
          Quizs.map((quiz) => {
            return (
              <div className="container quiz-list-component">
                <div className="row">
                  <div className="col-6">
                    <div className="row">Name : {quiz.name}</div>
                    <div className="row">Subject : {quiz.subject}</div>
                    {/* <div className="row">Topic : {quiz.topic}</div> */}
                    <div className="row">
                      Number of Questions : {quiz.Questions.length}
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
          })
        ) : (
          <span style={{ color: "white" }}>
            No Quizs of Subject : {subject}
          </span>
        )}
      </div>
    </div>
  );
};

export default Quizs;
