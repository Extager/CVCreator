import { useState } from "react";

export default function FCFirstName(){
    const [firstName, setFirstName] = useState<string>("");
    
    return {firstName, setFirstName}
}