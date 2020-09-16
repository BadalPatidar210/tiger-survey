import React, { useState } from "react";
import QuestionType from "./QuestionType";
import Header from "./Header";
import CreateMultiQuestion from "./CreateMultiQuestion";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "./CreateSurvey.css";
let optionList = [];
function CreateSurvey() {
  const [selectedValue, setSelectedValue] = useState(0);
  const [optionText, setOptionText] = useState("");
  const [limit, setLimit] = useState("0");
  let currentAction = (value) => {
    setSelectedValue(value);
    selectedValue === "1" ? setLimit("4") : setLimit("2");
  };
  let addOption = () => {
    if (optionText.length !== 0) optionList.push(optionText);
    setOptionText("");
  };
  let setOptionInput = (e) => {
    setOptionText(e.target.value);
  };

  return (
    <div className="create-survey">
      <div className="create-survey-header">
        <Header />
      </div>
      <div className="create-survey-body">
        <QuestionType currentAction={currentAction} />
      </div>
      {selectedValue === "1" || selectedValue === "2" ? (
        <>
          <div className="multi-question-body">
            <CreateMultiQuestion />
          </div>
          {optionList.length > 0 &&
            optionList.map((value) => {
              return (
                <div key={value} className="multi-question-options">
                  <div className="option-wrapper">
                    <input
                      type="text"
                      value={value}
                      className="input-field"
                      placeholder="Type answer here"
                    ></input>
                    <AddOutlinedIcon onClick={addOption} />
                    <RemoveOutlinedIcon />
                  </div>
                </div>
              );
            })}
          {optionList.length < limit ? (
            <div className="multi-question-options">
              <div className="option-wrapper">
                <input
                  name="option-input"
                  onChange={setOptionInput}
                  type="text"
                  value={optionText}
                  className="input-field"
                  placeholder="Type answer here"
                ></input>
                <AddOutlinedIcon onClick={addOption} />
                <RemoveOutlinedIcon />
              </div>
            </div>
          ) : (
            <div className="multi-question-action">
              <div className="action-wrapper">
                <Link to="#">
                  <Button
                    variant="contained"
                    className="button"
                    color="primary"
                  >
                    Add Question
                  </Button>
                </Link>
                <Link to="#">
                  <Button
                    variant="contained"
                    className="button"
                    color="primary"
                  >
                    Publish
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default CreateSurvey;
