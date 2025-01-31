import React from "react";
import { Inputs } from "../../../interfaces/Input";
import { observer } from "mobx-react-lite";
import ResumeStore from "../../../store/ResumeStore";
import '../../styles/input.css';

const UIDescrtiption:React.FC<Inputs> = ({value, onChange}) => {
    return(
        <input 
            type="text" 
            placeholder='Description'
            value={value}
            onChange={(e)=> onChange(ResumeStore.description = e.target.value)}
        />
    );
}
export default observer(UIDescrtiption);