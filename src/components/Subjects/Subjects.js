import React from "react";
import { useRouteMatch } from "react-router";
import { Switch, Route, Link } from "react-router-dom";
import Quizs from "../QuestionComponents/Quizs";

const subjects = ["Economics-Paduka", "BCK-Paduka", "Economics", "BCK"];

const Subjects = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <div className="subjects">
            <div className="container subject">
              <div className="row" style={{ textAlign: "center" }}>
                {subjects.map((subject, index) => {
                  return (
                    <Link
                      className="col-sm-12 com-md-6 col-lg-3 subject-list-component"
                      to={`${url}/${subject}`}
                      key={subject}
                    >
                      <strong>{subject}</strong>
                    </Link>
                  );
                })}
              </div>
            </div>
            );
          </div>
        </Route>
        <Route path={`${path}/:subject`}>
          <Quizs />
        </Route>
      </Switch>
    </>
  );
};

export default Subjects;
