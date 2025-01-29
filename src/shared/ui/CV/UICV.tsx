import { forwardRef, useRef } from "react";
import { observer } from "mobx-react-lite";
import ResumeStore from "../../../store/ResumeStore";
import { useReactToPrint } from "react-to-print";

const UICV = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const contentSave = useReactToPrint({contentRef});
  return (
    <div ref={contentRef}>
      <h2>{ResumeStore.title}</h2>
      <p>
        <strong>Name:</strong> {ResumeStore.firstName} {ResumeStore.lastName}
      </p>
      <p>
        <strong>Email:</strong> {ResumeStore.email}
      </p>
      <p>
        <strong>Phone:</strong> {ResumeStore.phoneNumber}
      </p>
      <p>
        <strong>Address:</strong> {ResumeStore.address}
      </p>
      <p>
        <strong>Description:</strong> {ResumeStore.description}
      </p>
      <button onClick={()=>contentSave()}>Save/Print</button>
    </div>
  );
};

export default observer(UICV);