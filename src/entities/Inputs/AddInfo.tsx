import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";

const AddInfo = () =>{
    return(
        <input
        type="text"
        value={CVStore.inform}
        onChange={(e)=>CVStore.inform = e.target.value}
        className="w-[73%] h-[4%] mb-5"
        placeholder="Addition information"/>
    );
}
export default observer(AddInfo);
