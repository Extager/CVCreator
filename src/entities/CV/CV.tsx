import { useRef } from "react";
import { observer } from "mobx-react-lite";
import { useReactToPrint } from "react-to-print";
import CVStore from "../../store/CV";

const CV = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    const contentSave = useReactToPrint({
        contentRef,
        documentTitle: "YourCV",
        bodyClass: "print-style",
    })


    return(
        <div ref={contentRef} className="w-[50vw] flex h-screen bg-white text-black px-5 py-5">
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

            </div>

            <div className="w-[75%] flex flex-col">
                <p>{CVStore.firstName} {CVStore.lastName}</p>
                <p>{CVStore.description}</p>
                <hr />
                <p>Work Experience</p>
                {Object.keys(CVStore.experience).map((id)=>{
                    const el = CVStore.experience[id];
                    return(
                        <div key={id}>
                            <span>{id}. </span>
                            <span>{el[0]}</span>
                            <p>{el[1]}</p>
                        </div>
                    );
                })}
            </div>

            <div className="flex">
                <button
                onClick={()=>contentSave()}>
                    <span>Save</span>
                </button>

            </div>
        </div>
    );
}
export default observer(CV);