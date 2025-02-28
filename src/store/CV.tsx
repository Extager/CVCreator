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
    img:File | null = null;
    birth: string = "";
    objective:string = '';
    showed:boolean = false;
    id_proj:number = 1;
    selected_HS:string = "";
    selected_SS:string = "";
    selected_XYZ:string = "";
    inform:string = "";

    proj: {[key: string]: [string, string] } = {
        1: ["", ""],
        2: ["", ""],
        3: ["", ""],
    };


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

    setImg(image:File | null){
        this.img = image;
    }
        
    nextProjId() {
        if (this.id_proj < Object.keys(this.experience).length) {
            this.id_proj++;
        }
    }

    prevProjID() {
        if (this.id_proj > 1) {
            this.id_proj--;
        }
    }

    setShowedProj(){
        this.showed = true;
    }

}
const CVStore = new Store();
export default CVStore;

