import FCPhoneNumber from "../../features/PhoneNumber";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";

const PhoneNumber = () =>{
    const {phonenumber, setPhonenumber} = FCPhoneNumber();

    return(
        <div>
            <input
            type="tel"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e)=>setPhonenumber(CVStore.phonenumber = e.target.value)}/>
        </div>
    )
}
export default observer(PhoneNumber);