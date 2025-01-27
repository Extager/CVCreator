import UIfirstName from "../shared/ui/UIfirstName";
import useSendFirstName from "../features/FirstName";

export default function FirstName(){
    const {firstName, setFirstName} = useSendFirstName();
    return(
        <UIfirstName value={firstName} onChange={setFirstName}/>
    )
}