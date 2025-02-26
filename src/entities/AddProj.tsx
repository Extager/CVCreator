import CVStore from "../store/CV";
import ProjDescribe from "./Inputs/ProjDescribe";
import ProjName from "./Inputs/ProjName";
import { observer } from "mobx-react-lite";
import Switch_proj from "./Switch_proj";
import '../shared/styles/Btn.css';

const AddProj = () =>{
    
    return(
        <div>
            {CVStore.showed?
            (
                <div className="flex flex-col px-[5.188rem] py-5">
                    <span className="text-2xl">Projects</span>
                    <span>Number: {CVStore.id_proj}</span>
                    <div className="flex flex-col">
                        <ProjName />
                        <ProjDescribe />
                        <Switch_proj />
                    </div>
                </div>
            )
            :
            (
                <div className="flex pl-[5.188rem] pt-5 items-center">
                    <button
                    onClick={()=>CVStore.setShowedProj()}>Add proj</button>
                </div>
            )
            }
        </div>
    );
}
export default observer(AddProj);