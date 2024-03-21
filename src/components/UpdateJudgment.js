import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useUsers } from "../context/UserContext";
import editJudgment from "../api/judgment/editJudgment";
import { useNavigate } from "react-router-dom";

function UpdateJudgment({ data, judgmentId }) {
  const navigate = useNavigate();
  const { userData } = useUsers();

  const judgmentID = userData.id;
  const [procedureAndNumber, setProcedureAndNumber] = useState(
    data.procedureAndNumber
  );
  const [judgeName, setJudgeName] = useState(data.judgeName);
  const [matter, setMatter] = useState(data.matter);
  const [court, setCourt] = useState(data.court);
  const [plaintiffs, setPlaintiffs] = useState(data.plaintiffs);
  const [attorney, setAttorney] = useState(data.attorney);
  const [defendants, setDefendants] = useState(data.defendants);
  const [defendantAttorney, setDefendantAttorney] = useState(
    data.defendantAttorney
  );
  const [caseSummary, setCaseSummary] = useState(data.caseSummary);
  const [judgment, setJudgment] = useState(data.judgment);

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
    mutationFn: (judgmentData) => editJudgment(judgmentData, judgmentId),
    onSuccess: () => {
      toast.success("פסק דין עודכן בהצלחה");
      navigate("/myjudgments");
      window.location.reload();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(judgmentData, judgmentId);
  };

  return (
    <div>
      <div className="formSection">
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
            className={`submit-button `}
            disabled={isPending}
          >
            {isPending ? "..מעדכן" : "עדכן"}
          </button>
          <br></br>
        </form>
      </div>
    </div>
  );
}

export default UpdateJudgment;
