import UIEmail from "../shared/ui/UIEmail";
import useSendEmail from "../features/Email";

export default function Email(){
    const {email, setEmail} = useSendEmail();
    return(
        <UIEmail value={email} onChange={setEmail}/>
    )
}