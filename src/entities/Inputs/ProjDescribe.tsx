import { observer } from "mobx-react-lite"
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css';

const ProjDescribe = () =>{
    return(
        <input
        type="text"
        className="w-[73%] h-[4%] mb-5"
        value={CVStore.proj[CVStore.id_proj]?.[1] || ''}
        onChange={(e)=>CVStore.proj[CVStore.id_proj][1] = e.target.value}
        placeholder="Project Description"/>
    );
}
export default observer(ProjDescribe);