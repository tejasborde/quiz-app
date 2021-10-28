import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import Result from "./Result";
import { MdClear } from "react-icons/md";

// const QuizComponent = (props) => {
//   const { quiz_id } = useParams();
//   const quiz = props.QuizList[quiz_id - 1];
//   const [currentQuestion, setcurrentQuestion] = useState(quiz.Questions[0]);
//   const [allowResponse, setallowResponse] = useState(true);
//   const [currentQuestionStatus, setcurrentQuestionStatus] = useState(null);
//   const [quizEnd, setquizEnd] = useState(false);
//   const [totalCorrectAnswers, settotalCorrectAnswers] = useState(0);
//   const [displayResult, setdisplayResult] = useState(false);
//   console.log(quiz);

//   const nextQuestion = () => {
//     if (currentQuestion.que_no === quiz.no_of_questions - 1) {
//       setquizEnd(true);
//     }
//     setcurrentQuestion(quiz.Questions[currentQuestion.que_no]);
//     setallowResponse(true);
//   };

//   const checkAnswer = (clickedoption) => {
//     if (allowResponse) {
//       if (
//         currentQuestion.options[clickedoption] === currentQuestion.correct_ans
//       ) {
//         setcurrentQuestionStatus({
//           status: "correct",
//           correct_answer: currentQuestion.correct_ans,
//         });
//         settotalCorrectAnswers(totalCorrectAnswers + 1);
//       } else {
//         setcurrentQuestionStatus({
//           status: "incorrect",
//           correct_answer: currentQuestion.correct_ans,
//         });
//       }
//       setallowResponse(false);
//     }
//   };
//   return (
//     <div className="quiz-component">
//       <div className="container quiz-question-component">
//         {!displayResult ? (
//           <>
//             <div className="row " style={{ fontWeight: 700 }}>
//               Question No : {currentQuestion.que_no}
//             </div>
//             <div className="row problem-statment">
//               {currentQuestion.que_statement}
//             </div>

//             {currentQuestion.options.map((option, index) => {
//               return (
//                 <div className="row que-option" key={index}>
//                   <div
//                     className="col"
//                     style={{ textAlign: "left" }}
//                     onClick={() => {
//                       checkAnswer(index);
//                     }}
//                   >
//                     {" "}
//                     <span style={{ padding: "1rem" }}>{option}</span>
//                   </div>
//                 </div>
//               );
//             })}

//             {currentQuestionStatus ? (
//               <>
//                 {currentQuestionStatus.status === "incorrect" ? (
//                   <div className="answer ">
//                     <div className="row answer-row-1 red">
//                       Ooops !!! Incorrect Answer.
//                     </div>
//                     <div className="row answer-row-2 red">
//                       Correct Answer : {currentQuestionStatus.correct_answer}
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="answer ">
//                     <div className="row answer-row-1 green">
//                       Your answer is correct !!!
//                     </div>
//                     <div className="row answer-row-2 green">
//                       Correct Answer : {currentQuestionStatus.correct_answer}
//                     </div>
//                   </div>
//                 )}

//                 <div className="row next-btn">
//                   {!quizEnd ? (
//                     <button
//                       className="quiz-next-btn"
//                       onClick={() => {
//                         nextQuestion();
//                         setcurrentQuestionStatus(null);
//                       }}
//                     >
//                       NEXT
//                     </button>
//                   ) : (
//                     <button
//                       className="quiz-next-btn"
//                       onClick={() => {
//                         setdisplayResult(true);
//                       }}
//                     >
//                       Submit
//                     </button>
//                   )}
//                 </div>
//               </>
//             ) : (
//               ""
//             )}
//           </>
//         ) : (
//           <Result quiz={quiz} totalCorrectAnswers={totalCorrectAnswers} />
//         )}
//       </div>
//     </div>
//   );
// };

// Display Answer Code
// {optionClicked[0] && index === optionClicked[1] ? (
//   optionClicked[2] ? (
//     <div
//       className="col-sm-1 option-block green"
//       style={{ fontWeight: "600" }}
//     >
//       {/* Correct Answer : {optionClicked[3]} */}
//       Correct
//     </div>
//   ) : (
//     <div className="col-sm-1 option-block red" style={{ fontWeight: "600" }}>
//       {/* Correct Answer : {optionClicked[3]} */}
//       Incorrect
//     </div>
//   )
// ) : (
//   ""
// )}

