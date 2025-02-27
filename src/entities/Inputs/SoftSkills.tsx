import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";

const SoftSkills = () => {
    return(
        <div className="flex gap-2 items-center align-middle">
            <input
                type="radio"
                value="A"
                checked={CVStore.selected_SS == "A"}
                onChange={(e)=>CVStore.selected_SS = e.target.value}
                className="mt-0"
            />

            <input
                type="radio"
                value="B"
                checked={CVStore.selected_SS == "B"}
                onChange={(e)=>CVStore.selected_SS = e.target.value}
                className="mt-0"
            />

            <input
                type="radio"
                value="C"
                checked={CVStore.selected_SS == "C"}
                onChange={(e)=>CVStore.selected_SS = e.target.value}
            />

            <input
                type="radio"
                value="D"
                checked={CVStore.selected_SS == "D"}
                onChange={(e)=>CVStore.selected_SS = e.target.value}
            />
        </div>

    );
}
export default observer(SoftSkills);