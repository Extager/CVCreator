import FCAddress from "../features/Address";

const Address = () =>{
    const {address, setAddress} = FCAddress();

    return(
        <div>
            <input
            type="text"
            placeholder="YourAddress"
            value={address}
            onChange={(e) => setAddress(e.target.value)}/>
        </div>
    );
}
export default Address;