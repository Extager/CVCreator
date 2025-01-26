import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import NotFound from "./not-found";

export default function Routing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<App />} path="/"/>
                <Route element={<NotFound />} path="*" />
            </Routes>
        </BrowserRouter>
    );
}