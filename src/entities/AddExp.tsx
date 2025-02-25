import { observer } from "mobx-react-lite";
import Position from "./Inputs/Position";
import Describe from "./Inputs/Describe";
import FCShowed from "../features/Showed";
import Switch from "./Switch";
import CVStore from "../store/CV";

const AddExp = observer(() => {
    const { show, setShow } = FCShowed();
    return (
        <div>
            {show ? (
                <div className="flex flex-col px-[5.188rem]">
                    <p>{CVStore.id}</p>
                        <Position />
                        <Describe />
                        <Switch />
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <button
                    onClick={() => setShow(true)}
                    >Add</button>
                </div>
            )}
        </div>
    );
});


export default AddExp;