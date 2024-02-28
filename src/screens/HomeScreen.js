import React, { useState } from "react";
import Navbar from "../components/NavBar";

function HomeScreen() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [procedureAndNumber, setProcedureAndNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [proofreading, setProofreading] = useState("");
  const [composition, setComposition] = useState("");
  const [plaintiffs, setPlaintiffs] = useState("");
  const [attorney, setAttorney] = useState("");
  const [defendants, setDefendants] = useState("");
  const [defendantAttorney, setDefendantAttorney] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div style={{ paddingRight: 10, paddingLeft: 10 }}>
        <div className="headerContainer">
          <h1>ברוכים הבאים</h1>
          <h2>מערכת לניהול פסקי דין</h2>
        </div>
        <div className="formSection">
          <h2 style={{ textAlign: "center" }}>הזן פרטי פסק דין</h2>
          <form onSubmit={handleSubmit}>
            <div className="mainFormContainer">
              <div className="innerFormContainer">
                <h3>צד נתבע</h3>
                <label className="lableStyle" htmlFor="defendants">
                  נתבעים
                </label>
                <br />
                <input
                  className="input-field"
                  id="defendants"
                  value={defendants}
                  onChange={(e) => setDefendants(e.target.value)}
                ></input>
                <br />

                <label className="lableStyle" htmlFor="defendantAttorney">
                  באי כוח נתבע
                </label>
                <br />
                <input
                  className="input-field"
                  id="defendantAttorney"
                  value={defendantAttorney}
                  onChange={(e) => setDefendantAttorney(e.target.value)}
                ></input>
                <br />
              </div>
              <div className="innerFormContainer">
                <h3>צד תובע</h3>
                <label className="lableStyle" htmlFor="plaintiffs">
                  התובעים
                </label>
                <br />
                <input
                  className="input-field"
                  id="plaintiffs"
                  value={plaintiffs}
                  onChange={(e) => setPlaintiffs(e.target.value)}
                ></input>
                <br />

                <label className="lableStyle" htmlFor="attorney">
                  באי כוח תובע
                </label>
                <br />
                <input
                  className="input-field"
                  id="attorney"
                  value={attorney}
                  onChange={(e) => setAttorney(e.target.value)}
                ></input>
                <br />
              </div>

              <div className="innerFormContainer">
                <h3>פרטי המשפט</h3>
                <label className="lableStyle" htmlFor="name">
                  כבוד השופט
                </label>
                <br />
                <input
                  className="input-field"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label className="lableStyle" htmlFor="procedureAndNumber">
                  סוג ההליך ומספרו
                </label>
                <br />
                <input
                  className="input-field"
                  type="text"
                  id="procedureAndNumber"
                  value={procedureAndNumber}
                  onChange={(e) => setProcedureAndNumber(e.target.value)}
                />
                <br />
                <label className="lableStyle" htmlFor="subject">
                  נושא
                </label>
                <br />
                <input
                  className="input-field"
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <br />
                <label className="lableStyle" htmlFor="proofreading">
                  הרכאה
                </label>
                <br />
                <input
                  className="input-field"
                  type="text"
                  id="proofreading"
                  value={proofreading}
                  onChange={(e) => setProofreading(e.target.value)}
                />
                <br />
                <label className="lableStyle" htmlFor="composition">
                  הרכב
                </label>
                <br />
                <input
                  className="input-field"
                  id="composition"
                  value={composition}
                  onChange={(e) => setComposition(e.target.value)}
                ></input>
                <br />
              </div>
            </div>
          </form>
        </div>
        <input className="submit-button" type="submit" value="שלח" />
      </div>
    </div>
  );
}

export default HomeScreen;
