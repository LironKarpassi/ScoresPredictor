import React, { useEffect, useState } from "react";
import "./PreLoaded.css";

function PreLoaded() {
  return (
    <React.Fragment>

      <div className="loading-container">
            <span style={{margin: 1}}>
              Loading...</span>
            <div className="half-spinner"></div>
      </div>
    </React.Fragment>
  );
}
export default PreLoaded;

