import React from "react";
import { Inputs } from "../../../interfaces/Input";

const UIDescrtiption:React.FC<Inputs> = ({value, onChange}) => {
    return(
        <div>
            <input 
            type="text" 
            placeholder='Description'
            value={value}
            onChange={(e)=> onChange(e.target.value)}
            />
        </div>
    );
}
export default UIDescrtiption