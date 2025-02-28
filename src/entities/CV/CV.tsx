import { useRef } from "react";
import { observer } from "mobx-react-lite";
import { useReactToPrint } from "react-to-print";
import CVStore from "../../store/CV";
import '../../shared/styles/CV.css';
import '../../shared/styles/Btn.css';
import Avatar from '../../shared/img/avatar.svg';
import Skills from "../Skills";

const CV = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    const contentSave = useReactToPrint({
        contentRef,
        documentTitle: CVStore.title,
        bodyClass: "print-style",
    })

    const imageURL = CVStore.img ? URL.createObjectURL(CVStore.img) : "";


    return(
        <div ref={contentRef} className="w-[50vw] flex h-auto justify-center bg-white text-black px-5 py-5">
            <div className="w-[25%] flex flex-col gap-3 border-r pr-3 ">
                {imageURL != ""?
                (
                    <div>
                        <img
                        src={imageURL}
                        alt="YourIMG" 
                        className="w-[100px] h-[100px] rounded-4xl"/>
                    </div>
                )
                :
                (
                    <div>
                        <img
                        src={Avatar}
                        alt="Avatar img"
                        className="w-[100px] h-[100px]"
                        />                    
                    </div>
                )
                }

                <p className="font-medium text-xl text-pretty max-lg:text-balance mb-3">PERSONAL INFO</p>
                <p className="font-medium text-lg">Name</p>
                <p className="font-sans mb-2">
                    {CVStore.firstName} {CVStore.lastName}
                </p>

                <p className="font-medium text-lg">Address</p>
                <p className="font-sans mb-2">
                    {CVStore.address}
                </p>

                <p className="font-medium text-lg text-pretty max-lg:text-balance">Phone Number</p>
                <p className="font-sans mb-2">{CVStore.phonenumber}</p>

                <p className="font-medium text-lg text-pretty max-lg:text-balance">Date of birth</p>
                <p className="font-sans mb-2">{CVStore.birth}</p>


                <p className="font-medium text-lg">Email</p>
                <p className="font-sans">{CVStore.email}</p>

                <div className="flex mt-auto">
                    <button
                        onClick={()=>contentSave()}
                        className="btn-id">
                            <span>Save</span>
                    </button>
                </div>

            </div>

            <div className="w-[75%] flex flex-col pl-5">
                <p className="font-medium text-lg">{CVStore.firstName} {CVStore.lastName}</p>
                <p className="font-sans">{CVStore.description}</p>

                <hr className="my-3"/>

                {/* <p className="font-medium text-lg">Work Experience</p>

                {Object.keys(CVStore.experience).map((id)=>{
                    const el = CVStore.experience[id];
                    if (el[0].length != 0 || el[1].length != 0){
                        return(
                            <div key={id}>
                                <span className="font-medium">{id}. </span>
                                <span className="font-bold text-pretty max-lg:text-balance">{el[0]}</span>
                                <p className="mb-5 font-thin text-pretty max-lg:text-balance">{el[1]}</p>
                            </div>
                        );
                    }
                })}

                <hr className="my-3"/> */}

                <p className="font-medium text-lg">Objective</p>
                <p className="mb-5 font-sans text-pretty max-lg:text-balance">
                    {CVStore.objective}
                </p>

                <hr className="mb-3"/>

                <p className="mb-1 font-medium text-lg">Skills</p>
                <Skills />

                <hr className="my-3"/>

                <p className="mb-5 font-medium text-lg">Additional information</p>

                <p className="mb-5 font-sans text-pretty max-lg:text-balance">
                    {CVStore.inform}
                </p>

                <hr className="mb-3"/>

                <p className="font-medium text-lg">Projects</p>

                {Object.keys(CVStore.proj).map((id)=>{
                    const el = CVStore.proj[id];
                    if (el[0].length != 0 || el[1].length != 0){
                        return(
                            <div key={id}>
                                <span className="font-medium">{id}. </span>
                                <span className="font-semibold text-pretty text-lg max-lg:text-balance">{el[0]}</span>
                                <p className="mb-5 font-sans text-pretty max-lg:text-balance mt-5">{el[1]}</p>
                            </div>
                        );
                    }
                })}
            </div>

            

        </div>
    );
}
export default observer(CV);