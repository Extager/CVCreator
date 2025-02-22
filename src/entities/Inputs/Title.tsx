import FCTitlte from "../../features/Title";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";

const Title = () =>{
    const {title, setTitle} = FCTitlte();

    return(
        <div>
            <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(CVStore.title = e.target.value)}/>
        </div>
    )
}
export default observer(Title);