import React from "react";
import "./App.css";
import MainScreen from "./MainScreen";
import CreateSurvey from "./CreateSurvey";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MainScreen} />
      <Route exact path="/create" component={CreateSurvey} />
    </BrowserRouter>
  );
}

export default App;
