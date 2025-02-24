import { useState } from "react";

export default function FCShowed(){
    const [show, setShow] = useState<boolean>(false);
    return{ show, setShow };
}