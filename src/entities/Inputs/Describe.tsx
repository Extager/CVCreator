import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css'
const Describe = () => {

    const handleDescr = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        CVStore.setDescribe(CVStore.id, e.target.value)
    }

    return(
            <input
            type="text"
            value={CVStore.experience[CVStore.id]?.[1] || ""}
            onChange={handleDescr}
            className="h-[4%] w-[73%] mb-5"
            placeholder="Describe"/>
    );
}
export default observer(Describe);