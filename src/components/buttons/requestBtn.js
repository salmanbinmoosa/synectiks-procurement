import React from 'react'
import "./requestBtn.css";
function RequestBtn(btn) {
  return (
    <>
    <button className='req-btn'>{btn.name}</button>
    </>
  )
}

export default RequestBtn