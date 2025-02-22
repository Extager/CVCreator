import FCLastName from "../../features/LastName";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";

const LastName = () =>{
    const {lastName, setLastName} = FCLastName();

    return (
        <div>
            <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e)=>setLastName(CVStore.lastName = e.target.value )}/>
        </div>
    );
}
export default observer(LastName);