import UIPhoneNumber from "../compontents/ui/inputs/UIPhoneNumber";
import useSendPhoneNumber from "../features/PhoneNumber";

export default function PhoneNumber(){
    useSendPhoneNumber();
    return(
        <UIPhoneNumber />
    )
}