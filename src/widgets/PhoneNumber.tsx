import UIPhoneNumber from "../shared/ui/UIPhoneNumber";
import useSendPhoneNumber from "../features/PhoneNumber";

export default function PhoneNumber(){
    useSendPhoneNumber();
    return(
        <UIPhoneNumber />
    )
}