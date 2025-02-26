import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";

const HardSkiils = () => {
    return(
        <div className="flex ">
            <div className="flex justify-center items-center">
                <span className="mr-2">Hard skiils: </span>
            </div>
            <div className="flex gap-2 items-center align-middle">
                <input
                type="radio"
                value="A"
                checked={CVStore.selected_HS == "A"}
                onChange={(e)=>CVStore.selected_HS = e.target.value}
                className="mt-0"
                />

                <input
                type="radio"
                value="B"
                checked={CVStore.selected_HS == "B"}
                onChange={(e)=>CVStore.selected_HS = e.target.value}
                className="mt-0"/>

                <input
                type="radio"
                value="C"
                checked={CVStore.selected_HS == "C"}
                onChange={(e)=>CVStore.selected_HS = e.target.value}/>

                <input
                type="radio"
                value="D"
                checked={CVStore.selected_HS == "D"}
                onChange={(e)=>CVStore.selected_HS = e.target.value}/>
            </div>
            </div>

    );
}
export default observer(HardSkiils);