import { makeAutoObservable } from "mobx";
class Store {
    id:number = 1
    address: string = "Address";
    description: string = "Description";
    email: string = "Email";
    firstName: string = "First Name";
    lastName: string = "Last Name";
    phonenumber: string = "Phone Number";
    title: string = "Title";
    experience: {[key: string]: [string, string] } = {
        1: ["", ""],
        2: ["", ""],
        3: ["", ""],
    };

    constructor(){
        makeAutoObservable(this);
    }

    setPosition(id: number, position : string){
        this.experience[id][0] = position;
    }
    setDescribe(id:number, describe : string){
        this.experience[id][1] = describe;
    }
    nextId() {
        if (this.id < Object.keys(this.experience).length) {
            this.id++;
        }
    }

    prevID() {
        if (this.id > 1) {
            this.id--;
        }
    }
        
}
const CVStore = new Store();
export default CVStore;

