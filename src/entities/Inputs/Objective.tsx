import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css';

const Objective = () =>{
    return(
        <input
        type="text"
        className="w-[73%] h-[4%] mb-[15px]"
        value={CVStore.objective || ''}
        onChange={(e)=>CVStore.objective = e.target.value}
        placeholder="Objective"
        required/>
    );
}
export default observer(Objective);