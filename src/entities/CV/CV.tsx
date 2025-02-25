import { useRef } from "react";
import { observer } from "mobx-react-lite";
import { useReactToPrint } from "react-to-print";
import CVStore from "../../store/CV";
import '../../shared/styles/CV.css';
import '../../shared/styles/Btn.css';
import Avatar from '../../shared/img/avatar.svg';
const CV = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    const contentSave = useReactToPrint({
        contentRef,
        documentTitle: "YourCV",
        bodyClass: "print-style",
    })

    const imageURL = CVStore.img ? URL.createObjectURL(CVStore.img) : "";


    return(
        <div ref={contentRef} className="w-[50vw] flex h-auto justify-center bg-white text-black px-5 py-5">
            <div className="w-[25%] flex flex-col gap-3 pr-1 border-r">
                {imageURL != ""?
                (
                    <>
                        <img
                        src={imageURL}
                        alt="YourIMG" 
                        className="w-[100px] h-[100px] rounded-4xl"/>
                    </>
                )
                :
                (
                    <>
                        <img
                        src={Avatar}
                        alt="Avatar img"
                        className="w-[100px] h-[100px]"
                        />                    
                    </>
                )
                }

                <p className="font-medium text-xl text-pretty max-lg:text-balance">PERSONAL DETAILS</p>
                <p className="font-medium text-lg">Name</p>
                <p className="font-thin mb-2">
                    {CVStore.firstName} {CVStore.lastName}
                </p>

                <p className="font-medium">Address</p>
                <p className="font-thin mb-2">
                    {CVStore.address}
                </p>

                <p className="font-medium text-pretty max-lg:text-balance">Phone number</p>
                <p className="font-thin mb-2">{CVStore.phonenumber}</p>

                <p className="font-medium">Email</p>
                <p className="font-thin">{CVStore.email}</p>

                <div className="flex mt-auto">
                    <button
                        onClick={()=>contentSave()}
                        className="btn-id">
                            <span>Save</span>
                    </button>
                </div>

            </div>

            <div className="w-[75%] flex flex-col pl-5">
                <p className="mb-5 font-medium">{CVStore.title}</p>
                <p className="font-medium">{CVStore.firstName} {CVStore.lastName}</p>
                <p>{CVStore.description}</p>

                <hr className="my-5"/>

                <p>Work Experience</p>
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
            
            </div>

            

        </div>
    );
}
export default observer(CV);