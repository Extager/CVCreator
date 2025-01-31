import React from "react";
import { observer } from "mobx-react-lite";
import ResumeStore from "../../../store/ResumeStore";
import "../../styles/input.css";

const UIImage: React.FC = observer(() => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      ResumeStore.setImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      
    </div>
  );
});

export default UIImage;