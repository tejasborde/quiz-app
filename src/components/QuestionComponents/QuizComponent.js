import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Result from "./Result";

const QuizComponent = (props) => {
  const { quiz_id } = useParams();
  const quiz = props.QuizList[quiz_id - 1];
  const [currentQuestion, setcurrentQuestion] = useState(quiz.Questions[0]);
  const [allowResponse, setallowResponse] = useState(true);
  const [currentQuestionStatus, setcurrentQuestionStatus] = useState(null);
  const [quizEnd, setquizEnd] = useState(false);
  const [totalCorrectAnswers, settotalCorrectAnswers] = useState(0);
  const [displayResult, setdisplayResult] = useState(false);
  console.log(quiz);

  const nextQuestion = () => {
    if (currentQuestion.que_no === quiz.no_of_questions - 1) {
      setquizEnd(true);
    }
    setcurrentQuestion(quiz.Questions[currentQuestion.que_no]);
    setallowResponse(true);
  };

  const checkAnswer = (clickedoption) => {
    if (allowResponse) {
      if (
        currentQuestion.options[clickedoption] === currentQuestion.correct_ans
      ) {
        setcurrentQuestionStatus({
          status: "correct",
          correct_answer: currentQuestion.correct_ans,
        });
        settotalCorrectAnswers(totalCorrectAnswers + 1);
      } else {
        setcurrentQuestionStatus({
          status: "incorrect",
          correct_answer: currentQuestion.correct_ans,
        });
      }
      setallowResponse(false);
    }
  };
  return (
    <div className="quiz-component">
      <div className="container quiz-question-component">
        {!displayResult ? (
          <>
            <div className="row " style={{ fontWeight: 700 }}>
              Question No : {currentQuestion.que_no}
            </div>
            <div className="row problem-statment">
              {currentQuestion.que_statement}
            </div>

            {currentQuestion.options.map((option, index) => {
              return (
                <div className="row que-option" key={index}>
                  <div
                    className="col"
                    style={{ textAlign: "left" }}
                    onClick={() => {
                      checkAnswer(index);
                    }}
                  >
                    {" "}
                    <span style={{ padding: "1rem" }}>{option}</span>
                  </div>
                </div>
              );
            })}

            {currentQuestionStatus ? (
              <>
                {currentQuestionStatus.status === "incorrect" ? (
                  <div className="answer ">
                    <div className="row answer-row-1 red">
                      Ooops !!! Incorrect Answer.
                    </div>
                    <div className="row answer-row-2 red">
                      Correct Answer : {currentQuestionStatus.correct_answer}
                    </div>
                  </div>
                ) : (
                  <div className="answer ">
                    <div className="row answer-row-1 green">
                      Your answer is correct !!!
                    </div>
                    <div className="row answer-row-2 green">
                      Correct Answer : {currentQuestionStatus.correct_answer}
                    </div>
                  </div>
                )}

                <div className="row next-btn">
                  {!quizEnd ? (
                    <button
                      className="quiz-next-btn"
                      onClick={() => {
                        nextQuestion();
                        setcurrentQuestionStatus(null);
                      }}
                    >
                      NEXT
                    </button>
                  ) : (
                    <button
                      className="quiz-next-btn"
                      onClick={() => {
                        setdisplayResult(true);
                      }}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          <Result quiz={quiz} totalCorrectAnswers={totalCorrectAnswers} />
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
