import React, { useState } from "react";
import "./EntryData.css";

const EntryData = () => {
  const [check, setCheck] = useState({
    location: true,
    school: true,
    occupation: true,
    religion: true,
    reason: true,
  });

  const [entryData, setEntryData] = useState({
    username: "",
    gender: "male",
    location_text: "",
    school_text: "",
    major: "",
    occupation_text: "",
    religious_txt: "",
    reason: "",
  });

  const [records, setRecords] = useState({});

  const handleInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(`Field: ${field}  & Value: ${value}`);

    setEntryData({ ...entryData, [field]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    // const newRecord = { ...entryData, id: new Date().toLocaleTimeString() };
    const newRecord = { ...entryData, id: new Date().getTime().toString() };

    console.log("records:", records);
    console.log("newRecord:", newRecord);

    setRecords({ ...records, newRecord });

    // setEntryData({
    //   username: "",
    //   gender: "male",
    //   location_text: "",
    //   school_text: "",
    //   major: "",
    //   occupation_text: "",
    //   religious_txt: "",
    //   reason: "",
    // });
  };

  const handleCheck = () => {
    if (check) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };

  return (
    <div className="Entry_Data">
      <div>
        <h2>Options</h2>
      </div>

      <form className="Option_Form" onSubmit={submitForm}>
        <div className="Form_Div">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            name="username"
            value={entryData.username}
            onChange={handleInput}
          ></input>

          <label htmlFor="gender">Gender</label>
          <select name="gender">
            <option>Mele</option>
            <option>Female</option>
          </select>
          <button onClick={() => console.log("Click")}>Random Name</button>
        </div>

        <div className="Form_Div">
          <label htmlFor="location_text">
            <input
              type="checkbox"
              name="location"
              // checked={check}
              onChange={handleCheck}
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
              // checked={check}
              onChange={handleCheck}
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
            <input type="checkbox" name="occupation"></input>
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
          <label htmlFor="religious_txt">
            <input type="checkbox" name="religious"></input>
            Religious Background
          </label>
          <br />
          <div className="Txt_Btn">
            <textarea
              type="text"
              name="religious_txt"
              value={entryData.religious_txt}
              onChange={handleInput}
            ></textarea>
            <br />
            <button onClick={() => console.log("Religion")}>
              Random Religion
            </button>
          </div>
        </div>

        <div className="Form_Div">
          <label htmlFor="reason_txt">
            <input type="checkbox" name="Reason"></input>
            Reason for meeting with missionaries
          </label>
          <br />
          <div className="Txt_Btn">
            <textarea
              type="text"
              name="reason_txt"
              value={entryData.reason_txt}
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
  );
};

export default EntryData;
