import { useRef } from "react";
import { observer } from "mobx-react-lite";
import { useReactToPrint } from "react-to-print";
import CVStore from "../../store/CV";
import '../../shared/styles/CV.css';

const CV = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    const contentSave = useReactToPrint({
        contentRef,
        documentTitle: "YourCV",
        bodyClass: "print-style",
    })


    return(
        <div ref={contentRef} className="w-[50vw] flex h-screen justify-center bg-white text-black px-5 py-5">
            <div className="w-[25%] flex flex-col">
                <img src="#" alt="Photo" />

                <p>Personal information</p>
                <p>Name</p>
                <p>
                    {CVStore.firstName} {CVStore.lastName}
                </p>

                <p>Address</p>
                <p>
                    {CVStore.address}
                </p>

                <p>Phone number</p>
                <p>{CVStore.phonenumber}</p>

                <p>Email</p>
                <p>{CVStore.email}</p>

                <div className="flex justify-center ">
                    <button
                        onClick={()=>contentSave()}
                        className="save">
                            <span>Save</span>
                    </button>
                </div>

            </div>

            <div className="w-[75%] flex flex-col">
                <p>{CVStore.firstName} {CVStore.lastName}</p>
                <p>{CVStore.description}</p>

                <hr />

                <p>Work Experience</p>
                {Object.keys(CVStore.experience).map((id)=>{
                    const el = CVStore.experience[id];
                    if (el[0].length != 0 || el[1].length != 0){
                        return(
                            <div key={id}>
                                <span>{id}. </span>
                                <span>{el[0]}</span>
                                <p>{el[1]}</p>
                            </div>
                        );
                    }
                })}
            
            </div>

            

        </div>
    );
}
export default observer(CV);