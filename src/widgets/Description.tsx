import useSendDescription from "../features/Description";
import UIDescrtiption from "../shared/ui/inputs/UIDescrtiption";

export default function Description (){
    const {description, setDescription} = useSendDescription();

    return(
        <div>
            <UIDescrtiption value={description} onChange={setDescription}/>
        </div>
    )
}