import { useState } from "react";

export default function FCAddress(){
    const [address, setAddress] = useState<string>("");

    return {address, setAddress}
}