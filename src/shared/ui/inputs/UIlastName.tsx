import React from "react";
import { Inputs } from "../../../interfaces/Input";
import { observer } from "mobx-react-lite";
import ResumeStore from "../../../store/ResumeStore";
import '../../styles/input.css';

const UIlastName:React.FC<Inputs> = ({value, onChange}) =>{
    return(
        <input 
            type="text" 
            placeholder='Last Name'
            value={value}
            onChange={(e)=>{onChange(ResumeStore.lastName = e.target.value)}}
            />
    );
}
export default observer(UIlastName);