import React from "react";
import { Inputs } from "../../interfaces/Input";

const UIfirstName:React.FC<Inputs> = ({value, onChange}) => {
    return(
        <div>
            <input 
            type="text" 
            placeholder='First Name'
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            />
        </div>
    );
}
export default UIfirstName;