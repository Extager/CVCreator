import { useState } from "react";

export default function useSendTitle(){
    const [title, setTitle] = useState<string>("");

    return {title, setTitle};
}