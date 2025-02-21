import FCFirstName from "../features/FirstName";

const FirstName = () =>{
    const {firstName, setFirstName} = FCFirstName();

    return(
        <div>
            <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
    );
}
export default FirstName;