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
    major: "Polytechnic",
    occupation_text: "MERN",
    religious_text: "HINDUISM and beliving in God",
    reason_text: "is looking to develop a more personal relationship with God",
  });

  // random data selection *******
  const nameR = [
    "Shiva",
    "Rohit",
    "Karla",
    "Tarun",
    "Gia",
    "Sashanka",
    "Sera",
    "Akash",
    "Jaye",
    "Ranjit",
    "Paige",
    "Blake",
    "coco",
    "Penney",
    "Laney",
  ];
  const locationR = ["Nashik", "Philadelphia", "Gorakhpur"];
  const schoolR = ["K. K. Wagh", "Matoshri", "the University of Utah"];
  const majorR = ["Animation", "Mechanical Engineering", "Entrepreneurship"];
  const occupationR = [
    "Frontend",
    "Backend",
    "database administrator",
    "elementary school teacher",
  ];
  const religiousR = [
    "Hinduism, Sanatani, and has a strong belief in Bhagavad Gita",
    "Christian, but rarely went to church",
    "Buddhist, and considers herself very spiritual.",
  ];
  const reasonR = [
    "likes reading the Bible and talking about it",
    "wants to grow closer to God and find purpose in life",
    "is looking to develop a more personal relationship with God",
    "hopes that the missionaries can help her grow a relationship with God.",
    "has been questioning whether God exists and would like a fresh perspective",
    "is having a difficult time in life and is looking for ways to find greater peace, joy, and purpose in life",
  ];

  const selectRandomName = (e) => {
    console.log(e.target.name);
    let x = Math.floor(Math.random() * nameR.length);
    setEntryData({ ...entryData, ["username"]: nameR[x] });
  };
  const selectRandomLocation = () => {
    let x = Math.floor(Math.random() * locationR.length);
    setEntryData({ ...entryData, ["location_text"]: locationR[x] });
  };
  const selectRandomSchool = () => {
    let x = Math.floor(Math.random() * schoolR.length);
    setEntryData({ ...entryData, ["school_text"]: schoolR[x] });
  };
  const selectRandomMajor = () => {
    let x = Math.floor(Math.random() * majorR.length);
    setEntryData({ ...entryData, ["major"]: majorR[x] });
  };
  const selectRandomOccupation = () => {
    let x = Math.floor(Math.random() * occupationR.length);
    setEntryData({ ...entryData, ["occupation_text"]: occupationR[x] });
  };
  const selectRandomReligious = () => {
    let x = Math.floor(Math.random() * religiousR.length);
    setEntryData({ ...entryData, ["religious_text"]: religiousR[x] });
  };
  const selectRandomReason = () => {
    let x = Math.floor(Math.random() * reasonR.length);
    setEntryData({ ...entryData, ["reason_text"]: reasonR[x] });
  };

  // input field data catching *******
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

  // checkboxes selection/removal *******
  const locationCheck = (e) => {
    location ? setLocation(false) : setLocation(true);
    // console.log("location:", location);
  };
  const schoolCheck = () => {
    school ? setSchool(false) : setSchool(true);
    // console.log("school:", school);
  };
  const occupationCheck = () => {
    occupation ? setOccupation(false) : setOccupation(true);
    // console.log("occupation:", occupation);
  };
  const religiousCheck = () => {
    religious ? setReligious(false) : setReligious(true);
    // console.log("religious:", religious);
  };
  const reasonCheck = () => {
    reason ? setReason(false) : setReason(true);
    // console.log("reason:", reason);
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
              id="username"
              value={entryData.username}
              onChange={handleInput}
            ></input>

            <label htmlFor="gender">Gender</label>
            <select name="gender" onChange={handleInput}>
              <option>Male</option>
              <option>Female</option>
            </select>
            <button onClick={selectRandomName}>Random Name</button>
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
              id="location_text"
              value={entryData.location_text}
              onChange={handleInput}
            ></input>
            <button onClick={selectRandomLocation}>Random Location</button>
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
              id="school_text"
              value={entryData.school_text}
              onChange={handleInput}
            ></input>
            <button onClick={selectRandomSchool}>Random School</button>
            <br />

            <label htmlFor="major">Major</label>
            <input
              type="text"
              name="major"
              id="major"
              value={entryData.major}
              onChange={handleInput}
            ></input>
            <button onClick={selectRandomMajor}>Random Major</button>
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
              id="occupation_text"
              value={entryData.occupation_text}
              onChange={handleInput}
            ></input>

            <button onClick={selectRandomOccupation}>Random Occupation</button>
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
                id="religious_text"
                value={entryData.religious_text}
                onChange={handleInput}
              ></textarea>
              <br />
              <button onClick={selectRandomReligious}>Random Religion</button>
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
                id="reason_text"
                value={entryData.reason_text}
                onChange={handleInput}
              ></textarea>
              <br />

              <button className="Restoration" onClick={selectRandomReason}>
                Restoration
              </button>
              <button className="Plan" onClick={selectRandomReason}>
                Plan of Salvation
              </button>
              <button className="Gospel" onClick={selectRandomReason}>
                Gospel of Christ
              </button>
              <button className="Law" onClick={selectRandomReason}>
                Law of Chastity
              </button>
              <button className="Word" onClick={selectRandomReason}>
                Word of Wisdom
              </button>
              <button className="Any" onClick={selectRandomReason}>
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
