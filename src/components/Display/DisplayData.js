import React from "react";
import "./DisplayData.css";

const DisplayData = ({ entryData, checkBoxes }) => {
  console.log("entryData:", entryData);
  console.log("checkBoxes:", checkBoxes);

  return (
    <div className="Display_Data">
      <div>
        <h2>Result</h2>
      </div>
      <div className="Show">
        <p>
          Will is from Vale, Oregon. He is studying Accounting at BYU. He was
          raised without any religion in the home. For most of his life, he has
          never had any interest in spiritual things. He is hoping to gain an
          understanding of the purpose of life (if there is one) and what that
          would mean to him. Will is from Vale, Oregon. He is studying
          Accounting at BYU. He was raised without any religion in the home. For
          most of his life, he has never had any interest in spiritual things.
          He is hoping to gain an understanding of the purpose of life (if there
          is one) and what that would mean to him.
        </p>
      </div>
    </div>
  );
};

export default DisplayData;
