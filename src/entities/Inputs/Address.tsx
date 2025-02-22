import FCAddress from "../../features/Address";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";

const Address = () =>{
    const {address, setAddress} = FCAddress();

    return(
        <div>
            <input
            type="text"
            placeholder="YourAddress"
            value={address}
            onChange={(e) => setAddress(CVStore.address = e.target.value)}/>
        </div>
    );
}
export default observer(Address);