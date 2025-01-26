import { useState } from "react";


export default function useSendDescription() {
    const [description, setDescription] = useState<string>();
    return {description};
}