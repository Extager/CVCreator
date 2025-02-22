import { makeAutoObservable } from "mobx";
import { CVData } from "../ts/CVData";

class Store {
    address: string = "Address";
    description: string = "Description";
    email: string = "Email";
    firstName: string = "First Name";
    lastName: string = "Last Name";
    phonenumber: string = "Phone Number";
    title: string = "Title";

    constructor(){
        makeAutoObservable(this);
    }

    updateData(data: CVData){
        this.address = data.address ?? this.address;
        this.description = data.description ?? this.description;
        this.email = data.email ?? this.email;
        this.firstName = data.firstName ?? this.firstName;
        this.lastName = data.lastName ?? this.lastName;
        this.phonenumber = data.phonenumber ?? this.phonenumber;
        this.title = data.title ?? this.title;
    }
}
const CVStore = new Store();
export default CVStore;