const QuizComponent = (props) => {
  const { quiz_id } = useParams();
  const quiz = props.QuizList[quiz_id - 1];
  const [questions, setQuestions] = useState(quiz.Questions);
  const [optionClicked, setoptionClicked] = useState([false]);
  const [searchValue, setsearchValue] = useState("");

  const displaySearchedRecords = (searchText) => {
    searchText = searchText.trim();
    if (searchText !== null && searchText !== "" && searchText !== undefined) {
      const searchRecords = [];
      quiz.Questions.forEach((record) => {
        let no = record.que_no.toString();
        if (no.startsWith(searchText)) {
          searchRecords.push(record);
        }
      });
      setQuestions(searchRecords);
    } else {
      setQuestions(quiz.Questions);
    }
  };

  const displayAnswer = (given_ans, questionData, index) => {
    if (given_ans === questionData.correct_ans) {
      console.log("correct");
      setoptionClicked([
        true,
        index,
        true,
        questionData.correct_ans,
        given_ans,
      ]);
    } else {
      console.log("incorrect");
      setoptionClicked([
        true,
        index,
        false,
        questionData.correct_ans,
        given_ans,
      ]);
    }
  };

  return (
    <div className="quiz-component">
      <div className="container quiz-question-component quiz-title">
        <p style={{ fontWeight: "600" }}>
          Chapter-{quiz.chapter_no}-{quiz.name}
        </p>
      </div>
      <div className="container quiz-question-component">
        <div className="search-box mb-3">
          <span className="col-sm-2">
            <input
              // className="form-control"
              placeholder="Search Question No..."
              value={searchValue}
              onChange={(e) => {
                displaySearchedRecords(e.target.value);
                setsearchValue(e.target.value);
              }}
            />
          </span>
          <span className="col-sm-2">
            <MdClear
              size={25}
              style={{ marginTop: "6", cursor: "pointer" }}
              onClick={() => {
                setsearchValue("");
                setQuestions(quiz.Questions);
                setoptionClicked([false]);
              }}
            />
          </span>
        </div>
        <div className="container questions">
          {questions.length > 0
            ? questions.map((question, index) => {
                return (
                  <>
                    <div
                      className="row my-2"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="col-sm-2 question-no-block">
                        Question {question.que_no}
                      </div>
                      <div
                        className="col-sm-2 option-block"
                        onClick={() => {
                          displayAnswer("A", question, index);
                        }}
                        style={
                          optionClicked[1] === index &&
                          optionClicked[4] === "A" &&
                          optionClicked[3] === "A"
                            ? { background: "greenyellow", color: "black" }
                            : optionClicked[1] === index &&
                              optionClicked[4] === "A" &&
                              optionClicked[3] !== "A"
                            ? { background: "red", color: "black" }
                            : {}
                        }
                      >
                        A
                      </div>
                      <div
                        className="col-sm-2 option-block"
                        onClick={() => {
                          displayAnswer("B", question, index);
                        }}
                        style={
                          optionClicked[1] === index &&
                          optionClicked[4] === "B" &&
                          optionClicked[3] === "B"
                            ? { background: "greenyellow", color: "black" }
                            : optionClicked[1] === index &&
                              optionClicked[4] === "B" &&
                              optionClicked[3] !== "B"
                            ? { background: "red", color: "black" }
                            : {}
                        }
                      >
                        B
                      </div>
                      <div
                        className="col-sm-2 option-block"
                        onClick={() => {
                          displayAnswer("C", question, index);
                        }}
                        style={
                          optionClicked[1] === index &&
                          optionClicked[4] === "C" &&
                          optionClicked[3] === "C"
                            ? { background: "greenyellow", color: "black" }
                            : optionClicked[1] === index &&
                              optionClicked[4] === "C" &&
                              optionClicked[3] !== "C"
                            ? { background: "red", color: "black" }
                            : {}
                        }
                      >
                        C
                      </div>
                      <div
                        className="col-sm-2 option-block"
                        onClick={() => {
                          displayAnswer("D", question, index);
                        }}
                        style={
                          optionClicked[1] === index &&
                          optionClicked[4] === "D" &&
                          optionClicked[3] === "D"
                            ? { background: "greenyellow", color: "black" }
                            : optionClicked[1] === index &&
                              optionClicked[4] === "D" &&
                              optionClicked[3] !== "D"
                            ? { background: "red", color: "black" }
                            : {}
                        }
                      >
                        D
                      </div>
                      {/* Display Answer Code */}
                    </div>
                    <hr style={{ height: "2px" }} />
                  </>
                );
              })
            : "No Search Results"}
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
