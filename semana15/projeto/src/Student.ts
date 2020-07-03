import {Users} from "./Users"

export class Students implements Users{
    constructor(
        public id: number,
        public name: string,
        public email:  string,
        public birthDate: string
    ){}
    
}