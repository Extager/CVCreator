import React from "react";
import { Inputs } from "../../../interfaces/Input";

const UIPhoneNumber:React.FC<Inputs> =({value, onChange}) =>{
    return(
        <div>
            <input 
            type="tel" 
            placeholder='Phone number'
            onChange={(e)=>{onChange(e.target.value)}}/>
        </div>
    );
}
export default UIPhoneNumber;