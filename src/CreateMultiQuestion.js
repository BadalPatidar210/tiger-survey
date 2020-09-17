import React, { useEffect, useState } from "react";
import "./CreateMultiQuestion.css";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";
function CreateMultiQuestion(props) {
  const [value, setValue] = useState("");
  useEffect(() => {
    props.questionAction(value);
  }, [value]);

  return (
    <form>
      <div className="create-multi-question-body">
        <LiveHelpOutlinedIcon />
        <input
          className="input-field"
          placeholder="Type question here"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          name="question"
          value={value}
        ></input>
      </div>
      <h5>Options</h5>
    </form>
  );
}

export default CreateMultiQuestion;
