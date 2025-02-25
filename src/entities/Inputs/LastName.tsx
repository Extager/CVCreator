import FCLastName from "../../features/LastName";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css'

const LastName = () =>{
    const {lastName, setLastName} = FCLastName();

    return (
        <div>
            <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e)=>setLastName(CVStore.lastName = e.target.value )}
            className="w-[73%] h-[4%]"
            required/>
        </div>
    );
}
export default observer(LastName);