import React from "react";
import { Inputs } from "../../../interfaces/Input";
import { observer } from "mobx-react-lite";
import ResumeStore from "../../../store/ResumeStore";

const UIfirstName:React.FC<Inputs> = ({value, onChange}) => {
    return(
        <div>
            <input 
            type="text" 
            placeholder='First Name'
            value={value}
            onChange={(e)=>onChange(ResumeStore.firstName = e.target.value)}
            />
        </div>
    );
}
export default observer(UIfirstName);