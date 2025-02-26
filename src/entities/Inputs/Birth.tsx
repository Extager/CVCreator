import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css';

const Birth = () =>{
    return(
        <input
        type="text"
        value={CVStore.birth || ""}
        onChange={(e)=>CVStore.birth = e.target.value}
        placeholder="Birth"
        className="h-[4%] w-[73%]"
        required/>
    );
}
export default observer(Birth);