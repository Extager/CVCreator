import React from "react";
import { Inputs } from "../../../interfaces/Input";
import { observer } from "mobx-react-lite";
import ResumeStore from "../../../store/ResumeStore";

const UIlastName:React.FC<Inputs> = ({value, onChange}) =>{
    return(
        <div>
            <input 
            type="text" 
            placeholder='Last Name'
            value={value}
            onChange={(e)=>{onChange(ResumeStore.lastName = e.target.value)}}
            />
        </div>
    );
}
export default observer(UIlastName);