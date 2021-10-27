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
import { AllQuizList } from "./Data/AllQuizs";

export const Quizzs = createContext(null);

function App() {
  return (
    <div className="App">
      <Quizzs.Provider value={AllQuizList}>
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
                return <QuizComponent QuizList={AllQuizList} />;
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
