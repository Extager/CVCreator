import UIfirstName from "../compontents/ui/inputs/UIfirstName";
import useSendFirstName from "../features/FirstName";

export default function FirstName(){
    useSendFirstName();
    return(
        <UIfirstName />
    )
}