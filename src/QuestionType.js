import React, { useState, useEffect } from "react";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import "./QuestionType.css";
function QuestionType(props) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    props.currentAction(value);
  });
  return (
    <div className="question-type">
      <Select
        onChange={(e) => {
          setValue(e.target.value);
        }}
        labelId="label"
        id="select"
        value={value}
      >
        <MenuItem value="0">Select Question Type</MenuItem>
        <MenuItem value="1">Multi select</MenuItem>
        <MenuItem value="2">Single select</MenuItem>
      </Select>
    </div>
  );
}

export default QuestionType;
