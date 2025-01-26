import UIEmail from "../compontents/ui/inputs/UIEmail";
import useSendEmail from "../features/Email";

export default function Email(){
    useSendEmail();
    return(
        <UIEmail />
    )
}