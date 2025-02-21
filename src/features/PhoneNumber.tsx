import { useState } from "react";

export default function FCPhoneNumber(){
    const [phonenumber, setPhonenumber] = useState<string>("");
    
    return {phonenumber, setPhonenumber}
}