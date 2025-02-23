import FCFirstName from "../../features/FirstName";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css'

const FirstName = () =>{
    const {firstName, setFirstName} = FCFirstName();

    return(
        <div>
            <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e)=>setFirstName(CVStore.firstName = e.target.value)}
            required
            />
        </div>
    );
}
export default observer(FirstName);