import { useState } from "react";

export default function useSendAddress() {
  const [address, setAddress] = useState<string>("");
  return { address, setAddress };
}