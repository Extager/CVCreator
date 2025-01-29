import React from "react";
import { Inputs } from "../../../interfaces/Input";
import { observer } from "mobx-react-lite";
import ResumeStore from "../../../store/ResumeStore";

const UIEmail:React.FC<Inputs> = ({value, onChange}) => {
    return(
        <div>
            <input 
            type="email" 
            placeholder='Email'
            value={value}
            onChange={(e)=>onChange(ResumeStore.email = e.target.value)}
            />
        </div>
    );
}
export default observer(UIEmail);