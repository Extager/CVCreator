import React from "react";
import UIAddress from "../compontents/ui/inputs/UIAddress";
import useSendAddress from "../features/Address";

export default function Address() {
  const { address, setAddress } = useSendAddress();

  return (
    <div>
      <UIAddress value={address} onChange={setAddress} />
    </div>
  );
}