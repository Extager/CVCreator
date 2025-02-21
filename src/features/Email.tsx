import { useState } from "react";

export default function FCEmail() {
    const [email, setEmail] = useState<string>("");

    return { email, setEmail }; 
}