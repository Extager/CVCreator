import { useState } from "react";

export default function useSendImage() {
    const [image, setImage] = useState<File | null>(null);
    
    return { image, setImage };
}