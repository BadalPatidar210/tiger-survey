import React from "react";
import "./CreateMultiQuestion.css";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";
function CreateMultiQuestion() {
  return (
    <form>
      <div className="create-multi-question-body">
        <LiveHelpOutlinedIcon />
        <input
          className="input-field"
          placeholder="Type question here"
          type="text"
          id="question"
          name="question"
        ></input>
      </div>
      <h5>Options</h5>
    </form>
  );
}

export default CreateMultiQuestion;
