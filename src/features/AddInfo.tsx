import { useState } from "react";

export default function FCAddInfo(){
    const [addInfo, setAddInfo] = useState<string>("");

    return { addInfo, setAddInfo }
}