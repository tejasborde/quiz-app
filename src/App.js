import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import "./Styles/main.css";
import Home from "./components/Layouts/Home";
// import Quizs from "./components/QuestionComponents/Quizs";
import QuizComponent from "./components/QuestionComponents/QuizComponent";
import { createContext } from "react";
import Subjects from "./components/Subjects/Subjects";

export const Quizzs = createContext(null);

const QuizList = [
  {
    _id: 1,
    name: "Quiz 1",
    subject: "Maths",
    topic: "ABC",
    no_of_questions: 5,
    Questions: [
      {
        que_no: 1,
        que_statement: "This is first question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
      {
        que_no: 2,
        que_statement: "This is second question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
      {
        que_no: 3,
        que_statement: "This is third question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
      {
        que_no: 4,
        que_statement: "This is fourth question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
      {
        que_no: 5,
        que_statement: "This is fifth question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
    ],
  },
  {
    _id: 3,
    name: "Quiz 3",
    subject: "Maths",
    topic: "ZPQ",
    no_of_questions: 5,
    Questions: [
      {
        que_no: 1,
        que_statement: "This is first question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
      {
        que_no: 2,
        que_statement: "This is second question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
      {
        que_no: 3,
        que_statement: "This is third question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
      {
        que_no: 4,
        que_statement: "This is fourth question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
      {
        que_no: 5,
        que_statement: "This is fifth question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
    ],
  },
  {
    _id: 2,
    name: "Quiz 2",
    subject: "Economics",
    topic: "XYZ",
    no_of_questions: 5,
    Questions: [
      {
        que_no: 1,
        que_statement: "This is first question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
      {
        que_no: 2,
        que_statement: "This is second question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
      {
        que_no: 3,
        que_statement: "This is third question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
      {
        que_no: 4,
        que_statement: "This is fourth question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
      {
        que_no: 5,
        que_statement: "This is fifth question.",
        options: ["1st option", "2nd option", "3rd option", "4th option"],
        correct_ans: "1st option",
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Quizzs.Provider value={QuizList}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/quizzes/subjects">
              {/* <Quizs /> */}
              <Subjects />
            </Route>
            {/* <Route exact path="/quiz/:subject/:subjectid">
              <Quizs />
            </Route> */}
            <Route
              exact
              path="/quiz/:quiz_id"
              component={() => {
                return <QuizComponent QuizList={QuizList} />;
              }}
            />
          </Switch>
          <Footer />
        </Router>
      </Quizzs.Provider>
    </div>
  );
}

export default App;
