import React, { useEffect, useState } from "react";
import "./DisplayData.css";

const DisplayData = ({ entryData, checkBoxes }) => {
  console.log("entryData:", entryData.school_text);
  console.log("checkBoxes:", checkBoxes);

  const [displayAll, setDisplayAll] = useState();

  useEffect(() => {
    setDisplayAll(
      `${entryData.username} is from ${
        checkBoxes[0] ? entryData.location_txt : ""
      }. ${
        entryData.gender == "Male"
          ? "He is studying in "
          : "She is studying in "
      } ${checkBoxes[1] ? entryData.school_txt : ""} ${entryData.major}`
    );
  }, [entryData, checkBoxes]);

  return (
    <div className="Display_Data">
      <div>
        <h2>Result</h2>
      </div>
      <div className="Show">
        <p>{displayAll}</p>
      </div>
    </div>
  );
};

export default DisplayData;
