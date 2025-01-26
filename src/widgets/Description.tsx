import useSendDescription from "../features/Description";
import UIDescrtiption from "../compontents/ui/inputs/UIDescrtiption";

export default function Description (){
    useSendDescription();
    return(
        <div>
            <UIDescrtiption />
        </div>
    )
}