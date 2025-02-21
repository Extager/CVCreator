import { useState } from "react";

export default function FCLastName(){
    const [lastName, setLastName] = useState<string>("");
    
    return {lastName, setLastName}
}