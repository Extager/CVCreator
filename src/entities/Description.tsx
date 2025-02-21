import FCDescription from "../features/Description";

const Description = () =>{
    const {description, setDescription} = FCDescription();

    return(
        <div>
            <input
            type="text"
            placeholder="Desctiption"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}/>
        </div>
    );
}
export default Description;