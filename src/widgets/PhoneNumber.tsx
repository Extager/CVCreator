import UIPhoneNumber from "../shared/ui/UIPhoneNumber";
import useSendPhoneNumber from "../features/PhoneNumber";

export default function PhoneNumber(){
    const {phoneNumber, setPhoneNumber} = useSendPhoneNumber();
    return(
        <UIPhoneNumber value={phoneNumber} onChange={setPhoneNumber}/>
    )
}