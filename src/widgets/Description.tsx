import useSendDescription from "../features/Description";
import UIDescrtiption from "../shared/ui/UIDescrtiption";

export default function Description (){
    useSendDescription();
    return(
        <div>
            <UIDescrtiption />
        </div>
    )
}