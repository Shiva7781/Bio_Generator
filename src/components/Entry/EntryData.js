import React, { useState } from "react";
import "./EntryData.css";
import DisplayData from "../Display/DisplayData";

const EntryData = () => {
  const [location, setLocation] = useState(true);
  const [school, setSchool] = useState(true);
  const [occupation, setOccupation] = useState(false);
  const [religious, setReligious] = useState(true);
  const [reason, setReason] = useState(true);

  const checkBoxes = [location, school, occupation, religious, reason];

  const [entryData, setEntryData] = useState({
    input_img: "",
    input_video: "",
    username: "Shiva",
    gender: "Male",
    location_text: "Nashik",
    school_text: "K. K. Wagh",
    major: "Poly",
    occupation_text: "MERN",
    religious_text: "HINDUISM",
    reason_text: "is looking to develop a more personal relationship with God",
  });

  // ******* Geting all input data *******
  const handleInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(`Field: ${field}  & Value: ${value}`);

    if (field === "input_img" || field === "input_video") {
      setEntryData({
        ...entryData,
        [field]: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setEntryData({ ...entryData, [field]: value });
    }
    // console.log("entryData:", entryData);
  };

  const submitForm = (e) => {
    e.preventDefault();

    // console.log("entryData:", entryData);
    // console.log("entryData:", entryData.location_text);
  };

  // ******* CheckBoxes selection/removal *******
  const locationCheck = (e) => {
    location ? setLocation(false) : setLocation(true);
    console.log("location:", location);
  };
  const schoolCheck = () => {
    school ? setSchool(false) : setSchool(true);
    console.log("school:", school);
  };
  const occupationCheck = () => {
    occupation ? setOccupation(false) : setOccupation(true);
    console.log("occupation:", occupation);
  };
  const religiousCheck = () => {
    religious ? setReligious(false) : setReligious(true);
    console.log("religious:", religious);
  };
  const reasonCheck = () => {
    reason ? setReason(false) : setReason(true);
    console.log("reason:", reason);
  };

  return (
    <div className="All_Data">
      <div className="Entry_Data">
        <div>
          <h2>Options</h2>
        </div>

        <form className="Option_Form" onSubmit={submitForm}>
          <div className="Form_Div">
            <div className="Avtar">
              <label htmlFor="input_img">Avtar</label>
              <input
                type="file"
                name="input_img"
                id="input_img"
                accept="image/*"
                value={entryData.avtar}
                onChange={handleInput}
              ></input>
            </div>
          </div>

          <div className="Form_Div">
            <div className="Avtar">
              <label htmlFor="input_video">Introduction</label>
              <input
                type="file"
                name="input_video"
                id="input_video"
                accept="video/*"
                value={entryData.introduction}
                onChange={handleInput}
              ></input>
            </div>
          </div>

          <div className="Form_Div">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              name="username"
              value={entryData.username}
              onChange={handleInput}
            ></input>

            <label htmlFor="gender">Gender</label>
            <select name="gender" onChange={handleInput}>
              <option>Male</option>
              <option>Female</option>
            </select>
            <button onClick={() => console.log("Click")}>Random Name</button>
          </div>

          <div className="Form_Div">
            <label htmlFor="location_text">
              <input
                type="checkbox"
                name="location"
                checked={location}
                onChange={locationCheck}
              ></input>
              Location
            </label>
            <input
              type="text"
              name="location_text"
              value={entryData.location_text}
              onChange={handleInput}
            ></input>
            <button onClick={() => console.log("Location")}>
              Random Location
            </button>
          </div>

          <div className="Form_Div">
            <label htmlFor="school_text">
              <input
                type="checkbox"
                name="school"
                checked={school}
                onChange={schoolCheck}
              ></input>
              School
            </label>
            <input
              type="text"
              name="school_text"
              value={entryData.school_text}
              onChange={handleInput}
            ></input>
            <button onClick={() => console.log("School")}>Random School</button>
            <br />

            <label htmlFor="major">Major</label>
            <input
              type="text"
              name="major"
              value={entryData.major}
              onChange={handleInput}
            ></input>
            <button onClick={() => console.log("Major")}>Random Major</button>
          </div>

          <div className="Form_Div">
            <label htmlFor="occupation_text">
              <input
                type="checkbox"
                name="occupation"
                checked={occupation}
                onChange={occupationCheck}
              ></input>
              Occupation
            </label>
            <input
              type="text"
              name="occupation_text"
              value={entryData.occupation_text}
              onChange={handleInput}
            ></input>

            <button onClick={() => console.log("Occupation")}>
              Random Occupation
            </button>
          </div>

          <div className="Form_Div">
            <label htmlFor="religious_text">
              <input
                type="checkbox"
                name="religious"
                checked={religious}
                onChange={religiousCheck}
              ></input>
              Religious Background
            </label>
            <br />
            <div className="Txt_Btn">
              <textarea
                type="text"
                name="religious_text"
                value={entryData.religious_text}
                onChange={handleInput}
              ></textarea>
              <br />
              <button onClick={() => console.log("Religion")}>
                Random Religion
              </button>
            </div>
          </div>

          <div className="Form_Div">
            <label htmlFor="reason_text">
              <input
                type="checkbox"
                name="reason"
                checked={reason}
                onChange={reasonCheck}
              ></input>
              Reason for meeting with missionaries
            </label>
            <br />
            <div className="Txt_Btn">
              <textarea
                type="text"
                name="reason_text"
                value={entryData.reason_text}
                onChange={handleInput}
              ></textarea>
              <br />

              <button
                className="Restoration"
                onClick={() => console.log("Restoration")}
              >
                Restoration
              </button>
              <button className="Plan" onClick={() => console.log("Plan")}>
                Plan of Salvation
              </button>
              <button className="Gospel" onClick={() => console.log("Gospel")}>
                Gospel of Christ
              </button>
              <button className="Law" onClick={() => console.log("Law")}>
                Law of Chastity
              </button>
              <button className="Word" onClick={() => console.log("Word")}>
                Word of Wisdom
              </button>
              <button className="Any" onClick={() => console.log("Any")}>
                Any Lesson
              </button>
            </div>
          </div>
        </form>
      </div>

      {<DisplayData entryData={entryData} checkBoxes={checkBoxes} />}
    </div>
  );
};

export default EntryData;
