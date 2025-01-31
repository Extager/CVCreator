import { useRef } from "react";
import { observer } from "mobx-react-lite";
import ResumeStore from "../../../store/ResumeStore";
import { useReactToPrint } from "react-to-print";
import './UICV.css';

const UICV = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const contentSave = useReactToPrint({
    contentRef,
    documentTitle: "YourCV",
    bodyClass: "print-style",
  });

  const imageURL = ResumeStore.image ? URL.createObjectURL(ResumeStore.image) : "";

  return (
    <div>
      <div ref={contentRef} className="cv">
        <h2>{ResumeStore.title}</h2>
        {ResumeStore.image ? (
          <img src={imageURL} alt="image" />
        ) : (
          <p>Изображение отсутствует</p>
        )}
        <p >
          <strong>Name:</strong> {ResumeStore.firstName} {ResumeStore.lastName}
        </p>
        <p >
          <strong>Email:</strong> {ResumeStore.email}
        </p>
        <p >
          <strong>Phone:</strong> {ResumeStore.phoneNumber}
        </p>
        <p >
          <strong>Address:</strong> {ResumeStore.address}
        </p>
        <p >
          <strong>Description:</strong> {ResumeStore.description}
        </p>
      </div>

      <button onClick={()=>contentSave()} className="save-btn">Save/Print</button>
    </div>
  );
};

export default observer(UICV);