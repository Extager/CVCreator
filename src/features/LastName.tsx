import { useState } from "react";

export default function useSendLastName(){
    const [lastName, setLastName] = useState<string>();
    return {lastName};
}