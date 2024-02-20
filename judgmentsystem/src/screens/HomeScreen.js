import React from "react";
import CustomNavbar from "../components/CustomNavbar";

function HomeScreen() {
  return (
    <div>
      <CustomNavbar />
      <div className="container">
        {/* Your page content goes here */}
        <h1>Welcome to my website!</h1>
        <p>This is a simple React page with a top navbar.</p>
      </div>
    </div>
  );
}

export default HomeScreen;
