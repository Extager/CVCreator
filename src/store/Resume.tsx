import { makeAutoObservable } from "mobx";

class ResumeStore{

    data = {
        firstName: "",
        lastName: "",
        email: "",
        title: "",
        phoneNumber: "",
        description: "",
        address: ""
    };

    constructor(){
        makeAutoObservable(this);
    }

    
}