import React from "react";
import { Inputs } from "../../interfaces/Input";

const UIEmail:React.FC<Inputs> = ({value, onChange}) => {
    return(
        <div>
            <input 
            type="email" 
            placeholder='Email'
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            />
        </div>
    );
}
export default UIEmail;