import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import FCAddInfo from "../../features/AddInfo";

const AddInfo = () =>{

    const {addInfo, setAddInfo} = FCAddInfo();

    return(
        <input
        type="text"
        value={addInfo}
        onChange={(e)=>setAddInfo(CVStore.inform = e.target.value)}
        className="w-[73%] h-[4%] mb-5"
        placeholder="Addition information"/>
    );
}
export default observer(AddInfo);
