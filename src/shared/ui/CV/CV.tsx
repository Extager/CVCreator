import React, { forwardRef } from "react";
import { observer } from "mobx-react-lite";
import ResumeStore from "../../../store/ResumeStore";

const CV = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="p-5 border">
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
    </div>
  );
});

export default observer(CV);