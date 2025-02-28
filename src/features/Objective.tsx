import { useState } from "react";

export default function FCObjective(){
    const [objective, setObjective] = useState<string>("");
    
    return{ objective, setObjective };
}