import React from "react";
import { Inputs } from "../../../interfaces/Input";
import { observer } from "mobx-react-lite";
import ResumeStore from "../../../store/ResumeStore";
import '../../styles/input.css';

const UITitle:React.FC<Inputs> =({value, onChange}) =>{
    return(
        <input 
            type="text"
            placeholder='Title'
            value={value}
            onChange={(e)=>onChange(ResumeStore.title = e.target.value)}
        />
    );
}
export default observer(UITitle);