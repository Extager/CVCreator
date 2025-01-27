import UIEmail from "../shared/ui/UIEmail";
import useSendEmail from "../features/Email";

export default function Email(){
    useSendEmail();
    return(
        <UIEmail />
    )
}