import UIfirstName from "../shared/ui/UIfirstName";
import useSendFirstName from "../features/FirstName";

export default function FirstName(){
    useSendFirstName();
    return(
        <UIfirstName />
    )
}