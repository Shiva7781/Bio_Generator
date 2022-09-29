import React from "react";
import "./AllData.css";
import EntryData from "./Entry/EntryData";
import DisplayData from "./Display/DisplayData";

const AllData = () => {
  return (
    <div className="All_Data">
      <div className="Left_Div">
        <EntryData />
      </div>
      <div className="Right_Div">
        <DisplayData />
      </div>
    </div>
  );
};

export default AllData;
