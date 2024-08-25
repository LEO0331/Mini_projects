import React from "react";
import Flower from "./svg/flower";

function Field({ value, onChange }) {
  return (
    <div className="field">
      <Flower className="flower-right" fill="orange" />
      <Flower className="flower-left" fill="yellow" />
      <Flower className="flower-btnright" fill="orange" />
      <Flower className="flower-btnleft" fill="yellow" />
      <h1>Translate App</h1>
      <label>Please Enter English</label>
      <input
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Field;
