import FCPhoneNumber from "../features/PhoneNumber";

const PhoneNumber = () =>{
    const {phonenumber, setPhonenumber} = FCPhoneNumber();

    return(
        <div>
            <input
            type="tel"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e)=>setPhonenumber(e.target.value)}/>
        </div>
    )
}
export default PhoneNumber;