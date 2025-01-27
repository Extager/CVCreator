import React from "react";
import { Inputs } from "../../interfaces/Input";

const UITitle:React.FC<Inputs> =({value, onChange}) =>{
    return(
        <div>
            <input 
            type="text"
            placeholder='Title'
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            />
        </div>
    );
}
export default UITitle;