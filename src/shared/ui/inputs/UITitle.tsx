import React from "react";
import { Inputs } from "../../../interfaces/Input";
import { observer } from "mobx-react-lite";
import ResumeStore from "../../../store/ResumeStore";

const UITitle:React.FC<Inputs> =({value, onChange}) =>{
    return(
        <div>
            <input 
            type="text"
            placeholder='Title'
            value={value}
            onChange={(e)=>onChange(ResumeStore.title = e.target.value)}
            />
        </div>
    );
}
export default observer(UITitle);