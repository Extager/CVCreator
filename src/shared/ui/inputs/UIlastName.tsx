import React from "react";
import { Inputs } from "../../../interfaces/Input";

const UIlastName:React.FC<Inputs> = ({value, onChange}) =>{
    return(
        <div>
            <input 
            type="text" 
            placeholder='Last Name'
            value={value}
            onChange={(e)=>{onChange(e.target.value)}}
            />
        </div>
    );
}
export default UIlastName;