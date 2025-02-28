import HardSkills from "./Inputs/HardSkills";
import SoftSkills from "./Inputs/SoftSkills";
import XYZ from "./Inputs/XYZ";

export default function Skills() {
    return(
        <div className="flex">
            <div className="flex flex-col justify-center mr-3 mt-3">
                <p>Hard Skills</p>
                <p>Soft skills</p>
                <p>XYZ</p>
            </div>

            <div className="flex flex-col mb-2">
                <div className="flex gap-3 ">
                    <span>A</span>
                    <span>B</span>
                    <span>C</span>
                    <span>D</span>
                </div>
                <div className="flex-col flex justify-center items-center gap-y-2">
                    <HardSkills />
                    <SoftSkills />
                    <XYZ />
                </div>
            </div>
        </div>
    );
}