import { observer } from "mobx-react-lite";
import CVStore from "../store/CV";

const Switch = observer(() => {
    return (
        <div className="flex w-full justify-between">
            <button
                className=""
                onClick={() => CVStore.prevID()} 
            >
                Previous
            </button>

            <button
                onClick={() => CVStore.nextId()} 
            >
                Next
            </button>
        </div>
    );
});

export default Switch;