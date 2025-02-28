import { useState } from "react";

export default function FCBirth(){
    const [birth, setBirth] = useState<string>("");
    
    return{ birth, setBirth };
}