import FCTitlte from "../../features/Title";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css'

const Title = () =>{
    const {title, setTitle} = FCTitlte();

    return(
        <div className="">
            <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(CVStore.title = e.target.value)}
            className="w-[73%] h-[4%]"
            required
            />
        </div>
    )
}
export default observer(Title);