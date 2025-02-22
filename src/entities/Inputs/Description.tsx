import FCDescription from "../../features/Description";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";

const Description = () =>{
    const {description, setDescription} = FCDescription();

    return(
        <div>
            <input
            type="text"
            placeholder="Desctiption"
            value={description}
            onChange={(e)=>setDescription(CVStore.description = e.target.value)}/>
        </div>
    );
}
export default observer(Description);