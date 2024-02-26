import React from "react";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <a
            href="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Logo
          </a>
        </div>
        <div>
          <a
            href="/"
            style={{
              color: "#fff",
              marginRight: "1rem",
              textDecoration: "none",
            }}
          >
            Home
          </a>
          <a
            href="/about"
            style={{
              color: "#fff",
              marginRight: "1rem",
              textDecoration: "none",
            }}
          >
            About
          </a>
          <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
