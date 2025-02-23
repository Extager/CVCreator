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
        <div ref={contentRef} className="w-[50vw] flex flex-col h-screen bg-white text-black">
            <p className="text-center">{CVStore.title}</p>
            <p>
                <strong>Name: </strong> {CVStore.firstName} {CVStore.lastName}
            </p>
            <p>
                <strong>Description: </strong> {CVStore.description}
            </p>
            <p>
                <strong>Email: </strong> {CVStore.email}
            </p>
            <p>
                <strong>Address: </strong> {CVStore.address}
            </p>
            <p>
                <strong>Phone Number: </strong> {CVStore.phonenumber}
            </p>
            <p></p>
            <button
            onClick={()=>contentSave()}>
                <span>Save</span>
            </button>
        </div>
    );
}
export default observer(CV);