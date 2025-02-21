import FCTitlte from "../features/Title";

const Title = () =>{
    const {title, setTitle} = FCTitlte();

    return(
        <div>
            <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}/>
        </div>
    )
}
export default Title;