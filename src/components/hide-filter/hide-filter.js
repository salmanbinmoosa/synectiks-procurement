import React from "react";
import "./hide-filter.css";
function Hidefilter() {
  return (
    <>
      <div className="hide-filter">
        <div className="hide-filter-top">
          <img src="" alt="" /> <p>Hide Filters</p>
        </div>
        <div className="input-boxes">
          <div className="input-box">
            <p>Date</p>
            <div className="inp">
              <input type="date" />
              <img src="" alt="" />
            </div>
          </div>

          <div className="input-box">
            <p>Department</p>
            <div className="inp">
              <select>
                <option value="">Finance</option>
              </select>
            </div>
          </div>

          <div className="input-box">
            <p>Location</p>
            <div className="inp">
              <select>
                <option value="">Main Office</option>
              </select>
            </div>
          </div>

          <div className="input-box">
            <p>Request Type</p>
            <div className="inp">
              <select>
                <option value="">Products</option>
              </select>
            </div>
          </div>
        </div>
        <div className="search">
                <button className="search-btn">Search</button>
        </div>
      </div>
    </>
  );
}
export default Hidefilter;
