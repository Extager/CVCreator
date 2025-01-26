import UIlastName from "../compontents/ui/inputs/UIlastName";
import useSendLastName from "../features/LastName";

export default function LastName(){
    useSendLastName();
    return(
        <UIlastName />
    )
}