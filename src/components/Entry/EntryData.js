import React from "react";
import "./EntryData.css";

const EntryData = () => {
  return (
    <div className="Entry_Data">
      <div>
        <h2>Options</h2>
      </div>

      <form className="Option_Form">
        <div className="Form_Div">
          <label for="name">Name</label>
          <input type="text" name="name" id="name"></input>
          <label for="Gender">Gender</label>
          <select name="Gender">
            <option>Mele</option>
            <option>Female</option>
          </select>

          <button>Random Name</button>
        </div>

        <div className="Form_Div">
          <label for="location">
            <input type="checkbox" name="location" id="location"></input>
            Location
          </label>
          <input type="text" name="location" id="location"></input>

          <button>Random Location</button>
        </div>

        <div className="Form_Div">
          <label for="school">
            <input type="checkbox" name="school" id="school"></input>
            School
          </label>
          <input type="text" name="school" id="school"></input>

          <button>Random School</button>
          <br />

          <label for="Major">Major</label>
          <input type="text" name="Major" id="Major"></input>

          <button>Random Major</button>
        </div>

        <div className="Form_Div">
          <label for="occupation">
            <input type="checkbox" name="occupation" id="occupation"></input>
            Occupation
          </label>
          <input type="text" name="occupation" id="occupation"></input>

          <button>Random Occupation</button>
        </div>

        <div className="Form_Div">
          <label for="Religious">
            <input type="checkbox" name="Religious" id="Religious"></input>
            Religious Background
          </label>
          <textarea type="text" name="Religious_box"></textarea>

          <button>Random Religious</button>
        </div>

        <div className="Form_Div">
          <label for="Religious">
            <input type="checkbox" name="Religious" id="Religious"></input>
            Religious Background
          </label>
          <textarea type="text" name="Religious_box"></textarea>

          <button>Restoration</button>
          <button>Plan of Salvation</button>
          <button>Gospel of Christ</button>
          <button>Law of Charity</button>
          <button>Word of Wisdom</button>
          <button>Any Lesson</button>
        </div>
      </form>
    </div>
  );
};

export default EntryData;
