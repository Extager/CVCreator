import UIlastName from "../shared/ui/UIlastName";
import useSendLastName from "../features/LastName";

export default function LastName(){
    const {lastName, setLastName} = useSendLastName();
    return(
        <UIlastName value={lastName} onChange={setLastName}/>
    )
}