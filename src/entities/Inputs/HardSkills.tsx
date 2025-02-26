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
                checked={CVStore.selected == "A"}
                onChange={(e)=>CVStore.selected = e.target.value}
                className="mt-0"
                />

                <input
                type="radio"
                value="B"
                checked={CVStore.selected == "B"}
                onChange={(e)=>CVStore.selected = e.target.value}
                className="mt-0"/>

                <input
                type="radio"
                value="C"
                checked={CVStore.selected == "C"}
                onChange={(e)=>CVStore.selected = e.target.value}/>

                <input
                type="radio"
                value="D"
                checked={CVStore.selected == "D"}
                onChange={(e)=>CVStore.selected = e.target.value}/>
            </div>
            </div>

    );
}
export default observer(HardSkiils);