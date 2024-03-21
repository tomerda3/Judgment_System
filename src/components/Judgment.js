import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import saveJudment from "../api/judgment/saveJudgment";
import toast from "react-hot-toast";

import { useUsers } from "../context/UserContext";

function Judgment() {
  const { userData } = useUsers();

  const judgmentID = userData.id;
  const [procedureAndNumber, setProcedureAndNumber] = useState("");
  const [judgeName, setJudgeName] = useState("");
  const [matter, setMatter] = useState("");
  const [court, setCourt] = useState("");
  const [plaintiffs, setPlaintiffs] = useState("");
  const [attorney, setAttorney] = useState("");
  const [defendants, setDefendants] = useState("");
  const [defendantAttorney, setDefendantAttorney] = useState("");
  const [caseSummary, setCaseSummary] = useState("");
  const [judgment, setJudgment] = useState("");

  const judgmentData = {
    judgmentID,
    procedureAndNumber,
    judgeName,
    matter,
    court,
    plaintiffs,
    attorney,
    defendants,
    defendantAttorney,
    caseSummary,
    judgment,
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (judgmentData) => saveJudment(judgmentData),
    onSuccess: () => {
      toast.success("פסק דין נשלח בהצלחה");
      setProcedureAndNumber("");
      setJudgeName("");
      setMatter("");
      setCourt("");
      setPlaintiffs("");
      setAttorney("");
      setDefendants("");
      setDefendantAttorney("");
      setCaseSummary("");
      setJudgment("");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(judgmentData);
  };

  return (
    <div>
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
                הרכב
              </label>
              <br />
              <input
                className="input-field"
                type="text"
                id="name"
                value={judgeName}
                onChange={(e) => setJudgeName(e.target.value)}
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
                value={matter}
                onChange={(e) => setMatter(e.target.value)}
              />
              <br />
              <label className="lableStyle" htmlFor="proofreading">
                הרכאה
              </label>
              <br />
              <input
                className="input-field"
                type="text"
                id="court"
                value={court}
                onChange={(e) => setCourt(e.target.value)}
              />
            </div>
          </div>
          <div className="lastFormContainer">
            <div className="innerFormContainer">
              <h3>פסק הדין</h3>
              <label className="lableStyle" htmlFor="additionalField">
                המקרה
              </label>
              <br />
              <textarea
                className="input-field"
                id="additionalField"
                value={caseSummary}
                onChange={(e) => setCaseSummary(e.target.value)}
                rows={4} // Set the number of visible rows
                style={{ resize: "vertical" }} // Allow resizing vertically only
              />
              <br />
              <label className="lableStyle" htmlFor="additionalField">
                החלטה
              </label>
              <br />
              <input
                className="input-field"
                id="additionalField"
                value={judgment}
                onChange={(e) => setJudgment(e.target.value)}
              ></input>
              <br />
            </div>
          </div>
          <button
            type="submit"
            className={`submit-button`}
            disabled={isPending}
          >
            {isPending ? "..שולח" : "שלח"}
          </button>
          <br></br>
        </form>
      </div>
    </div>
  );
}

export default Judgment;
