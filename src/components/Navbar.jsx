import React from "react";

function Navbar({ totalCounters }) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-dark">
        <span className="navbar-brand mb-0 h1 text-white">
          Navbar
          <span className="badge badge-primary">{totalCounters}</span>
        </span>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
