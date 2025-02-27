import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";

const Image = () =>{
    const changeImg = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if (e.target.files && e.target.files[0]){
            CVStore.setImg(e.target.files[0]);
        }
    }
    return(
        <input
        type="file"
        accept="image/*"
        onChange={changeImg}
        className="w-[73%] my-[15px]"
        />
    );
}
export default observer(Image);