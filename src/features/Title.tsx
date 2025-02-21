import {useState } from "react";

export default function FCTitlte(){
    const [title, setTitle] = useState<string>("");

    return {title, setTitle}
}