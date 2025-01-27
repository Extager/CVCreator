import UIlastName from "../shared/ui/UIlastName";
import useSendLastName from "../features/LastName";

export default function LastName(){
    useSendLastName();
    return(
        <UIlastName />
    )
}