import { useState } from "react";

export default function FCDescription(){
    const [description, setDescription] = useState<string>("");

    return {description, setDescription}
}