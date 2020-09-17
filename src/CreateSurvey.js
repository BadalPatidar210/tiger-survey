import React, { useState } from "react";
import QuestionType from "./QuestionType";
import Header from "./Header";
import CreateMultiQuestion from "./CreateMultiQuestion";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import Button from "@material-ui/core/Button";
import "./CreateSurvey.css";
let optionList = [];
let questionsList = [];
function CreateSurvey() {
  const [selectedValue, setSelectedValue] = useState("0");
  const [optionText, setOptionText] = useState("");
  const [limit, setLimit] = useState("0");
  const [questionText, setQuestionText] = useState("");
  const [submit, setSubmit] = useState(false);
  let [, setState] = useState();
  function handleUpdate() {
    setState({});
  }
  let currentAction = (value) => {
    setSelectedValue(value);
    value === "1" ? setLimit("4") : setLimit("2");
    optionList = [];
    setQuestionText("");
  };
  let questionAction = (value) => {
    console.log("question ction chala");
    setQuestionText(value);
    console.log(value.text);
  };
  let addOption = () => {
    if (optionText.length !== 0) optionList.push(optionText);
    setOptionText("");
  };
  let removeOption = (e) => {
    let list = optionList.filter((option) => {
      return option !== e.target.id;
    });
    optionList = [...list];
    handleUpdate();
  };
  let setOptionInput = (e) => {
    setOptionText(e.target.value);
  };
  let addQuestion = () => {
    let question = {
      text: questionText,
      option: optionList,
    };
    questionsList.push(question);
    optionList = [];
    setQuestionText("");
  };
  let publishQuestion = () => {
    setSubmit(true);
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
            <CreateMultiQuestion questionAction={questionAction} />
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
                    <RemoveOutlinedIcon id={value} onClick={removeOption} />
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
                <RemoveOutlinedIcon onClick={removeOption} />
              </div>
            </div>
          ) : (
            <div className="multi-question-action">
              <div className="action-wrapper">
                <Button
                  variant="contained"
                  className="button"
                  color="primary"
                  onClick={addQuestion}
                >
                  Add Question
                </Button>
              </div>
            </div>
          )}
        </>
      ) : (
        ""
      )}
      {questionsList.length > 0 && !submit && (
        <div className="multi-question-action">
          <div className="question-wrapper">
            <Button
              variant="contained"
              className="button"
              color="primary"
              onClick={publishQuestion}
            >
              Publish
            </Button>
          </div>
        </div>
      )}
      {questionsList.map((value) => {
        return (
          <ul>
            <li>{console.log(value)}</li>
          </ul>
        );
      })}
      {submit === true &&
        questionsList.map((value, index) => {
          return (
            <div key={index}>
              <h3>{value.text}</h3>
              <ul>
                {value.option.map((opt) => (
                  <li>{opt}</li>
                ))}
              </ul>
            </div>
          );
        })}
      {submit === true && <Button>Confirm</Button>}
    </div>
  );
}

export default CreateSurvey;
