import React from "react";
import UIAddress from "../shared/ui/UIAddress";
import useSendAddress from "../features/Address";

export default function Address() {
  const { address, setAddress } = useSendAddress();

  return (
    <div>
      <UIAddress value={address} onChange={setAddress} />
    </div>
  );
}