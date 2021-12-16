import React, { useEffect, useState } from "react";
import "./PreLoaded.css";

function PreLoaded() {
  return (
    <React.Fragment>
            <span style={{margin: 5}}>{' '}Loading...{' '}</span>
            <div className="half-spinner"></div>
    </React.Fragment>
  );
}
export default PreLoaded;

