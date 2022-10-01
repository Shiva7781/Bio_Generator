import React, { useEffect, useState } from "react";
import "./DisplayData.css";

const DisplayData = ({ entryData, checkBoxes }) => {
  // console.log("entryData:", entryData);
  // console.log("checkBoxes:", checkBoxes);

  const [filledData, setFilledData] = useState("");

  const [translateLanguage, setTranslateLanguage] = useState("en");
  const [translated, setTranslated] = useState(filledData);
  // console.log("filledData:", filledData);
  // console.log("translated:", translated);

  useEffect(() => {
    setFilledData(
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
      } ${
        checkBoxes[4]
          ? (entryData.gender === "Male" ? "He" : "She") +
            " " +
            entryData.reason_text +
            "."
          : ""
      }`
    );

    myTranslateFn();
  });

  /*
   *** Translation implemented for different languages ***
   */

  const myTranslateFn = () => {
    setTimeout(() => {
      translateText();

      console.log("myTranslateFn call setTimeout 1500");
    }, 1500);
  };

  const handleLangData = (e) => {
    setTranslateLanguage(e.target.value);
    myTranslateFn();
  };

  // const sourcelan = () => {
  //   let source = "en";
  //   return source;
  // };

  // const targetlan = () => {
  //   let target = "hi";
  //   return target;
  // };

  const translateText = async () => {
    // console.log("fn translateText filledData:", filledData);
    // console.log("fn translateText translateLanguage:", translateLanguage);

    try {
      //   console.log("fn translateText filledData:", filledData);
      //   console.log("fn translateText translateLanguage:", translateLanguage);

      let res = await fetch("https://libretranslate.de/translate", {
        // mode: "no-cors",
        method: "POST",
        body: JSON.stringify({
          // q: input,
          // source: sourcelan(),
          // target: targetlan(),
          q: filledData,
          source: "en",
          target: translateLanguage,
          format: "text",
        }),

        headers: { "Content-Type": "application/json" },
      });

      let data = await res.json();
      // console.log("fn translateText Translated:", data.translatedText);

      setTranslated(data.translatedText);
    } catch (err) {
      // console.log("error", err);
    }
  };
  // myTranslateFn();

  return (
    <div className="Display_Data">
      <div>
        <h2>Result</h2>
      </div>

      <div>
        {entryData.input_img ? (
          <img src={entryData.input_img} alt=""></img>
        ) : null}
      </div>
      <div>
        {entryData.input_video ? (
          <video controls>
            <source src={entryData.input_video} type="video/mp4" />
            <source src={entryData.input_video} type="video/mp4" />
          </video>
        ) : null}
      </div>

      <div className="lang_right">
        <select name="target_lan" onChange={handleLangData}>
          <option value="en">Translate</option>
          <option value="hi">Hindi</option>

          {/* <option value="hi">Hindi</option>
          <option value="sa">Sanskrit </option>
          <option value="mai">Maithili</option>
          <option value="bho">Bhojpuri</option>
          <option value="bn">Bengali</option>
          <option value="gu">Gujarati</option>
          <option value="mr">Marathi</option>
          <option value="or">Odia (Oriya) </option>
          <option value="pa">Punjabi </option>
          <option value="sd">Sindhi </option>
          <option value="ta">Tamil </option>
          <option value="te">Telugu </option>
          <option value="kn">Kannada </option>
          <option value="ne">Nepali</option> */}

          {/* <option value="cs">Czech</option> */}
          {/* <option value="it">Italian</option> */}

          <option value="ru">Russian</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="nl">Dutch</option>
          <option value="zh">Chinese</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="id">Indonesian</option>
          <option value="hu">Hungarian</option>
          <option value="ga">Irish</option>
        </select>
      </div>

      {/* <p>{filledData}</p> */}
      {/* <p>{translated}</p> */}

      {translated ? <p>{translated}</p> : <p>{filledData}</p>}
    </div>
  );
};

export default DisplayData;
