import React from "react";
import { useRouteMatch } from "react-router";
import { Switch, Route, Link } from "react-router-dom";
import Quizs from "../QuestionComponents/Quizs";

const subjects = ["Maths", "Economics"];

const Subjects = () => {
  const { path, url } = useRouteMatch();
  return <></>;
};

export default Subjects;
