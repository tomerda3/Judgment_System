import React from "react";
import { useNavigate } from "react-router-dom";

import Judjment from "../components/Judgment";
import { useUsers } from "../context/UserContext";
import Judgments from "./Judgments";

function HomeScreen() {
  const { userData } = useUsers();
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ paddingRight: 10, paddingLeft: 10 }}>
        <div className="headerContainer">
          <h1>ברוכים הבאים</h1>
          <h2>מערכת לניהול פסקי דין</h2>
        </div>
        {userData.role === "judge" && <Judjment />}
      </div>
    </div>
  );
}

export default HomeScreen;
