import React from "react";
import { Inputs } from "../../interfaces/Input";

const UIAddress: React.FC<Inputs> = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Address"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default UIAddress;