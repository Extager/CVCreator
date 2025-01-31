import UITitle from "../shared/ui/inputs/UITitle";
import useSendTitle from "../features/Title";

export default function Title(){
    const {title, setTitle} = useSendTitle();
    return(
        <UITitle value={title} onChange={setTitle}/>
    )
}