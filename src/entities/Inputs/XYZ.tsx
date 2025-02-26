import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";

const XYZ = () => {
    return(
        <div className="flex ">
            <div className="flex justify-center items-center">
                <span className="mr-13">XYZ: </span>
            </div>
            <div className="flex gap-2 items-center align-middle">
                <input
                type="radio"
                value="A"
                checked={CVStore.selected_XYZ == "A"}
                onChange={(e)=>CVStore.selected_XYZ = e.target.value}
                className="mt-0"
                />

                <input
                type="radio"
                value="B"
                checked={CVStore.selected_XYZ == "B"}
                onChange={(e)=>CVStore.selected_XYZ = e.target.value}
                className="mt-0"/>

                <input
                type="radio"
                value="C"
                checked={CVStore.selected_XYZ == "C"}
                onChange={(e)=>CVStore.selected_XYZ = e.target.value}/>

                <input
                type="radio"
                value="D"
                checked={CVStore.selected_XYZ == "D"}
                onChange={(e)=>CVStore.selected_XYZ = e.target.value}/>
            </div>
            </div>

    );
}
export default observer(XYZ);