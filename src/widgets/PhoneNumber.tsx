import UIPhoneNumber from "../shared/ui/inputs/UIPhoneNumber";
import useSendPhoneNumber from "../features/PhoneNumber";

export default function PhoneNumber(){
    const {phoneNumber, setPhoneNumber} = useSendPhoneNumber();
    return(
        <UIPhoneNumber value={phoneNumber} onChange={setPhoneNumber}/>
    )
}