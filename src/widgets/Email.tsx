import UIEmail from "../shared/ui/inputs/UIEmail";
import useSendEmail from "../features/Email";

export default function Email(){
    const {email, setEmail} = useSendEmail();
    return(
        <UIEmail value={email} onChange={setEmail}/>
    )
}