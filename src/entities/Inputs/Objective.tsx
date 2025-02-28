import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css';
import FCObjective from "../../features/Objective";

const Objective = () =>{
    const {objective, setObjective} = FCObjective();

    return(
        <input
        type="text"
        className="w-[73%] h-[4%] mb-[15px]"
        value={objective}
        onChange={(e)=>setObjective(CVStore.objective = e.target.value)}
        placeholder="Objective"
        required/>
    );
}
export default observer(Objective);