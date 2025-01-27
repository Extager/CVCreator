import { useState } from "react";

export default function useSendFirstName(){
    const [firstName, setFirstName] = useState<string>("");

    return {firstName, setFirstName};
}