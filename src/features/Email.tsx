import { useState } from "react";

export default function useSendEmail(){
    const [email, setEmail] = useState<string>();
    return {email};
}