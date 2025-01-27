import UIfirstName from "../shared/ui/inputs/UIfirstName";
import useSendFirstName from "../features/FirstName";

export default function FirstName(){
    const {firstName, setFirstName} = useSendFirstName();
    return(
        <UIfirstName value={firstName} onChange={setFirstName}/>
    )
}