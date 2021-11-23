import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Quizzs } from "../../App";
import { BiArrowBack } from "react-icons/bi";
import { MdClear } from "react-icons/md";

const Quizs = (props) => {
  const QuizList = useContext(Quizzs);
  const [Quizs, setQuizs] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const { subject } = useParams();

  useEffect(() => {
    let data = [];
    QuizList.forEach((quiz) => {
      if (quiz.subject === subject) {
        data.push(quiz);
      }
    });
    setQuizs(data);
  }, [subject, QuizList]);

  const displaySearchedRecords = (searchText) => {
    searchText = searchText.trim();
    console.log(searchText);
    if (searchText !== null && searchText !== "" && searchText !== undefined) {
      const searchRecords = [];
      QuizList.forEach((record) => {
        let name = record.name.toString();
        let chapter_no = "Chapter-" + record.chapter_no.toString();

        console.log(record);
        if (
          name.startsWith(searchText) ||
          name.includes(searchText) ||
          chapter_no.startsWith(searchText) ||
          chapter_no.includes(searchText)
        ) {
          if (record.subject === subject) {
            searchRecords.push(record);
          }
        }
      });
      setQuizs(searchRecords);
    } else {
      let data = [];
      QuizList.forEach((quiz) => {
        if (quiz.subject === subject) {
          data.push(quiz);
        }
      });
      setQuizs(data);
    }
  };

  return (
    <div className="quizs">
      <div className="container">
        <Link className="back-btn" to="/quizzes/subjects">
          <BiArrowBack />
        </Link>
        <div className="row search-quiz-box">
          {" "}
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
                  let data = [];
                  QuizList.forEach((quiz) => {
                    if (quiz.subject === subject) {
                      data.push(quiz);
                    }
                  });
                  setQuizs(data);
                }}
              />
            </span>
          </div>
        </div>

        {Quizs.length > 0 ? (
          Quizs.map((quiz) => {
            return (
              <>
                <div className="container quiz-list-component">
                  <div className="row small-screen">
                    <div className="col-sm-12 col-md-6">
                      <div className="row">Chapter-{quiz.chapter_no}</div>
                      <div className="row">Name : {quiz.name}</div>
                      <div className="row">Subject : {quiz.subject}</div>
                      {/* <div className="row">Topic : {quiz.topic}</div> */}
                      <div className="row">
                        Number of Questions : {quiz.Questions.length}
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 take-test ">
                      <div className="row">
                        <Link to={"/quiz/" + quiz._id}>
                          <button className="quiz-btn">Take a Quiz</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
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
