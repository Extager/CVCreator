import FCPhoneNumber from "../../features/PhoneNumber";
import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import '../../shared/styles/Input.css'

const PhoneNumber = () =>{
    const {phonenumber, setPhonenumber} = FCPhoneNumber();

    return(
        <div>
            <input
            type="tel"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e)=>setPhonenumber(CVStore.phonenumber = e.target.value)}
            maxLength={11}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            />
        </div>
    )
}
export default observer(PhoneNumber);