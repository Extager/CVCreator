import FCLastName from "../features/LastName";

const LastName = () =>{
    const {lastName, setLastName} = FCLastName();

    return (
        <div>
            <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}/>
        </div>
    );
}
export default LastName;