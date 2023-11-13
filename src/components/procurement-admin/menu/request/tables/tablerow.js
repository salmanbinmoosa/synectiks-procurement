import React from "react";
import "./table.css";
function Tablerow(data) {
  return (
    <>
      <div className="b-row">
        <p>{}</p>
        <p>Talan Vaccaro</p>
        <p>USA Office</p>
        <p>Amazon</p>
        <p>$9,000</p>
        <p>25/08/2020</p>
        <div className="status">
          <p>Pending</p>
        </div>
      </div>
    </>
  );
}

export default Tablerow;
