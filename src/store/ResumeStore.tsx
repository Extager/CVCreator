import { makeAutoObservable } from "mobx";
import { ResumeData } from "../interfaces/ResumeData";

class ResumeStore {
  address: string = "Address";
  description: string = "Description";
  email: string = "Email";
  firstName: string = "First Name";
  lastName: string = "Last Name";
  phoneNumber: string = "Phone Number";
  title: string = "Title";

  constructor() {
    makeAutoObservable(this);
  }

  updateData(data: ResumeData) {
    this.address = data.address ?? this.address;
    this.description = data.description ?? this.description;
    this.email = data.email ?? this.email;
    this.firstName = data.firstName ?? this.firstName;
    this.lastName = data.lastName ?? this.lastName;
    this.phoneNumber = data.phoneNumber ?? this.phoneNumber;
    this.title = data.title ?? this.title;
  }
}

export default new ResumeStore();