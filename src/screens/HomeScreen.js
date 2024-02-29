import React from "react";
import Navbar from "../components/NavBar";
import Judjment from "../components/Judgment";
function HomeScreen() {
  return (
    <div>
      {/* <Navbar /> */}
      <div style={{ paddingRight: 10, paddingLeft: 10 }}>
        <div className="headerContainer">
          <h1>ברוכים הבאים</h1>
          <h2>מערכת לניהול פסקי דין</h2>
        </div>
        <Judjment />
      </div>
    </div>
  );
}

export default HomeScreen;
