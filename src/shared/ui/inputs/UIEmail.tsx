import React from "react";
import { Inputs } from "../../../interfaces/Input";
import { observer } from "mobx-react-lite";
import ResumeStore from "../../../store/ResumeStore";
import '../../styles/input.css';

const UIEmail:React.FC<Inputs> = ({value, onChange}) => {
    return(
        <input 
            type="email" 
            placeholder='Email'
            value={value}
            onChange={(e)=>onChange(ResumeStore.email = e.target.value)}
        />
    );
}
export default observer(UIEmail);