import React from "react";
import { Inputs } from "../../../interfaces/Input";
import { observer } from "mobx-react-lite";
import ResumeStore from "../../../store/ResumeStore";
import '../../styles/input.css';

const UIfirstName:React.FC<Inputs> = ({value, onChange}) => {
    return(
        <input 
            type="text" 
            placeholder='First Name'
            value={value}
            onChange={(e)=>onChange(ResumeStore.firstName = e.target.value)}
        />
    );
}
export default observer(UIfirstName);