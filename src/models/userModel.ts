import { State } from "./state";

export interface UserModel {
    firstName: string, 
    lastName:string, 
    emailAddress:string, 
    password:string,
    jobTitle:string, 
    company:string,
    jobFunction:string,
    city:string, 
    state: State, 
    zipCode:number
}