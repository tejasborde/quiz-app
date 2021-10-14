import React from "react";

const Result = (props) => {
  const { quiz, totalCorrectAnswers } = props;
  return (
    <div>
      <div className="row que-option">Quiz Name : {quiz.name}</div>
      <div className="row que-option">Subject : {quiz.subject}</div>
      <div className="row que-option">
        Number of Questions : {quiz.no_of_questions}
      </div>
      <div className="row que-option">
        Your Correct Answers : {totalCorrectAnswers}
      </div>
      <div className="row que-option">
        Total Score : {(totalCorrectAnswers / quiz.no_of_questions) * 100 + ""}
        &#x25;
      </div>
    </div>
  );
};

export default Result;
