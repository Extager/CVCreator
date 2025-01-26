import { useState } from "react";

export default function useSendPhoneNumber(){
    const [phoneNumber, setPhoneNumber] = useState<string>();
    return {phoneNumber};
}