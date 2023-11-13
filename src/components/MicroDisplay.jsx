import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./MicroDisplay.min.css";
function MicroDisplay({ htmlContent }) {
  return (
    <div className="micro-display-container">
      <ReactQuill theme="snow" value={htmlContent} />
    </div>
  );
}

export default MicroDisplay;
