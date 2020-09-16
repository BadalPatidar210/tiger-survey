import React from "react";
import Header from "./Header";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./MainScreen.css";
function MainScreen() {
  return (
    <div className="main-screen">
      <Header />
      <div className="buttons">
        <Link to="/create">
          <Button variant="contained" className="button" color="primary">
            Create Survey
          </Button>
        </Link>
        <Button variant="contained" className="button" color="primary">
          Take Survey
        </Button>
      </div>
    </div>
  );
}

export default MainScreen;
