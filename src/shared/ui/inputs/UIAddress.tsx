import React from "react";
import { Inputs } from "../../../interfaces/Input";
import ResumeStore from "../../../store/ResumeStore";
import { observer } from "mobx-react-lite";
import '../../styles/input.css';

const UIAddress: React.FC<Inputs> = ({ value, onChange }) => {
  return (
      <input
        type="text"
        placeholder="Address"
        value={value}
        onChange={(e) => onChange(ResumeStore.address = e.target.value)}   
      />
  );
};

export default observer(UIAddress);