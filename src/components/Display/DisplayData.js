import React, { useEffect, useState } from "react";
import "./DisplayData.css";

const DisplayData = ({ entryData, checkBoxes }) => {
  console.log("entryData:", entryData);
  console.log("checkBoxes:", checkBoxes);

  const [displayAll, setDisplayAll] = useState();

  useEffect(() => {
    setDisplayAll(
      `${
        checkBoxes[0]
          ? entryData.username
          : "You are teaching" + " " + entryData.username + "."
      }  ${
        checkBoxes[0] ? "is from" + " " + entryData.location_text + "." : ""
      } ${
        checkBoxes[1]
          ? (entryData.gender === "Male" ? "He" : "She") +
            " " +
            "is studying" +
            " " +
            entryData.major +
            " " +
            "at" +
            " " +
            entryData.school_text +
            "."
          : ""
      }  ${
        checkBoxes[2]
          ? (entryData.gender === "Male" ? "He" : "She") +
            " " +
            "currently works as a" +
            " " +
            entryData.occupation_text +
            "."
          : ""
      } ${
        checkBoxes[3]
          ? (entryData.gender === "Male" ? "He" : "She") +
            " " +
            "was raised " +
            " " +
            entryData.religious_text +
            "."
          : ""
      } ${checkBoxes[4] ? entryData.reason_text + "." : ""}`
    );
  });

  return (
    <div className="Display_Data">
      <div>
        <h2>Result</h2>
      </div>

      <p>{displayAll}</p>
    </div>
  );
};

export default DisplayData;
