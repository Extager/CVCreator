import React from "react";
import { Inputs } from "../../../interfaces/Input";
import { observer } from "mobx-react-lite";
import ResumeStore from "../../../store/ResumeStore";

const UIPhoneNumber:React.FC<Inputs> =({value, onChange}) =>{
    return(
        <div>
            <input 
            type="tel" 
            placeholder='Phone number'
            value={value}
            onChange={(e)=>{onChange(ResumeStore.phoneNumber = e.target.value)}}/>
        </div>
    );
}
export default observer(UIPhoneNumber);